import Produto from "@/model/Produto";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";

interface ProdutoItemProps {
    produto: Produto
    comprar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps) {
    return (
        <div className={`
            flex flex-col rounded-md
            border border-zinc-600
            p-1
        `}>
            <Image 
                src={props.produto.imagem}
                width={200}
                height={200}
                alt="Imagem do produto"
                className="rounded-md"
            />
            <div className="flex flex-col p-3 gap-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-black">{props.produto.nome}</div>
                    <div className="text-green-500 font-bold">R$ {props.produto.preco}</div>
                </div>
                <div>
                    <div className="text-gray-500">{props.produto.descricao}</div>
                </div>
                <div>
                    <button className="botao flex justify-center gap-2 w-full"
                        onClick={() => props.comprar(props.produto)}>
                        <IconShoppingCart /> Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}