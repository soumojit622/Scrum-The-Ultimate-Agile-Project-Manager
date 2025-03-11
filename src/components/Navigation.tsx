"use client";

import { useWorkspaceId } from "@/features/workspaces/hook/use-workspace-id";
import { cn } from "@/lib/utils";
import { SettingsIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill } from "react-icons/go";

const routes = [
    {
        label: "Home",
        href: "",
        icon: GoHome,
        activeIcon: GoHomeFill,
    },
    {
        label: "My Tasks",
        href: "/tasks",
        icon: GoCheckCircle,
        activeIcon: GoCheckCircleFill,
    },
    {
        label: "Settings",
        href: "/settings",
        icon: SettingsIcon,
        activeIcon: SettingsIcon,
    },
    {
        label: "Members",
        href: "/members",
        icon: UsersIcon,
        activeIcon: UsersIcon,
    },
];

export const Navigation = () => {
    const workspaceId = useWorkspaceId();
    const pathname = usePathname();

    return (
        <ul className="flex flex-col space-y-2">
            {routes.map((item) => {
                const fullHref = `/workspaces/${workspaceId}${item.href}`;
                const isActive = pathname === fullHref;
                const Icon = isActive ? item.activeIcon : item.icon;

                return (
                    <li key={item.href}>
                        <Link href={fullHref}>
                            <div
                                className={cn(
                                    "flex items-center gap-3 p-3 rounded-lg font-semibold transition-all duration-200",
                                    "hover:bg-blue-100 hover:text-blue-700",
                                    isActive ? "bg-blue-200 text-blue-900 shadow-md" : "text-neutral-600"
                                )}
                            >
                                <Icon className="size-6" />
                                <span className="text-[15px]">{item.label}</span>
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
