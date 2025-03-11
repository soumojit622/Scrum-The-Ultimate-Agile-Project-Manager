"use client"

import { Loader } from "lucide-react"

const LoadingPage = () => {
    return (
        <div className="h-screen flex flex-col gap-y-4 items-center justify-center">
            {/* Animated Loader Icon */}
            <Loader className="size-12 animate-spin text-blue-500" />

            {/* Loading Text with a subtle animation */}
            <p className="text-lg font-medium text-blue-700 animate-pulse">
                Loading, please wait...
            </p>
        </div>
    )
}

export default LoadingPage
