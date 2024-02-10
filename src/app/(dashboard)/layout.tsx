"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GanttChart, ChevronsLeftIcon, HomeIcon, ShoppingBagIcon, UsersIcon, BarChart2Icon, SettingsIcon, GanttChartSquare, Kanban, KanbanSquare, MailIcon, MailMinus, MailPlus, LucideAreaChart, Settings, Code2Icon, Tv2Icon, GlassWater, WindIcon, LucideVegan, ListVideo, KeyboardIcon, LogOut, ShieldQuestion, SidebarIcon } from "lucide-react";
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

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check on mount
        console.log(links)
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`flex flex-col h-full border-r bg-gray-100/40 ${isMobile ? 'md:hidden' : 'md:grid md:grid-rows-[auto_1fr]'}`}>
            <div className={`flex items-center justify-between p-4 bg-gray-100/50 md:flex-col md:items-start md:gap-4 md:p-6 ${isMobile ? 'pb-16' : ''}`}>
                <Link href="#">
                    <p className="flex items-center gap-2 text-xl font-bold">
                        <WindIcon className="w-6 h-6" />
                        {!isMobile && <span>FlowByte</span>}
                    </p>
                </Link>
            </div>
            {isMobile && (
                <div className="fixed bottom-0 left-0 right-0 bg-gray-100/50 p-4 flex justify-around">
                    {links.map((link, index) => (
                        <SidebarIcon key={index} {...link} />
                    ))}
                </div>
            )}
            <nav className={`flex-1 overflow-auto p-4 space-y-4 md:p-2 md:space-y-2 lg:space-y-4 ${isMobile ? 'hidden md:block' : ''}`}>
                {links.map((link, index) => (
                    <SidebarLink key={index} {...link} />
                ))}
            </nav>
        </div>
    );
};
interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const auth = useAuth()
    return <div className="grid min-h-screen w-full bg-gray-100/50 items-start md:grid-cols-[250px_1fr] lg:items-center xl:items-center">
        <Sidebar
            links={[
                { icon: <HomeIcon />, title: "Home", href: "/home" },
                { icon: <KanbanSquare />, title: "Tasks", href: "/tasks" },
                { icon: <GanttChartSquare />, title: "Timeline", href: "/gantt" },
                { icon: <MailPlus />, title: "Invite", href: "/invite" },
                { icon: <ShieldQuestion />, title: "Ask AI", href: "/ask-ai" },
                { icon: <LucideAreaChart />, title: "Analytics", href: "/analytics" },
                { icon: <KeyboardIcon />, title: "Chat", href: "/chat" },
                { icon: <Tv2Icon />, title: "Team Meet", href: "/team-meet" },
                { icon: <ListVideo />, title: "Live Code", href: "https://vscode.dev/github/SujalChoudhari/Coda" },
                { icon: <Code2Icon />, title: "Feedback API", href: "/feedback" },
                { icon: <Avatar className="w-[30px] h-[30px]"><AvatarImage src={auth?.user?.photoURL || "https://github.com/shadcn.png"} alt="profile" /> </Avatar>, title: auth?.user?.displayName || "User", href: "/profile" },
                { icon: <LogOut />, title: "Logout", href: "/logout" },
            ]}
        />
        <div className="flex flex-col w-full min-h-screen">
            <main className="flex-1 p-4 md:p-6 lg:p-8 xl:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                    {children}
                </div>
            </main>
        </div>
    </div>
};

export default Layout;
