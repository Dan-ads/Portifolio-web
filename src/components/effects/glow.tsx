import { useEffect, useState } from "react";

// Cria um efeito de brilho que segue o movimento do mouse pela tela.
export const MouseGlow = () => {
    const [position, setPosition] = useState({
        x: -500,
        y: -500,
        
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-0"
            style={{
                    background: `
                    radial-gradient(
                        850px circle at ${position.x}px ${position.y}px,
                        rgba(29,78,216,0.22),
                        transparent 75%)`,
            }}
        />
    );
};