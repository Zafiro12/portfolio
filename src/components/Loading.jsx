import Logo from "./Logo.jsx";
import {useEffect, useState} from "react";

export default function Loading() {
    const [animateLogo, setAnimateLogo] = useState(false);

    useEffect(() => {
        const timerLogo = setTimeout(() => {
            setAnimateLogo(true);
        }, 3000);

        return () => {
            clearTimeout(timerLogo);
        }
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
            <div
                className={`transition-opacity absolute ease-in duration-700 ${animateLogo ? 'opacity-0' : 'opacity-100'}`}>
                <Logo animate/>
            </div>
        </div>
    );
}