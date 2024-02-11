
"use client";
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResponsiveLine } from "@nivo/line"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { ResponsiveBar } from "@nivo/bar";
import { useAuth } from '@/context/AuthContext';
import { ActivityIcon, ArrowDownToDotIcon, BarChart, BarChartIcon, CalendarIcon, ChevronRightIcon, FileWarning, LineChartIcon, ListTodo, MailWarning, PlusIcon, Redo2, SearchIcon, TimerIcon } from "lucide-react";
import { analytics } from "@/analytics";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useEffect } from "react";
import { Burnupdown } from "@/components/burnupdown";
import { Velocity } from "@/components/velocity";

export default function analy1() {

    const driverObj = driver({
        showProgress: true,
        steps: [
            { element: '#inprogress', popover: { title: 'Current Progress', description: 'This the the collective progress of the product development phase', side: "left", align: 'start' } },
            { element: '#expvsbud', popover: { title: 'Comparison', description: 'Compare your alloted vs spend money', side: "left", align: 'start' } },
            { element: '#upcomming', popover: { title: 'Upcomming', description: 'Upcomming Sprints are listed Here', side: "left", align: 'start' } },
            { element: '#tasks', popover: { title: 'Latest Sprint', description: 'Tasks related to active sprint are shown here. ', side: "right", align: 'start' } },
            { element: '#general', popover: { title: 'Overall Stats', description: 'Collection of important stats, Ask questions related to this on "Ask AI"', side: "right", align: 'start' } },

        ]
    });


    useEffect(() => {
        driverObj.drive()
    }, [])

    const auth = useAuth();
    return (
        <div key="1" className="flex flex-col w-[80lvw] min-h-screen">
            <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
                <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                </nav>
                <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="flex-1 ml-auto sm:flex-initial">
                        <div className="relative">
                            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <Input
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                                placeholder="Search products..."
                                type="search"
                            />
                        </div>
                    </form>
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <img
                            alt="Avatar"
                            className="rounded-full"
                            height="80"
                            src={auth?.user?.photoURL || "/imga.png"}
                            style={{
                                aspectRatio: "80/80",
                                objectFit: "cover",
                            }}
                            width="80"
                        />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card id="inprogress">
                        <CardHeader  className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                            <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-1 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex cursor-pointer items-center gap-2">
                                    <ChevronRightIcon className="h-4 w-4" />
                                    <span className="font-medium">Design wireframes</span>
                                    <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">{analytics.designWireframe}</Badge>
                                </div>
                                <div className="flex cursor-pointer items-center gap-2">
                                    <ChevronRightIcon className="h-4 w-4" />
                                    <span className="font-medium">Develop frontend</span>
                                    <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">{analytics.developFrontend}</Badge>
                                </div>
                                <div className="flex cursor-pointer items-center gap-2">
                                    <ChevronRightIcon className="h-4 w-4" />
                                    <span className="font-medium">Test features</span>
                                    <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">{analytics.testFeatures}</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card id="expvsbud">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">Expenditure vs Budget</CardTitle>
                            <LineChartIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <div className="text-2xl font-bold">{analytics.totalExpenditure} / {analytics.totalBudget}</div>
                            <CurvedlineChart className="h-[150px]" />
                        </CardContent>
                    </Card>
                    <Card id="upcomming">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
                            <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                    <ChevronRightIcon className="h-4 w-4" />
                                    <span className="font-medium">Launch campaign</span>
                                    <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">{analytics.launchCampaign}</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronRightIcon className="h-4 w-4" />
                                    <span className="font-medium">Hire team</span>
                                    <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">{analytics.hireTeam}</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronRightIcon className="h-4 w-4" />
                                    <span className="font-medium">Test features</span>
                                    <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">{analytics.testFeatures}</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Card id="tasks">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Tasks</CardTitle>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <PlusIcon className="w-4 h-4" />
                                    <span className="sr-only">Add new task</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Add</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Task</DropdownMenuItem>
                                <DropdownMenuItem>Sub-task</DropdownMenuItem>
                                <DropdownMenuItem>Separator</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <ChevronRightIcon className="h-4 w-4" />
                                <span className="font-medium">Design wireframes</span>
                                <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">{analytics.tasks.designedWireframe}</Badge>
                            </div>
                            <div className="flex items-center gap-2">
                                <ChevronRightIcon className="h-4 w-4" />
                                <span className="font-medium">Develop frontend</span>
                                <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">{analytics.tasks.developFrontend}</Badge>
                            </div>
                            <div className="flex items-center gap-2">
                                <ChevronRightIcon className="h-4 w-4" />
                                <span className="font-medium">Test features</span>
                                <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">{analytics.tasks.testFeatures}</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div id="general" className="grid grid-cols-3 gap-4">
                    <Card className="h-full w-[30vw] max-w-xs">
                        <CardHeader className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <TimerIcon className="h-6 w-6" />
                                <div className="text-lg font-bold">{analytics.hrsIntoProject}</div>
                            </div>
                            <CardDescription>Hours Into Project</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="h-full w-[30vw] max-w-xs">
                        <CardHeader className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <ListTodo className="h-6 w-6" />
                                <div className="text-lg font-bold">{analytics.issuesFixed}</div>
                            </div>
                            <CardDescription>Issues Fixed</CardDescription>
                        </CardHeader>

                    </Card>
                    <Card className="h-full w-[30vw] max-w-xs">
                        <CardHeader className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <Redo2 className="h-6 w-6" />
                                <div className="text-lg font-bold">{analytics.totalRevisionsMade}</div>
                            </div>
                            <CardDescription>Total Revisions Made</CardDescription>
                        </CardHeader>

                    </Card>
                    <Card className="h-full w-[30vw] max-w-xs">
                        <CardHeader className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <MailWarning className="h-6 w-6" />
                                <div className="text-lg font-bold">{analytics.pendingIssues}</div>
                            </div>
                            <CardDescription>Pending Issues</CardDescription>
                        </CardHeader>

                    </Card>
                    <Card className="h-full w-[30vw] max-w-xs">
                        <CardHeader className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <FileWarning className="h-6 w-6" />
                                <div className="text-lg font-bold">{analytics.pendingTasks}</div>
                            </div>
                            <CardDescription>Pending Tasks</CardDescription>
                        </CardHeader>

                    </Card>
                    <Card className="h-full w-[30vw] max-w-xs">
                        <CardHeader className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <ArrowDownToDotIcon className="h-6 w-6" />
                                <div className="text-lg font-bold">{analytics.issuesFixed}</div>
                            </div>
                            <CardDescription>Issue Fixed</CardDescription>
                        </CardHeader>
                    </Card>
                    <Velocity/>
                </div>
            </main>
        </div>
    )
}


function CurvedlineChart(props) {
    return (
        <div {...props}>
            <ResponsiveLine
                data={analytics.expVsBudData}
                margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                xScale={{
                    type: "point",
                }}
                yScale={{
                    type: "linear",
                    min: 0,
                    max: "auto",
                }}
                curve="monotoneX"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 16,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickValues: 5,
                    tickPadding: 16,
                }}
                colors={["#2563eb", "#e11d48"]}
                pointSize={6}
                useMesh={true}
                gridYValues={6}
                theme={{
                    tooltip: {
                        chip: {
                            borderRadius: "9999px",
                        },
                        container: {
                            fontSize: "12px",
                            textTransform: "capitalize",
                            borderRadius: "6px",
                        },
                    },
                    grid: {
                        line: {
                            stroke: "#f3f4f6",
                        },
                    },
                }}
                role="application"
            />
        </div>
    )
}