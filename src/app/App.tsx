import useScrollSnap from "@/hooks/useScrollSnap.ts";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import {Button} from "@/components/ui/button.tsx";

function App() {

    const useSnap = useScrollSnap("snapable");

    return (
        <div ref={useSnap}>
            <nav className={"fixed top-0 left-0 right-0 z-50 flex justify-center items-center "}>
                <Button variant="outline">Home</Button>
            </nav>
            <Home/>
            <About/>
            <Contact/>
        </div>
    )
}

export default App;
