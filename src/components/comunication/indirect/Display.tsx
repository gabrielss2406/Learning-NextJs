interface DisplayProps {
    valor: number
}

export default function Display(props: DisplayProps) {
    return (
        <div className="flex-1 bg-zinc-700 text-5xl font-black rounded-md p-5">
            {props.valor}
        </div>
    )
}