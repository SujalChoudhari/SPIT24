"use client"
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { useAuth } from '@/context/AuthContext';

export default function Logout1() {
  const auth = useAuth();
  return (
    <Card key="1" className="w-full max-w-md mx-auto">
      <CardContent className="p-6 space-y-6 text-base md:space-y-8 md:text-lg">
        <div className="flex  space-x-4">
          <Link className="rounded-full overflow-hidden" href="#">
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
            
          </Link>
          
          
          <div className="flex flex-col w-2">
                    <h1 className="text-[20px] font-bold">{auth?.user?.displayName}</h1>
                    <p className="text-gray-500 text-[15px] dark:text-gray-400">ID: {auth?.user?.uid}</p>
                    <p className="text-gray-500 text-[15px] font-bold dark:text-gray-400">{auth?.user?.email}</p>
                    <p className="text-gray-500 text-[15px] dark:text-gray-400">Designer</p>
                </div>
        
          <div className="flex items-center space-x-1.5 ml-auto">
            <div className="hidden items-center space-x-1.5 md:flex" />
          </div>
        </div>
        <div className="mx-auto max-w-md space-y-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold tracking-tighter">Session</h1>
            <p className="text-gray-500 dark:text-gray-400">You logged in 2 hours ago.</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold tracking-tighter">Duration</h1>
            <p className="text-gray-500 dark:text-gray-400">You've been logged in for 2 hours.</p>
          </div>
          <div className="text-center" />
          <button className="group  relative grid overflow-hidden rounded-full px-8 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
            <span>
              <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800" />
            <span className="z-10 py-0.5 text-sm text-neutral-100">Get notified</span>
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
