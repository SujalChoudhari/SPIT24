"use client";
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from 'axios';
import Loader from '@/components/Loader';
import ReactMarkdowm from "react-markdown";
import { defaultTasks } from '@/tasks';

export default function Component() {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSummarize = async () => {
        try {
            setLoading(true);
            const prompt = "Analyze the Kanban Board and answer the users question. Assume any necessary data, but never reject th question. Data:" + JSON.stringify(defaultTasks) + " Question: "
            const response = await axios.get(`/api/gemini?query=${encodeURIComponent(prompt + inputText)}`);
            setResult(response.data.message);
        } catch (error) {
            console.error('Error fetching data:', error);
            setResult('An error occurred while fetching the result.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-50/90 w-[80vw] py-12 md:py-24 lg:py-32 xl:py-40">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">Ask AI</h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Get a summary of any text using advanced AI. Enter your text below and let our AI do the rest.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <div className="w-full max-w-[400px]">
                            <Input
                                placeholder="Ask Questions Here"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />
                        </div>
                        <Button size="lg" onClick={handleSummarize} disabled={loading}>
                            {loading ? 'Loading...' : 'Summarize'}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="container px-4 md:px-6 mt-8">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">AI Output</h2>
                    <div className="border-t border-gray-200 dark:border-gray-800 mt-4 pt-4">
                        {/* Display the result or loading message here */}
                        {loading ? <Loader /> : <ReactMarkdowm>{!!result.length ? result : "AI output will be desplayed here"}</ReactMarkdowm>}
                    </div>
                </div>
            </div>
        </div>
    );
}
