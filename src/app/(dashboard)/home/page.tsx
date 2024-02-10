//@ts-nocheck
"use client";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { ActivityIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/context/AuthContext';
import { db } from '@/firebase';
import { collection, query, getDocs, addDoc } from 'firebase/firestore';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const tasksData = [
    { title: "Fixing a bug", description: "Find and resolve a bug in the codebase.", progress: 10 },
    { title: "Implementing feature", description: "Add a new feature to enhance functionality.", progress: 20 },
    { title: "Refactoring code", description: "Optimize and restructure existing code for better maintainability.", progress: 15 },
    { title: "Writing tests", description: "Create unit tests to ensure code reliability.", progress: 10 },
    { title: "Creating Figma design", description: "Design user interfaces and experiences using Figma.", progress: 5 },
    { title: "Optimizing performance", description: "Identify and improve application performance bottlenecks.", progress: 25 },
    { title: "Deploying application", description: "Deploy the application to a server or cloud platform.", progress: 30 },
    { title: "Reviewing pull requests", description: "Review and provide feedback on code changes from team members.", progress: 15 },
    { title: "Documenting code", description: "Write comprehensive documentation for the codebase.", progress: 10 },
    { title: "Conducting code review", description: "Lead a thorough review of code changes in a collaborative session.", progress: 5 },
    { title: "Meeting with stakeholders", description: "Engage in discussions with project stakeholders to gather requirements.", progress: 5 },
];

const Component = () => {
    const [tasks, setTasks] = useState([]);
    const auth = useAuth();

    const driverObj = driver({
        showProgress: true,
        steps: [
            { element: '#avatar', popover: { title: 'Your Profile', description: 'Here is your Profile Picture', side: "left", align: 'start' } },
            { element: '#details', popover: { title: 'Your Details', description: 'Here is your Profile Details', side: "right", align: 'start' } },
            { element: '#tasks', popover: { title: 'Your Tasks', description: 'Find All your tasks', side: "right", align: 'start' } },

        ]
    });

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const userTasksCollection = collection(db, 'users', auth?.user?.uid, 'tasks');
                const tasksQuery = query(userTasksCollection);
                const snapshot = await getDocs(tasksQuery);
                driverObj.drive()
                if (snapshot.empty) {
                    // Add demo tasks if the collection is empty
                    const demoTasks = [
                        { title: "Fixing a bug", description: "Find and resolve a bug in the codebase.", progress: 10 },
                        { title: "Implementing feature", description: "Add a new feature to enhance functionality.", progress: 20 },
                        { title: "Refactoring code", description: "Optimize and restructure existing code for better maintainability.", progress: 15 },
                        { title: "Writing tests", description: "Create unit tests to ensure code reliability.", progress: 10 },
                        { title: "Creating Figma design", description: "Design user interfaces and experiences using Figma.", progress: 5 },
                        { title: "Optimizing performance", description: "Identify and improve application performance bottlenecks.", progress: 25 },
                        { title: "Deploying application", description: "Deploy the application to a server or cloud platform.", progress: 30 },
                        { title: "Reviewing pull requests", description: "Review and provide feedback on code changes from team members.", progress: 15 },
                        { title: "Documenting code", description: "Write comprehensive documentation for the codebase.", progress: 10 },
                        { title: "Conducting code review", description: "Lead a thorough review of code changes in a collaborative session.", progress: 5 },
                        { title: "Meeting with stakeholders", description: "Engage in discussions with project stakeholders to gather requirements.", progress: 5 },
                    ];


                    // Randomly choose a subset of tasks to add
                    const numberOfTasksToAdd = Math.floor(Math.random() * demoTasks.length) + 1;
                    const randomTasks = demoTasks.sort(() => 0.5 - Math.random()).slice(0, numberOfTasksToAdd);

                    randomTasks.forEach(async (task) => {
                        await addDoc(userTasksCollection, task);
                    });

                    setTasks(randomTasks);
                } else {
                    const userTasks = snapshot.docs.map((doc) => doc.data());
                    setTasks(userTasks);
                }
            } catch (error) {
                console.error('Error fetching tasks from Firestore:', error);
            }
        };

        if (auth?.user?.uid) {
            fetchTasks();
        }
    }, [auth?.user?.uid]);

    return (
        <div className="flex min-h-screen items-start w-full py-6">
            <img
                alt="Avatar"
                id="avatar"
                className="rounded-full"
                height="80"
                src={auth?.user?.photoURL || "/imga.png"}
                style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                }}
                width="80"
            />
            <div className="container grid gap-6 px-4 mt-5 ml-0 md:px-6">
                <div id='details' className="flex flex-col">
                    <h1 className="text-2xl font-bold">{auth?.user?.displayName}</h1>
                    <p className="text-gray-500 dark:text-gray-400">ID: {auth?.user?.uid}</p>
                    <p className="text-gray-500 font-bold dark:text-gray-400">{auth?.user?.email}</p>
                    <p className="text-gray-500 dark:text-gray-400">Designer</p>
                </div>

                <div id='tasks' className="grid gap-4 w-[65lvw]  mx-auto mt-4">
                    {tasks.map((task, index) => (
                        <Card key={index}>
                            <CardHeader >
                                <CardTitle>{task.title}</CardTitle>
                                <CardDescription>{task.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-2 w-full">
                                    <div className="flex items-center gap-2 w-full">
                                        <ActivityIcon className="w-6 h-6" />
                                        <span className="text-sm font-medium">Task {index + 1}</span>
                                        <span className="ml-auto text-sm text-gray-500 dark:text-gray-500">{`${task.progress}%`}</span>
                                    </div>
                                    <Progress
                                        className="h-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 dark:bg-gradient-to-r dark:from-pink-600 dark:to-purple-700"
                                        value={task.progress}
                                        variant={"linear"}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ActivityIcon and FileEditIcon components remain unchanged

export default Component;
