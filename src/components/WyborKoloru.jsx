import { useState } from "react";
import "./WyborKoloru.css";

function WyborKoloru() {

    const [kolorTla, setKolor] = useState("white");

    return (
        <div className="kontener">
            <div className="WyborKoloru" style={{ backgroundColor: kolorTla }}>
            </div>
            <button onClick={() => setKolor("Red")}>Czerwony</button>
            <button onClick={() => setKolor("Green")}>Zielony</button>
            <button onClick={() => setKolor("Blue")}>Niebieski</button>
        </div>
    );
}

export default WyborKoloru;
