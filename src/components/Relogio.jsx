import React, { useState, useEffect } from 'react';

function Relogio() {

    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        console.log("Relogio MONTADO - Intervalo ligado");

        const intervalo = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => {
            console.log("Relogio DESMONTADO");
            clearInterval(intervalo);
        };

    }, []);

    return (
        <span className="font-mono text-emerald-400 text-sm bg-slate-800 px-3 py-1 rounded-lg">
            {hora.toLocaleTimeString()}
        </span>
    );
}

export default Relogio;