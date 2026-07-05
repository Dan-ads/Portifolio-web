import { motion } from "framer-motion";

// Página que organiza a trajetória profissional em formato de timeline visual.
export default function Experiencia() {
  return (
    <main className="relative z-10 flex-1 overflow-y-auto p-16">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-blue-400 text-lg">
          💼 Minha trajetória profissional
        </span>

        <h1 className="text-6xl font-bold mt-2">
          Experiência
        </h1>

        <p className="text-slate-400 max-w-5xl mt-5 leading-8">
          Aqui está um resumo da minha jornada profissional,
          experiências acadêmicas e evolução como desenvolvedor.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="mt-14 space-y-10">

        {/* Emprego */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="border-l-2 border-blue-500 pl-6"
        >
          <h2 className="text-2xl font-bold">
            Estagiário em Engenharia de Software
          </h2>

          <p className="text-blue-400">
            Intelbras • 2025 - Atual
          </p>

          <p className="text-slate-400 mt-3 leading-7 max-w-5xl">
            Atuo no desenvolvimento de soluções internas,
            automação de processos e suporte em projetos de backend e frontend.
            Tenho trabalhado com integração de sistemas, APIs e boas práticas de engenharia de software.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-sm">Go</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-sm">TypeScript</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-sm">React</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-sm">SQL</span>
          </div>
        </motion.div>

        {/* Projetos pessoais */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="border-l-2 border-blue-500 pl-6"
        >
          <h2 className="text-2xl font-bold">
            Desenvolvedor Full Stack (Projetos Pessoais)
          </h2>

          <p className="text-blue-400">
            2024 - Atual
          </p>

          <p className="text-slate-400 mt-3 leading-7 max-w-5xl">
            Desenvolvimento de aplicações web completas focadas em performance,
            UI moderna e boas práticas. Criação de sistemas como dashboards,
            portfólios e aplicações integradas com APIs.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-sm">React</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-sm">Node.js</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-sm">Tailwind</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-sm">MySQL</span>
          </div>
        </motion.div>

        {/* Estudo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="border-l-2 border-blue-500 pl-6"
        >
          <h2 className="text-2xl font-bold">
            Formação e estudos contínuos
          </h2>

          <p className="text-blue-400">
            Sempre em evolução
          </p>

          <p className="text-slate-400 mt-3 leading-7 max-w-5xl">
            Foco em engenharia de software, arquitetura de sistemas,
            backend escalável e boas práticas de desenvolvimento.
            Estudo constante de novas tecnologias e padrões de mercado.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-sm">Docker</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-sm">Clean Code</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-sm">APIs</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-sm">Arquitetura</span>
          </div>
        </motion.div>

      </div>
    </main>
  );
}