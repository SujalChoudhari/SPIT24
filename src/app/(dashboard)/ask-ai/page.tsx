"use client";
import { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from 'axios';
import Loader from '@/components/Loader';
import ReactMarkdowm from "react-markdown";
import { defaultTasks } from '@/tasks';
import { analytics } from '@/analytics';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export default function Component() {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const driverObj = driver({
        showProgress: true,
        steps: [
            { element: '#title', popover: { title: 'Ask AI', description: ' questions related to the Team and Project', side: "right", align: 'start' } },
            { element: '#enter', popover: { title: 'Enter Query', description: 'You can start, "Is the budget enough?" ', side: "left", align: 'start' } },
            { element: '#send', popover: { title: 'Ask the AI', description: 'Submit your Query', side: "left", align: 'start' } },
            { element: '#ans', popover: { title: 'Answers', description: 'Your answers will be displayed here', side: "right", align: 'start' } },
        ]
    });

    useEffect(() => {
        driverObj.drive()
    }, [])


    const handleSummarize = async () => {
        try {
            setLoading(true);
            const prompt = "Analyze the Kanban Board and Overall Data and Answer the users question. Use Markdown formatting to highlight and Keep answers Short, and Complete along with Pointers.  Task Data:" + JSON.stringify(defaultTasks) + " Overall Data" + JSON.stringify(analytics) + " Question: "
            const response = await axios.get(`/api/gemini?query=${encodeURIComponent(prompt + (inputText ? inputText : "How much is the progress?"))}`);
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
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl" id='title'>Ask AI</h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Get a summary of any text using advanced AI. Enter your text below and let our AI do the rest.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <div className="w-full max-w-[400px]">
                            <Input
                                id='enter'
                                placeholder="Ask Questions Here"
                                value={inputText}
                                className='w-[25lvw]'
                                onChange={(e) => setInputText(e.target.value)}
                            />
                        </div>
                        <button id='send' onClick={handleSummarize} disabled={loading} className="group relative grid overflow-hidden rounded-full pl-4 pr-10 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800" />
                            <span className="z-10 py-0.5 text-sm  text-neutral-100 flex justify-center">{loading ? 'Loading...' : 'Summarize'}</span>
                        </button>


                    </div>
                </div>
            </div>
            <div className="container px-4 md:px-6 mt-8">
                <div id='ans' className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
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
