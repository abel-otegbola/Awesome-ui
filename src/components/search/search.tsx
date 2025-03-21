'use client'
import { Command, File, FilePlus, ListPlus, MagnifyingGlass, QuestionMark, User, UserPlus } from "@phosphor-icons/react";
import Image from "next/image";
import { InputHTMLAttributes, ReactNode, useState } from "react";

interface dropdownProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    leftIcon?: ReactNode;
}

export default function Search( props : dropdownProps) {
    const [focus, setFocus] = useState(false)
    const [search, setSearch] = useState("")

    const data = {
        files: [
            { id: 0, title: "Framer template notes", description: "We want to create a CMS for the product detail page...", team: ["/imgs/1.jpeg", "/imgs/2.jpeg", "/imgs/3.jpeg"] },
            { id: 1, title: "Design and Development of dashboard", description: "User research and creation of user boards within four...", team: ["/imgs/3.jpeg", "/imgs/1.jpeg"] },
            { id: 2, title: "Marketing of flashnotes", description: "Using ads and leveraging social media, flashnote will...", team: ["/imgs/3.jpeg", "/imgs/2.jpeg"] },
        ],
        actions: [
            { id: 0, title: "Create new note", description: "Create a blank note or use any of the templates", command: "N", icon: <FilePlus weight="light" size={20} /> },
            { id: 1, title: "Create new todo", description: "Add new workflow for your project", command: "T", icon: <ListPlus weight="light" size={20} /> },
            { id: 2, title: "Invite colleagues", description: "Collaborate with your team on projects", command: "I", icon: <UserPlus weight="light" size={20} /> },
            { id: 3, title: "My profile", description: "View and edit your personal profile", command: "K -> P", icon: <User weight="light" size={20} /> },
            { id: 4, title: "Support", description: "Our team are here to help if you get stuck", command: "H", icon: <QuestionMark weight="light" size={20} /> },
        ]
    }

    return (
        <form action={`/search`} className="relative flex flex-col w-full gap-1">

            <div className={`flex items-center justify-between gap-4 relative bg-white dark:bg-primary/[0.04] text-[#716E79] dark:text-gray w-full p-1 px-4 border
                ${focus ? "border-black/[0.1] shadow-lg rounded-t-[12px]" : "shadow-sm border-black/[0.1] rounded-[12px]"}
                ${props.className}
            `}>
                <div className="flex items-center gap-1 flex-1">
                    <span className="opacity-[0.5]">
                        <MagnifyingGlass size={24} />
                    </span>
                    <input 
                        className={` p-2 w-full outline-none
                            bg-transparent rounded-[8px]
                            ${props.disabled ? "opacity-[0.25]" : ""}
                        `}
                        value={props.value}
                        name=""
                        type="search"
                        placeholder={props.placeholder}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex gap-1 items-center opacity-[0.5]"><Command size={16} />K</div>
            </div>
            
            <div className={`absolute top-[46px] left-0 p-2 w-full z-[1000] text-[#716E7999] bg-white shadow-md duration-700 border border-black/[0.1] border-t-black/[0.09] rounded-b-[12px] overflow-hidden ${focus ? "block" : "hidden"}`}>
                <p className="opacity-[0.6] p-2">Recent files, projects & workflows</p>
                {
                    data.files?.filter(item => (item.title.toUpperCase().indexOf(search.toUpperCase()) !== -1) || (item.description.toUpperCase().indexOf(search.toUpperCase()) !== -1))?.map((option) => (
                    <div tabIndex={1} key={option.id} 
                        onClick={() => { setFocus(false); setSearch(option.title)}} 
                        className={`p-2 flex w-full items-center justify-between cursor-pointer border border-black/[0.02] gap-4 rounded-[8px] hover:bg-[#FBFAFA] bg-white ${option.title === props.value ? "text-primary" : ""}`}
                    >
                        <div className="flex gap-4">
                            <span className="p-2 rounded-full border border-black/[0.1]"><File weight="light" size={20}/></span>
                            <div>
                            <p className="text-[#49474F]">{option.title}</p>
                            <p className="text-[12px]">{option.description}</p>
                            </div>
                        </div>
                        <p className="flex gap-1 items-center">
                            {
                                option.team.map((user, i) => (
                                    <Image key={user} src={user} alt={user} width={20} height={20} className={`rounded-full bg-cover border-2 border-gray-500/[0.2] ${i !== 0 ? "-ml-2" : "ml-1"}`} />
                                ))
                            }
                        </p>
                    </div>
                    ))
                }
                <p className="opacity-[0.6] p-2">Common actions</p>
                {
                    data.actions?.filter(item => (item.title.toUpperCase().indexOf(search.toUpperCase()) !== -1) || (item.description.toUpperCase().indexOf(search.toUpperCase()) !== -1))?.map((option) => (
                    <div tabIndex={1} key={option.id} 
                        onClick={() => { setFocus(false); setSearch(option.title)}} 
                        className={`p-2 flex w-full items-center justify-between cursor-pointer border border-black/[0.02] gap-4 rounded-[8px] hover:bg-[#FBFAFA] bg-white ${option.title === props.value ? "text-primary" : ""}`}
                    >
                        <div className="flex gap-4">
                            <span className="p-2 rounded-full border border-black/[0.1]">{option.icon}</span>
                            <div>
                            <p className="text-[#49474F]">{option.title}</p>
                            <p className="text-[12px]">{option.description}</p>
                            </div>
                        </div>
                        <p className="flex gap-1 items-center"><Command />{option.command}</p>
                    </div>
                    ))
                }
            </div>
        </form>
    )
}