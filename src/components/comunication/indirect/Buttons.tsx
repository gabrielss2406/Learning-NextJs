"use client"

interface ButtonsProps {
    inc: ()=>void
    dec: ()=>void
}

export default function Buttons(props: ButtonsProps) {
    return (
        <div className="flex gap-2 justify-between pt-4">
            <button className="flex-1 botao"
                onClick={props.inc}>
                +
            </button>
            <button className="flex-1 botao"
                onClick={props.dec}>
                -
            </button>
        </div>
    )
}