interface CicleProps {
    text: string
    notPerfect?: boolean
}

export default function Circle(props: CicleProps) {
    return (
        <div className={`
            flex justify-center items-center
            h-64 w-64 bg-cyan-500
            text-black font-bold text-3xl
            ${props.notPerfect ? 'rounded-2xl' : 'rounded-full'}
        `}>
            {props.text}
        </div>
    )
}