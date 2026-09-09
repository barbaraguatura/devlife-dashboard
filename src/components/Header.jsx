import { useState } from "react";
import Relogio from "./Relogio";

function Header() {
    const [mostrarRelogio, setMostrarRelogio] = useState(false);
    return (
        <header className="bg-slate-900 text-white px-8 py-4 font-bold">
            <h1>Devlife Dashboard</h1>

            <div className="flex items-center gap-3">
                {}
                {mostrarRelogio && <Relogio />}
            </div>

            <button onClick={() => setMostrarRelogio(!mostrarRelogio)}>
                {mostrarRelogio ? "Esconder relogio":"Mostrar relogio"}
            </button>
        </header>
    )
}
export default Header;

// HEADER