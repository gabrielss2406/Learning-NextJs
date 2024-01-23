"use client"

import { useState } from "react"
import If from "./If"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"

interface QuestionProps {
    text: string
    answer: string
}

export default function Question(props: QuestionProps) {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={`
            border border-zinc-400 rounded-md overflow-hidden
        `}>
            <div 
                className="bg-zinc-700 p-5 cursor-pointer select-none flex justify-between"
                onClick={() => setOpen(!open)}
            >
                <span>{props.text}</span>
                {open ? <IconChevronUp /> : <IconChevronDown />}
                
            </div>
            <If test={open}>
                <div className="p-5">
                    {props.answer}
                </div>
            </If>
        </div>
    )
}