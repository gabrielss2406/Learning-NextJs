"use client"

import Personagens from "@/components/starwars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";

export default function StarWarsPage() {
    const { processando, obterPersonagens, personagens } = useStarWars()

    return (
        <div className="flex justify-center items-center h-screen">
            {processando ? (
                <div>Processando...</div>
            ) : personagens.length > 0 ? (
                <Personagens personagens={personagens}/>
                ) : (
                    <h1>Conteúdo com os personagens</h1>
                )
            }

            <button onClick={obterPersonagens} className="bg-blue-500 p-2">Obter</button>
        </div>
    )
}