import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "sonner";

const outfit = Outfit({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Webflow | The Ultimate Agile Project Manager",
  description: "Webflow - Streamline your workflow, collaborate efficiently, and manage projects like a pro.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(outfit.className, "antialiased min-h-screen")}
      >
        <QueryProvider>
          <Toaster />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
