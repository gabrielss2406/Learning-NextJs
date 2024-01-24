"use client"

import Carrinho from '@/components/lists/Carrinho'
import ListaProdutos from '@/components/lists/ListaProdutos'
import produtos from '@/constants/Produtos'
import CarrinhoContext, { CarrinhoProvider } from '@/data/contexts/CarrinhoContext'
import { useCarrinhoStore } from '@/data/contexts/CarrinhoZustand'
import Link from 'next/link'
import { useContext } from 'react'

export default function PaginaProdutos() {
    //const carrinhoContext = useContext(CarrinhoContext);
    const { itens, addProduto } = useCarrinhoStore() as any
    return (
        <CarrinhoProvider>
            <div
                className={`
                    flex flex-col gap-10 justify-center items-center h-screen
                `}
            >
                <Carrinho itens={itens} />
                <ListaProdutos produtos={produtos} comprar={addProduto} />
                <Link href="/">Voltar</Link>
            </div>
        </CarrinhoProvider>
    );
}
