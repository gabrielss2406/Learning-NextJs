import Table from "@/components/lists/Table"

export default function ListBasicPage() {
    const table = [
        'Viego',
        'Teemo',
        'Malphite',
        'Morgana',
        'Ornn',
        'Vi'
    ]
    
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl font-black">Champions do DLMX</h1>
            <Table champions={table}/>
        </div>
    )
}