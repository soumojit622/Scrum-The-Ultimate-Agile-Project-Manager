import React from 'react'
import { RiAddCircleFill } from "react-icons/ri"

export const Projects = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
                <p className="text-sm uppercase text-neutral-500">
                    Projects
                </p>
                <RiAddCircleFill
                    className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
                // onClick={open}
                />
            </div>
        </div>
    )
}
