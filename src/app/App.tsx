import useScrollSnap from "@/hooks/useScrollSnap.ts";

function App() {

    const useSnap = useScrollSnap();

    return (
        <div ref={useSnap}>
            <section id={"home"} className={"relative min-h-screen flex bg-red-500"}>
                <h1 className={"container max-w-screen-xl mx-auto flex justify-center items-center text-9xl"}>1</h1>
            </section>
            <section id={"about"} className={"relative min-h-screen flex bg-blue-500"}>
                <h1 className={"container max-w-screen-xl mx-auto flex justify-center items-center text-9xl"}>2</h1>
            </section>
            <section id={"contact"} className={"relative min-h-screen flex bg-green-500"}>
                <h1 className={"container max-w-screen-xl mx-auto flex justify-center items-center text-9xl"}>3</h1>
            </section>
        </div>
    )
}

export default App;
