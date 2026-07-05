import { NavLink } from "react-router-dom";

// Exibe a barra lateral de navegação com os links principais do portfólio.
export const Sidebar = () => {
  const navItems = [
    { label: "Inicio", icon: "/house.svg", path: "/" },
    { label: "Sobre", icon: "/person.svg", path: "/sobre" },
    // { label: "Skills", icon: "/backpack3.svg", path: "/skills" },
    // { label: "Projetos", icon: "/card-checklist.svg", path: "/projetos" },
    { label: "Experiência", icon: "/mortarboard.svg", path: "/experiencia" },
    // { label: "Certificados", icon: "/shield-check.svg", path: "/certificados" },
    { label: "Contato", icon: "/envelope.svg", path: "/contato" },
  ];

  return (
    <aside className="w-40 min-h-screen bg-[#000208] border-r border-blue-500/10 text-slate-100 flex flex-col py-6">
      {/* LOGO */}
      <div className="mb-10 px-12">
        <h1 className="text-4xl font-bold tracking-tight">
          D<span className="text-blue-500">_</span>
        </h1>
      </div>

      {/* NAV */}
      <nav className="space-y-0">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `
                relative flex items-center overflow-hidden
                px-6 py-4 text-sm transition-all duration-300

                hover:bg-gradient-to-r
                hover:from-transparent
                hover:via-blue-500/10
                hover:to-blue-500/20
                hover:shadow-[inset_-80px_20_30px_-10px_rgba(59,130,246,0.3)]
                hover:bg-sky-700
                hover:scale-105

                ${
                  isActive
                    ? "text-blue-400 border-r border-blue-400"
                    : "text-slate-400 hover:text-slate-100"
                }
              `
            }
          >
            <img
              src={item.icon}
              alt={`${item.label} icon`}
              className="w-4 h-4 mr-3 flex-shrink-0 invert"
            />

            <span className="truncate">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};