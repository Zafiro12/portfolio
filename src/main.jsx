import {createRoot} from 'react-dom/client'
import './index.css'
import TextScene from "./scenes/TextScene.jsx";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/react";

function Overlay() {
    return (
        <div className="absolute top-0 left-0 pointer-events-none w-full h-full">
            <div className="absolute bottom-6 left-6">
                Zafiro12
                <br/>
                Credit to <a href="https://pmnd.rs/" className="font-bold underline">pmnd.rs</a> for
                the base code used.
            </div>
        </div>
    )
}

createRoot(document.getElementById('root')).render(
    <>
        <TextScene/>
        <Overlay/>
        <Analytics/>
        <SpeedInsights/>
    </>
)
