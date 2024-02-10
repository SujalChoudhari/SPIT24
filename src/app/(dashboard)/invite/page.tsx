"use client";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Emaili() {
    return (
        <Card key="1" className=" mt-10 mx-40 w-[50lvw]  relative">
            <CardHeader className="p-6 flex flex-col items-center">
                <CardTitle className="text-2xl font-bold">Add them as Collaborator</CardTitle>
                <CardDescription className="mt-4">Enter an email address to send the invite.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                <div className="space-y-2">
                    <Label className="sr-only" htmlFor="email">
                        Email
                    </Label>
                    <Input id="email" placeholder="Email" type="email" />
                </div>
            </CardContent>
            <CardFooter className="p-6 bg-gray-100 flex flex-col items-center gap-2">
                <Button className="w-full flex items-center">
                    Send Invite
                    <ArrowRightIcon className="ml-auto" />
                </Button>
            </CardFooter>
        </Card>
    )
}


function XIcon(props) {
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}


function ArrowRightIcon(props) {
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
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
