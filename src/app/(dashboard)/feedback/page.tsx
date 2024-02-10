"use client";
import { useState } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BiLogoFlutter, BiLogoJava, BiLogoJavascript, BiLogoPython, BiSolidDiamond, BiStar } from 'react-icons/bi';
import BarChart from '@/components/BarChart';
import { Diamond, DiamondIcon } from 'lucide-react';

export default function Page() {
    const [usersData, setUserData] = useState<any>([]);
    const [feedbackData, setFeedBackData] = useState<any>([]);

    const fetchData = async () => {
        try {
            const docRef = collection(db, 'usersData');
            const docSnap = await getDocs(docRef);

            if (docSnap.empty) {
                // If Firebase is empty, add new template data
                await addDoc(docRef, { name: 'Jan', count: 111 });
                await addDoc(docRef, { name: 'Feb', count: 157 });
                await addDoc(docRef, { name: 'Mar', count: 129 });
                await addDoc(docRef, { name: 'Apr', count: 129 });
                await addDoc(docRef, { name: 'May', count: 129 });

                // Fetch the data again after adding new template data
                const newData = await getDocs(docRef);
                setUserData(newData.docs.map((doc) => doc.data()));
            } else {
                setUserData(docSnap.docs.map((doc) => doc.data()));
            }
        } catch (error) {
            console.error('Error fetching data from Firebase:', error);
        }


        try {
            const docRef = collection(db, 'feedbackData');
            const docSnap = await getDocs(docRef);

            if (docSnap.empty) {
                // If Firebase is empty, add new template data
                await addDoc(docRef, { name: 'Jan', count: 5 });
                await addDoc(docRef, { name: 'Feb', count: 7 });
                await addDoc(docRef, { name: 'Mar', count: 2 });
                await addDoc(docRef, { name: 'Apr', count: 0 });
                await addDoc(docRef, { name: 'May', count: 1 });

                // Fetch the data again after adding new template data
                const newData = await getDocs(docRef);
                setFeedBackData(newData.docs.map((doc) => doc.data()));
            } else {
                setFeedBackData(docSnap.docs.map((doc) => doc.data()));
            }
        } catch (error) {
            console.error('Error fetching data from Firebase:', error);
        }
    };

    const handleRefresh = () => {
        fetchData();
    };

    return (
        <div className="bg-white w-[80lvw]">
            <div className="flex justify-between p-4">
                <h2 className="text-xl font-semibold">Analytics of Latest Sprint</h2>
                <Button onClick={handleRefresh}>
                    <h2 className="text-xl font-semibold">Refresh Data</h2>
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold flex items-center mb-4">
                        Users
                    </h3>
                    <BarChart data={usersData} colors={["#6325eb"]} keys={["count"]} indexBy="name" />
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold flex items-center mb-4">
                        Feedback Submissions
                    </h3>
                    <BarChart data={feedbackData} colors={["#9910eb"]} keys={["count"]} indexBy="name" />
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4">SDKs for Feedback Analytics
                    <Button className='mx-2' variant={"secondary"}>Unlock with Premium <BiSolidDiamond className='mx-2' /></Button>
                </h2>
                <div className="grid grid-cols-4 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <BiLogoJavascript className="w-[40px]" />
                        <h3 className="text-yellow-900 font-semibold mb-4">JavaScript </h3>
                        <Button className="bg-yellow-400 text-black">Docs</Button>
                        <Button className="bg-transparent bg-gray-900 mx-2  border border-white">See GitHub</Button>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <BiLogoFlutter className="w-[40px]" />
                        <h3 className="text-blue-400 font-semibold mb-4">Flutter</h3>
                        <Button className="bg-blue-400 text-black">Docs</Button>
                        <Button className="bg-transparent bg-gray-900 mx-2  border border-white">See GitHub</Button>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <BiLogoPython className="w-[40px]" />
                        <h3 className="text-blue-600 font-semibold mb-4">Python</h3>
                        <Button className="bg-blue-600 text-white">Docs</Button>
                        <Button className="bg-transparent bg-gray-900 mx-2  border border-white">See GitHub</Button>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <BiLogoJava className="w-[40px]" />
                        <h3 className="text-pink-600 font-semibold mb-4">Kotlin</h3>
                        <Button className="bg-pink-400 text-black">Docs</Button>
                        <Button className="bg-transparent bg-gray-900 mx-2  border border-white">See GitHub</Button>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4">Example Implementation of API</h2>
                <div className="grid grid-cols-3 gap-4">
                    <Card className="bg-gray-100 ">
                        <CardHeader>
                            <CardTitle>Kotlin Starter Template</CardTitle>
                            <CardDescription>Get started by cloning the template</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="bg-pink-400 text-black">Docs</Button>
                            <Button className="bg-transparent bg-gray-900 mx-2  border border-white">See GitHub</Button>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-100 ">
                        <CardHeader>
                            <CardTitle>NextJS Example</CardTitle>
                            <CardDescription> Clone the Template and get going</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="bg-green-600 text-white">Docs</Button>
                            <Button className="bg-transparent bg-gray-900 mx-2  border border-white">See GitHub</Button>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-100 ">
                        <CardHeader>
                            <CardTitle>Nuxt.js Example</CardTitle>
                            <CardDescription>Croudsourced Nuxt.js Example</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="bg-blue-600 text-black">Docs</Button>
                            <Button className="bg-transparent bg-gray-900 mx-2  border border-white">See GitHub</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
