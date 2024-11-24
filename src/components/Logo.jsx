export default function Logo({white = false, animate = false}) {

    const color = white ? "#ffffff" : "#000000";

    const animationClass = animate ? "animate-bounce" : "";

    return (
        <svg className={animationClass} width="48.34" height="58.594" viewBox="0 0 48.34 58.594"
             xmlns="http://www.w3.org/2000/svg">
            <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#00000000"
               strokeWidth="0.25mm"
               fill={color}>
                <path
                    d="M 0 58.594 L 48.145 58.594 L 48.34 38.379 L 46.191 38.379 L 44.141 47.754 Q 42.09 55.957 34.57 56.055 L 10.449 56.055 L 47.852 2.051 L 47.852 0 L 4.395 0 L 3.516 17.676 L 5.469 17.676 L 9.277 8.887 A 16.402 16.402 0 0 1 10.924 6.073 Q 12.007 4.613 13.291 3.756 A 7.128 7.128 0 0 1 17.187 2.539 L 38.477 2.539 L 0 56.641 L 0 58.594 Z"
                    vectorEffect="non-scaling-stroke"/>
            </g>
        </svg>
    )
}