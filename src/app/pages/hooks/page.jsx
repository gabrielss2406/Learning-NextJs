import ImagemAleatoria from "@/components/hooks/ImagemAleatoria"

export default function PaginaImagens() {
    return (
        <div className={`
            flex justify-center items-center gap-5 h-screen
        `}>
            <ImagemAleatoria />
            <ImagemAleatoria />
        </div>
    )
}