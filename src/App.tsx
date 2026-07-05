import "./styles/global.css";

import { Sidebar } from "./components/layout/sidebar/sidebar";
import { MouseGlow } from "./components/effects/glow";
import { AnimatedBackground } from "./components/effects/background";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import Experiencia from "./pages/Experiencia";

// Componente principal que monta o layout do portfólio e define as rotas do site.
export const App = () => {
  return (
    <div className="min-h-screen bg-[#000208] text-slate-100">
      <AnimatedBackground />
      <MouseGlow />

      <div className="flex min-h-screen">
        <Sidebar />

        <main className="relative z-10 flex-1 shadow-[0_0_50px_rgba(59,130,246,0.25)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/experiencia" element={<Experiencia />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};