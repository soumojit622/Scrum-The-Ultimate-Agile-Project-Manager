import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DottedSeparator from './dotted-separator'
import { Navigation } from './Navigation'
import { Projects } from './projects'
import { WorkspaceSwitcher } from './WorkspaceSwitcher'

export const Sidebar = () => {
    return (
        <aside className="h-full bg-neutral-100 p-4 w-full">
            <Link href="/">
                <Image
                    src="/logo1.svg"
                    alt="logo"
                    width={164}
                    height={48}
                />
            </Link>
            <DottedSeparator className="my-4" />
            <WorkspaceSwitcher />
            <DottedSeparator className="my-4" />
            <Navigation />
            <DottedSeparator className="my-4" />
            <Projects />

        </aside>
    )
}
