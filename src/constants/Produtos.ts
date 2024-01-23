import Produto from "@/model/Produto";

const produtos: Produto[] = [
    {
        id: 1,
        nome: "Camiseta",
        preco: 39.90,
        descricao: "Camiseta com logo da Riot",
        imagem: "https://source.unsplash.com/featured/300x300?tshirt"
    },

    {
        id: 2,
        nome: "Jeans",
        preco: 99.90,
        descricao: "Caça Jeans azul",
        imagem: "https://source.unsplash.com/featured/300x300?jeans"
    },

    {
        id: 3,
        nome: "Tenis",
        preco: 139.90,
        descricao: "Tenis esportivo",
        imagem: "https://source.unsplash.com/featured/300x300?sneakers"
    },
]

export default produtos