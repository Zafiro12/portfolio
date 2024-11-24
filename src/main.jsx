import {createRoot} from 'react-dom/client'
import './index.css'
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/react";
import Loading from "./components/Loading.jsx";

function Overlay() {
    return (
        <div className="absolute top-0 left-0 pointer-events-none w-full h-full">
            <div className="absolute text-gray-500 bottom-6 left-6">
                Alejandro Santaella
            </div>
        </div>
    )
}

createRoot(document.getElementById('root')).render(
    <>
        <Loading/>
        <Overlay/>
        <Analytics/>
        <SpeedInsights/>
    </>
)
