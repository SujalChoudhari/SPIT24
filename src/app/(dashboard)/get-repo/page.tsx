"use client";
import { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import toast from 'react-hot-toast';

export default function Component() {
    const [username, setUsername] = useState("");
    const [token, setToken] = useState("");
    const [repositories, setRepositories] = useState([]);

    const fetchRepositories = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`, {
                headers: token ? { Authorization: `Bearer ${token}` } : {},
            });

            if (response.ok) {
                const data = await response.json();
                setRepositories(data);
                toast.success("Retrived from Github API")
            } else {
                toast.error(`Error fetching repositories: ${response.statusText}`);
            }
        } catch (error) {
            toast.error(`Error fetching repositories: ${error.message}`);
        }
    };

    const handleViewRepositories = () => {
        if (!username) {
            toast.error('Please enter a GitHub username.');
            return;
        }

        fetchRepositories();
    };

    return (
        <div>
            <div className="mx-auto max-w-6xl w-[80lvw] px-4 sm:px-6 lg:px-8 py-6">
                <div className="space-y-6">
                    <div className="space-y-2 mb-[20lvh] text-center">
                        <h1 className="text-3xl font-bold tracking-tight">Authorize a Repository</h1>
                        <p className="text-gray-500 dark:text-gray-400 ">Enter your GitHub username to view their repositories</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="username">GitHub Username</Label>
                                <Input
                                    id="username"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="token">Access Token</Label>
                                <Input
                                    id="token"
                                    placeholder="Enter your access token"
                                    type="password"
                                    value={token}
                                    onChange={(e) => setToken(e.target.value)}
                                />
                                <div className="mt-2">
                                    We recommend creating a personal access token with the 
                                    <br />
                                    <Link className="underline mx-2" href="#" target="_blank">
                                        repo
                                    </Link>
                                    scope.
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Button className="w-full md:w-[200px] justify-center" onClick={handleViewRepositories}>
                                View Repositories
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-6xl w-[80lvw]  px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Repositories</h2>
                        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
                            {repositories.map((repo) => (
                                <li key={repo.id} className="py-2 flex items-center justify-between">
                                    <span className="text-lg font-semibold">{repo.name}</span>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-500">{`${repo.stargazers_count} Stars`}</span>
                                        <Button className="text-sm" variant="outline" >
                                            <Link href={repo.html_url} target="_blank">Open</Link>
                                        </Button>
                                        <Button className="text-sm" variant="outline" >
                                            <Link href={"/home"} target="_blank">Authorize</Link>
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
