"use client"

import { Button } from '@/components/ui/button'
import { LogIn, UserPlus } from 'lucide-react'; // Import Lucide icons
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {

    const pathname = usePathname();
    const isSignIn = pathname === "/sign-in";

    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/logo1.svg"
                            alt="logo"
                            width={152}
                            height={56}
                            className="cursor-pointer"
                        />
                    </Link>

                    {/* Authentication Button */}
                    <Button asChild variant="secondary">
                        <Link href={isSignIn ? "/sign-up" : "/sign-in"} className="flex items-center gap-2">
                            {isSignIn ? (
                                <>
                                    <UserPlus size={18} /> Sign Up
                                </>
                            ) : (
                                <>
                                    <LogIn size={18} /> Login
                                </>
                            )}
                        </Link>
                    </Button>
                </nav>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout
