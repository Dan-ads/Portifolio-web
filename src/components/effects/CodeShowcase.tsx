import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";

// Renderiza um painel de código interativo que acompanha o cursor para criar um efeito visual mais dinâmico na home.
export const CodeShowcase = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX);
    y.set(offsetY);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className="w-[520px] h-[320px] rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.2)] p-6"
    >
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <pre className="text-blue-300 text-sm leading-6">
{`const developer = {
  name: "Daniel Souza",
  role: "Full Stack",
  stack: ["React", "Go", "TypeScript"],
  passion: "clean code"
}

function buildFuture() {
  return "amazing products";
}`}
      </pre>
    </motion.div>
  );
};