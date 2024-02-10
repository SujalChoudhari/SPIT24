
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
import { BarChart, BarChartIcon } from "lucide-react";

export default function analy1() {
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
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                            <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-1 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                    <ChevronRightIcon className="h-4 w-4" />
                                    <span className="font-medium">Design wireframes</span>
                                    <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">25%</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronRightIcon className="h-4 w-4" />
                                    <span className="font-medium">Develop frontend</span>
                                    <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">50%</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronRightIcon className="h-4 w-4" />
                                    <span className="font-medium">Test features</span>
                                    <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">10%</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">Performance</CardTitle>
                            <LineChartIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <div className="text-2xl font-bold">$23,452</div>
                            <CurvedlineChart className="h-[150px]" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
                            <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                    <ChevronRightIcon className="h-4 w-4" />
                                    <span className="font-medium">Launch campaign</span>
                                    <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">25%</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronRightIcon className="h-4 w-4" />
                                    <span className="font-medium">Hire team</span>
                                    <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">50%</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronRightIcon className="h-4 w-4" />
                                    <span className="font-medium">Test features</span>
                                    <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">10%</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Card>
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
                                <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">25%</Badge>
                            </div>
                            <div className="flex items-center gap-2">
                                <ChevronRightIcon className="h-4 w-4" />
                                <span className="font-medium">Develop frontend</span>
                                <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">50%</Badge>
                            </div>
                            <div className="flex items-center gap-2">
                                <ChevronRightIcon className="h-4 w-4" />
                                <span className="font-medium">Test features</span>
                                <Badge className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full">10%</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="grid grid-cols-3 gap-4">
                    <Card className="h-full w-[30vw] max-w-xs">
                        <CardHeader className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <BarChartIcon className="h-6 w-6" />
                                <div className="text-lg font-bold">8,765</div>
                            </div>
                            <CardDescription>Total Sales</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <BarChart className="aspect-[3/2]" />
                        </CardContent>
                    </Card>
                    <Card className="h-full w-[30vw] max-w-xs">
                        <CardHeader className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <BarChartIcon className="h-6 w-6" />
                                <div className="text-lg font-bold">8,765</div>
                            </div>
                            <CardDescription>Total Sales</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <BarChart className="aspect-[3/2]" />
                        </CardContent>
                    </Card>
                    <Card className="h-full w-[30vw] max-w-xs">
                        <CardHeader className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <BarChartIcon className="h-6 w-6" />
                                <div className="text-lg font-bold">8,765</div>
                            </div>
                            <CardDescription>Total Sales</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <BarChart className="aspect-[3/2]" />
                        </CardContent>
                    </Card>
                    <Card className="h-full w-[30vw] max-w-xs">
                        <CardHeader className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <BarChartIcon className="h-6 w-6" />
                                <div className="text-lg font-bold">8,765</div>
                            </div>
                            <CardDescription>Total Sales</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <BarChart className="aspect-[3/2]" />
                        </CardContent>
                    </Card>
                    <Card className="h-full w-[30vw] max-w-xs">
                        <CardHeader className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <BarChartIcon className="h-6 w-6" />
                                <div className="text-lg font-bold">8,765</div>
                            </div>
                            <CardDescription>Total Sales</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <BarChart className="aspect-[3/2]" />
                        </CardContent>
                    </Card>
                    <Card className="h-full w-[30vw] max-w-xs">
                        <CardHeader className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <BarChartIcon className="h-6 w-6" />
                                <div className="text-lg font-bold">8,765</div>
                            </div>
                            <CardDescription>Total Sales</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <BarChart className="aspect-[3/2]" />
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}


function Package2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    )
}


function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function ActivityIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    )
}


function ChevronRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function LineChartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
        </svg>
    )
}


function CurvedlineChart(props) {
    return (
        <div {...props}>
            <ResponsiveLine
                data={[
                    {
                        id: "Desktop",
                        data: [
                            { x: "Jan", y: 43 },
                            { x: "Feb", y: 137 },
                            { x: "Mar", y: 61 },
                            { x: "Apr", y: 145 },
                            { x: "May", y: 26 },
                            { x: "Jun", y: 154 },
                        ],
                    },
                    {
                        id: "Mobile",
                        data: [
                            { x: "Jan", y: 60 },
                            { x: "Feb", y: 48 },
                            { x: "Mar", y: 177 },
                            { x: "Apr", y: 78 },
                            { x: "May", y: 96 },
                            { x: "Jun", y: 204 },
                        ],
                    },
                ]}
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


function CalendarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
    )
}


function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}
