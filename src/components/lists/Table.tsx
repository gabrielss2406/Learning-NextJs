interface TableProps {
    champions: string[]
}

export default function Table(props: TableProps) {
    return (
        <ol>
            {props.champions.map((element, index) => (
                <li key={index} className={
                    `text-xl list-decimal
                    ${index%2 == 0 ? 'text-zinc-500' : 'text-green-400'}
                `}>
                    {element}
                </li>
            ))}
        </ol>
    )
}