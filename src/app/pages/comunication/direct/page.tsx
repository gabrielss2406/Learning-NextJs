import Avo from "@/components/comunication/direct/Avo";

export default function DirectPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl mb-10">Comunicacao direta</h1>
            <Avo nome="Mariano" sobrenome="Silva"/>
        </div>
    )
}