import Question from "./Question";

export default function Faq() {
    return (
        <div className="flex flex-col gap-2 w-[90%] md:w-3/5">
            <Question text="Q1" answer="Sim" />
            <Question text="Q2" answer="Talvez" />
            <Question text="Q3" answer="Maybe" />
            <Question text="Q4" answer="Possible" />
        </div>
    )
}