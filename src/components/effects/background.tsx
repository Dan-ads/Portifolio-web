import { motion } from "framer-motion";

const blobs = [
    {
        id: 1,
        size: 500,
        color: "bg-blue-500/50",
        x: "15%",
        y: "20%",
        duration: 22,
    },
    {
        id: 2,
        size: 650,
        color: "bg-cyan-500/50",
        x: "75%",
        y: "25%",
        duration: 28,
    },
    {
        id: 3,
        size: 450,
        color: "bg-indigo-500/50",
        x: "40%",
        y: "80%",
        duration: 20,
    },
    {
        id: 4,
        size: 350,
        color: "bg-sky-500/50",
        x: "80%",
        y: "70%",
        duration: 24,
    },
];

// Gera o fundo animado com blobs suaves para dar profundidade visual à página.
export const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {blobs.map((blob) => (
                <motion.div
                    key={blob.id}
                    className={`absolute rounded-full ${blob.color} blur-[180px]`}
                    style={{
                        width: blob.size,
                        height: blob.size,
                        left: blob.x,
                        top: blob.y,
                    }}
                    animate={{
                        x: [-120, 100, -60, 80, -120],
                        y: [-60, 120, -100, 40, -60],
                        scale: [1, 1.25, 0.9, 1.15, 1],
                        opacity: [0.1, 0.22, 0.08, 0.18, 0.1],
                    }}
                    transition={{
                        duration: blob.duration,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};