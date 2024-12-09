import {useEffect, useRef} from "react";

function useScrollSnap(){
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            // Aplica los estilos de scroll snap
            container.classList.add("snap-y", "snap-mandatory", "overflow-y-scroll", "h-screen");
            Array.from(container.children).forEach((child) => {
                (child as HTMLElement).classList.add("snap-always", "snap-center");
            });
        }
    }, []);

    return containerRef;
}

export default useScrollSnap;