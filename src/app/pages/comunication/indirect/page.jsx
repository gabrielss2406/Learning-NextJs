import Contador from "@/components/comunication/indirect/Contador"

export default function indirectPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl mb-10">Comunicacao indireta</h1>
            <div className="flex gap-5">
                <Contador />
                <Contador />
                <Contador />
            </div>
        </div>
    )
}