import {useEffect, useRef} from "react";

/**
 * A custom React hook that applies scroll snapping styles to a container element and its children.
 *
 * @param {string | null} [classLookUp] - An optional class name used to selectively apply scroll snapping
 *                                        styles to child elements. If specified, only children with this
 *                                        class name will receive the scroll snapping styles. If not provided,
 *                                        all children will have the scroll snapping styles applied.
 *
 * @return {React.RefObject<HTMLDivElement>} A ref object attached to the container element that should
 *                                           have scroll snapping styles applied. This ref should be attached
 *                                           to a div element in the JSX to function correctly.
 */
function useScrollSnap(classLookUp?: string | null) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            // Aplica los estilos de scroll snap
            container.classList.add("snap-y", "snap-mandatory", "overflow-y-scroll", "h-screen");
            Array.from(container.children).forEach((child) => {
                if (classLookUp && (child as HTMLElement).classList.contains(classLookUp)) {
                    (child as HTMLElement).classList.add("snap-always", "snap-center");
                } else if (!classLookUp) {
                    (child as HTMLElement).classList.add("snap-always", "snap-center");
                }
            });
        }
    }, []);

    return containerRef;
}

export default useScrollSnap;