import Event from "@/components/basic/Event"

export default function EventPage() {
    return (
        <div className={`
            flex flex-wrap justify-center items-center gap-5 h-screen
        `}>
            <Event />
            <Event />
            <Event />
        </div>
    )
}