export const Sidebar = () => {
  const navItems = [
    { label: 'Inicio', icon: '/src/assets/icons/house.svg'},
    { label: 'Sobre', icon: '/src/assets/icons/person.svg' },
    { label: 'Skills', icon: '/src/assets/icons/backpack3.svg' },
    { label: 'Projetos', icon: '/src/assets/icons/card-checklist.svg' },
    { label: 'Experiência', icon: '/src/assets/icons/mortarboard.svg' },
    { label: 'Certificados', icon: '/src/assets/icons/shield-check.svg' },
    { label: 'Contato', icon: '/src/assets/icons/envelope.svg' }
  ]

  return (
    <aside className="w-40 min-h-screen bg-[#000208] border-r border-blue-500/10 text-slate-100 flex flex-col py-6" >

      {/* LOGO */}
      <div className="mb-10 px-12">
        <h1 className="text-4xl font-bold tracking-tight">
          D<span className="text-blue-500">_</span>
        </h1>
      </div>

      {/* NAV */}
      <nav className="space-y-0">
        {navItems.map((item, index) => (
          <a
            key={item.label}
            href={`#${String(item.label).toLowerCase().replace(/\s+/g, '-')}`}
            className={`
              opacity-70 in-focus:opacity-100
              relative flex items-center overflow-hidden
              px-6 py-4 text-sm transition-all duration-300

              hover:bg-gradient-to-r 
              hover:from-transparent
              hover:via-blue-500/10
              hover:to-blue-500/20
              hover:shadow-[inset_-80px_20_30px_-10px_rgba(59,130,246,0.3)]
              hover:bg-sky-700

              ${index === 0
                ? `
                    text-blue-400
                    border-r border-blue-400
                  `
                : `
                    text-slate-400
                    hover:text-slate-100
                  `
              }
            `}
          >
            {item.icon && (
              <img src={item.icon} alt={`${item.label} icon`} className="w-4 h-4 mr-3 flex-shrink-0 invert" />
            )}
            <span className="truncate">{item.label}</span>
          </a>
        ))}
      </nav>

    </aside >
  )
}