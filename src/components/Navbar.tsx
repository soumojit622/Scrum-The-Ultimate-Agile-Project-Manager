"use client";

import { UserButton } from "@/features/auth/components/user-button";
import { usePathname } from "next/navigation";
import React from "react";
import MobileSidebar from "./mobile-sidebar";

const pathnameMap = {
    tasks: {
        title: "My Tasks",
        description: "Manage and track your tasks efficiently.",
    },
    projects: {
        title: "My Projects",
        description: "Keep an eye on your project tasks and progress.",
    },
};

const defaultMap = {
    title: "Home",
    description: "Monitor all your projects and tasks in one place.",
};

export const Navbar = () => {
    const pathname = usePathname();
    const pathnameParts = pathname.split("/");
    const pathnameKey = pathnameParts[3] as keyof typeof pathnameMap;
    const { title, description } = pathnameMap[pathnameKey] || defaultMap;

    return (
        <nav className="px-6 py-4 flex items-center justify-between bg-white shadow-sm">
            <div className="flex items-center gap-4">
                <MobileSidebar />
                <div className="hidden lg:flex flex-col">
                    <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                    <p className="text-gray-600 text-md">{description}</p>
                </div>
            </div>
            <UserButton />
        </nav>
    );
};
