"use client";

export default function Event() {
    let cont  = 0

    function increment() {
        console.log(cont++)
    }

    return (
        <button className={`
            flex justify-center items-center
            h-72 w-72 bg-green-600 text-4xl font-bold
        `} onClick={increment}>
            Event
        </button>
    )
}