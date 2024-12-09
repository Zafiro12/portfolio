import useScrollSnap from "@/hooks/useScrollSnap.ts";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import {ModeToggle} from "@/components/mode-toggle.tsx";
import React, {useRef} from "react";
import {Button} from "@/components/ui/button.tsx";

function App() {

    const useSnap = useScrollSnap();
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <>
            <nav className={"fixed top-3 left-0 right-0 h-0 z-50 flex items-center"}>
                <div className={"absolute right-3 top-0"}>
                    <ModeToggle/>
                </div>
                <div className={"absolute top-3 flex flex-col justify-center space-y-5"}>
                    <Button className={"rotate-90"} variant={"link"}
                            onClick={() => scrollToSection(homeRef)}>Home</Button>
                    <Button className={"rotate-90"} variant={"link"}
                            onClick={() => scrollToSection(aboutRef)}>About</Button>
                    <Button className={"rotate-90"} variant={"link"}
                            onClick={() => scrollToSection(contactRef)}>Contact</Button>
                </div>
            </nav>
            <main ref={useSnap}>
                <div ref={homeRef}>
                    <Home/>
                </div>
                <div ref={aboutRef}>
                    <About/>
                </div>
                <div ref={contactRef}>
                    <Contact/>
                </div>
            </main>
        </>
    )
}

export default App;
