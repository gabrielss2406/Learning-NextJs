import ItemCarrinho from "@/model/ItemCarrinho";


export default function CarrinhoItem(props: ItemCarrinho) {
    function exibirPreco(valor: number) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor)
    }

    return (
        <div className="flex gap-2 items-center rounded-full bg-blue-500">
            <span className="flex justify-center items-center w-7 h-7 rounded-full p-2 bg-blue-700">
                {props.quantidade}
            </span>
            <span>
                {props.produto.nome}
            </span>
            <span className="pr-5">
                {exibirPreco(props.produto.preco * props.quantidade)}
            </span>
        </div>
    )
}