"use client"

import { Button } from "@/components/ui/button"
import { AlertTriangle, Home } from "lucide-react"
import Link from "next/link"

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center gap-y-4 bg-white p-6 rounded-lg shadow-lg border border-blue-200">
                {/* Animated Warning Icon */}
                <AlertTriangle className="size-12 text-red-500 animate-bounce" />

                {/* Error Message */}
                <h1 className="text-xl font-semibold text-blue-900">Oops! Something went wrong.</h1>
                <p className="text-sm text-blue-700 text-center max-w-xs">
                    We encountered an issue while processing your request. Please try again later.
                </p>

                {/* Back to Home Button */}
                <Button size="lg" className="mt-2 bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/" className="flex items-center gap-x-2 px-4 py-2">
                        <Home className="size-5" />
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default ErrorPage
