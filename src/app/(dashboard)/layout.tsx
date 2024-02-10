"use client";
import React, { ReactNode, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GanttChart, ChevronsLeftIcon, HomeIcon, ShoppingBagIcon, UsersIcon, BarChart2Icon, SettingsIcon, GanttChartSquare, Kanban, KanbanSquare, MailIcon, MailMinus, MailPlus, LucideAreaChart, Settings, Code2Icon, Tv2Icon, GlassWater, WindIcon, LucideVegan, ListVideo, KeyboardIcon, LogOut, HelpingHand, ShieldCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { BiCodeCurly, BiLogoWhatsappSquare, BiWind } from "react-icons/bi";


interface SidebarLinkProps {
    icon: React.ReactElement;
    title: string;
    href: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, title, href }) => {
    const path = usePathname();

    return <Link href={href}>

        <Button className="flex items-center gap-4 rounded-lg px-4 py-2 my-2 text-sm font-medium" variant={path.includes(href) ? "default" : "ghost"}>
            {icon}
            {title}
        </Button>
    </Link>
};

interface SidebarProps {
    links: SidebarLinkProps[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => (
    <div className="flex flex-col h-full border-r bg-gray-100/40 md:grid md:grid-rows-[auto_1fr] md:bg-gray-100/50 lg:bg-gray-100/40">
        <div className="flex items-center justify-between p-4 bg-gray-100/50 md:flex-col md:items-start md:gap-4 md:p-6">
            <Link href="#">
                <p className="flex items-center gap-2 text-xl font-bold">
                    <WindIcon className="w-6 h-6" />
                    <span>FlowByte</span>
                </p>
            </Link>
        </div>
        <nav className="flex-1 overflow-auto p-4 space-y-4 md:p-2 md:space-y-2 lg:space-y-4">
            {links.map((link, index) => (
                <SidebarLink key={index} {...link} />
            ))}
        </nav>
    </div>
);

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const auth = useAuth()
    return <div className="grid  bg-purple-100/50 w-full  items-start md:grid-cols-[250px_1fr] lg:items-center xl:items-center">
        <Sidebar
            links={[
                { icon: <HomeIcon />, title: "Home", href: "/home" },
                { icon: <KanbanSquare />, title: "Sprints", href: "/tasks" },
                { icon: <GanttChartSquare />, title: "Timeline", href: "/gantt" },
                { icon: <ShieldCheck />, title: "Ask AI", href: "/ask-ai" },
                { icon: <MailPlus />, title: "Invite", href: "/invite" },
                { icon: <LucideAreaChart />, title: "Analytics", href: "/analytics" },
                { icon: <KeyboardIcon />, title: "Chat", href: "/chat" },
                { icon: <Tv2Icon />, title: "Team Meet", href: "/team-meet" },
                { icon: <ListVideo />, title: "Live Code", href: "https://vscode.dev/github/SujalChoudhari/Coda" },
                { icon: <Code2Icon />, title: "Feedback API", href: "/feedback" },
                { icon: <Avatar className="w-[30px] h-[30px]"><AvatarImage src={auth?.user?.photoURL || "https://github.com/shadcn.png"} alt="profile" /> </Avatar>, title: auth?.user?.displayName || "User", href: "/home" },
                { icon: <LogOut />, title: "Logout", href: "/logout" },
            ]}
        />
        <div className="flex flex-col w-full min-h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="fix w-full bottom-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
            <main className="flex-1 p-4 md:p-6 lg:p-8 xl:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                    {children}
                </div>
            </main>
        </div>
    </div>
};

export default Layout;
