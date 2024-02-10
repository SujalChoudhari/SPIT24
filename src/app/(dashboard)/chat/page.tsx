"use client";
import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore'; // Import necessary functions for Firestore
import { db } from '@/firebase';
import { useAuth } from '@/context/AuthContext';
import { SendIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';


const Chat: React.FC = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const auth = useAuth();

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const messagesCollection = collection(db, 'chat');
                const messagesQuery = query(messagesCollection, orderBy('timestamp'));
                const snapshot = await getDocs(messagesQuery);

                if (!snapshot.empty) {
                    const messageArray = snapshot.docs.map((doc) => doc.data());
                    setMessages(messageArray);
                }
            } catch (error) {
                console.error('Error fetching messages from Firestore:', error);
            }
        };

        // Fetch messages on component mount
        fetchMessages();

        // Subscribe to changes in the 'chat' collection
        const unsubscribe = onSnapshot(collection(db, 'chat'), () => {
            // Fetch messages again whenever there is a change
            fetchMessages();
        });

        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, []); // Dependency array is empty to run the effect only once on mount

    const sendMessage = async () => {
        try {
            const messagesCollection = collection(db, 'chat');
            await addDoc(messagesCollection, {
                text: newMessage,
                timestamp: Date.now(),
                user: auth?.user?.displayName || "User",
            });
            setNewMessage('');
        } catch (error) {
            console.error('Error sending message to Firestore:', error);
        }
    };

    return (
        <div className="flex flex-col h-[90lvh] w-[70lvw]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex items-end ${auth?.user?.displayName === message.user ? 'justify-end' : ''}`}
                    >
                        <div
                            className={`max-w-xs ${auth?.user?.displayName === message.user ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                } p-2 rounded-lg`}
                        >
                            <ReactMarkdown>{message.text}</ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t p-4">
                <div className="flex space-x-3">
                    <textarea
                        className="flex-1 py-2 px-3 rounded-md min-h-[40px] border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Type your message"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    ></textarea>
                    <button
                        className="inline-flex mx-4 items-center min-h-[40px] max-h-[70px] justify-center px-4 rounded-md bg-blue-500 text-white"
                        onClick={sendMessage}
                    >
                        <SendIcon /> Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;