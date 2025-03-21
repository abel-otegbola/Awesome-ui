'use client'
import { ReactElement, useState } from "react"
import Button from "../button/button"

type ComponentCardProps = {
    title: string, 
    description: string, 
    variations: string, 
    code: ReactElement,
    component: ReactElement
}

export default function ComponentCard({ title, description, variations, code, component }: ComponentCardProps) {
    const [ show, setShow ] = useState(false)

    return (
        <div className="py-3 border border-dashed border-gray-500/[0.2] rounded-lg shadow-sm bg-white dark:bg-[#1C1C1C] text-[12px]" >
            <div className="flex items-center justify-between gap-6 px-4 pb-2">
                <h1 className="font-bold text-[14px]">{title}</h1>
                <div className="flex items-center">
                    <Button size="small" className="" variant={show ? "primary" : "ghost" } onClick={() => setShow(!show)}>{show ? "Hide code" : "Show code"}</Button>
                </div>
            </div>
            <div className="flex items-center justify-center relative overflow-hidden py-6 bg-slate-100/[0.3] dark:bg-[#000]/[0.2] border-y border-gray-500/[0.2] px-6 w-full min-h-[200px]">
                <div className={`flex h-full absolute items-center justify-center w-full duration-700 ${!show ? "translate-x-[0]" : "translate-x-[-200%]"}`}>{ component }</div>
                <div className={`flex h-full absolute items-center justify-center w-full bg-[#000]/[0.8] text-white duration-700 ${show ? "translate-x-[0]" : "translate-x-[200%]"}`}>{ 
                    code
                }</div>
            </div>
            <div className="flex flex-col gap-2 py-2 px-4">
                <p>{description}</p>
                <p className="opacity-[0.7]">variations: {variations}</p>
            </div>
        </div>
    )
}