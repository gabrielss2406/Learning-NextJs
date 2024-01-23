import Circle from "@/components/basic/Circle"

export default function CirclePage() {
    return (
        <div className="flex justify-beetwen items-center h-screen">
            <Circle text="Circ#1" />
            <Circle text="Circ#2" notPerfect={true} />
            <Circle text="Circ#3" />
        </div>
    )
}