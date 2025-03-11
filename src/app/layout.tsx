import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/query-provider";

const outfit = Outfit({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Scrum | The Ultimate Agile Project Manager",
  description: "Scrum - Streamline your workflow, collaborate efficiently, and manage projects like a pro.",
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
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
