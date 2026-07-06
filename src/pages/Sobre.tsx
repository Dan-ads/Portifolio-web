import { motion } from "framer-motion";

const techs = [
  "TypeScript",
  "React",
  "Go",
  "Node.js",
  "Tailwind",
  "Docker",
  "MySQL",
  "Git",
];

export default function Sobre() {
  return (
    <main className="relative z-10 flex-1 p-16 overflow-y-auto">

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
      >
        <span className="text-blue-400 text-lg">
          👋 Conheça um pouco mais
        </span>

        <h1 className="text-6xl font-bold mt-2">
          Sobre <span className="text-blue-500">mim</span>
        </h1>

        <p className="text-slate-400 mt-5 max-w-3xl leading-8">
          Sou desenvolvedor Full Stack apaixonado por construir
          aplicações modernas, performáticas e escaláveis.
          Atualmente atuo na Intelbras desenvolvendo soluções de
          software, sempre buscando aprender novas tecnologias e
          evoluir como engenheiro.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mt-14">

        {/* Minha história */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .2 }}
          className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">
            Minha história
          </h2>

          <p className="text-slate-400 leading-8">
            Comecei estudando desenvolvimento web por curiosidade e, com o tempo, descobri uma paixão pela engenharia de software. Desde então, venho aprofundando meus conhecimentos em React, TypeScript, Go e arquitetura de software, desenvolvendo projetos que reforçam tanto minha base técnica quanto minha capacidade de criar soluções modernas e escaláveis.
            <br />
            <br />
            Busco escrever código limpo, reutilizável e de fácil manutenção, sempre aplicando boas práticas de desenvolvimento e aprendendo continuamente novas tecnologias. Meu objetivo é evoluir como engenheiro de software e contribuir para a construção de produtos de alta qualidade.
          </p>
        </motion.div>

        {/* Jornada */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .3 }}
          className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">
            Minha jornada
          </h2>

          <div className="space-y-6">

            <div className="border-l-2 border-blue-500 pl-5">
              <h3 className="font-semibold text-white">
                2024
              </h3>

              <p className="text-slate-400">
                Finalizei o Ensino médio e ingressei na faculdade. Meu foco era Backend com Golang, Sql e Javascript/Node.js
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-5">
              <h3 className="font-semibold text-white">
                2025
              </h3>

              <p className="text-slate-400">
                Início da Faculdade de Engenharia de Software e ingresso na Intelbras como estagiário em Engenharia de Software / P&D.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-5">
              <h3 className="font-semibold text-white">
                Hoje
              </h3>

              <p className="text-slate-400">
                Continuo trabalhando como estágiário de P&D na intelbras, porém uma visão maior em outras áreas do Desenvolvimento, não se limitando apenas a backend, estudando arquitetura, Docker, cloud e boas práticas para me tornar Engenheiro de Software.
              </p>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Tecnologias */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .4 }}
        className="mt-10 rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-xl p-8"
      >
        <h2 className="text-2xl font-bold mb-8">
          Tecnologias favoritas
        </h2>

        <div className="flex flex-wrap gap-4">

          {techs.map((tech) => (
            <div
              key={tech}
              className="px-5 py-3 rounded-xl border border-slate-700 bg-slate-800/40 hover:border-blue-500 transition"
            >
              {tech}
            </div>
          ))}

        </div>
      </motion.div>

      {/* Atual */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .5 }}
        className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/10 backdrop-blur-xl p-8"
      >
        <h2 className="text-2xl font-bold mb-3">
          Atualmente
        </h2>

        <p className="text-slate-300 leading-8">
          📍 Estagiário em Engenharia de Software na Intelbras.

          <br />

          🚀 Foco em desenvolvimento Full Stack, aplicações web, engenharia de software, arquitetura e criação de interfaces modernas utilizando React, TypeScript e Go.
        </p>
      </motion.div>

    </main>
  );
}