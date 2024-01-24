import Grid from "@/components/layout/Grid";

export default function GridPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-4/5">
                <Grid lg={8} md={4} sm={2}>
                    <div className="h-24 w-full bg-purple-400">#1</div>
                    <div className="h-24 w-full bg-green-400">#2</div>
                    <div className="h-24 w-full bg-gray-400">#3</div>
                    <div className="h-24 w-full bg-blue-400">#4</div>
                    <div className="h-24 w-full bg-white">#5</div>
                    <div className="h-24 w-full bg-red-400">#6</div>
                    <div className="h-24 w-full bg-yellow-400">#7</div>
                    <div className="h-24 w-full bg-zinc-400">#8</div>
                </Grid>
            </div>
        </div>
    )
}