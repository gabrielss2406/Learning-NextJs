"use client"

import Carrinho from "@/components/lists/Carrinho";
import ListaProdutos from "@/components/lists/ListaProdutos";
import produtos from "@/constants/Produtos";
import ItemCarrinho from "@/model/ItemCarrinho";
import Produto from "@/model/Produto";
import { useState } from "react";

export default function produtoPage() {
    const [itens, setItens] = useState<ItemCarrinho[]>([])

    function adicionarProduto(produto: Produto) {
        const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? {quantidade: 0, produto}
        const novoItem = {...itemAtual, quantidade: itemAtual.quantidade+1}
        const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
        setItens([...outrosItens, novoItem])
    }

    return (
        <div className="flex flex-col gap-10 justify-center items-center h-screen">
            <Carrinho itens={itens} />
            <ListaProdutos produtos={produtos} comprar={adicionarProduto}/>
        </div>
    )
}