import Produto from '@/model/Produto'
import ItemCarrinho from "@/model/ItemCarrinho";
import { create } from 'zustand'

export const useCarrinhoStore = create((set) => ({
    itens: [] as ItemCarrinho[],
    addProduto: (produto: Produto) => {
        set((state: any) => {
          const itemAtual = state.itens.find((item: ItemCarrinho) => item.produto.id === produto.id) ?? { quantidade: 0, produto };
          const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 };
          const outrosItens = state.itens.filter((item: ItemCarrinho) => item.produto.id !== produto.id);
          return { itens: [...outrosItens, novoItem] };
        });
    },
}));
