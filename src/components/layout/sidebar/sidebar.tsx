export const Sidebar = () => {
  return (
    <aside className="w-40 min-h-screen bg-[#000208] border-r border-blue-500/10 text-slate-100 flex flex-col py-6 " >

      {/* LOGO */}
      <div className="mb-10 px-10">
        <h1 className="text-4xl font-bold tracking-tight">
          D<span className="text-blue-500">_</span>
        </h1>
      </div>

      {/* NAV */}
      <nav className="space-y-0">
        {[
          'Inicio',
          'Sobre',
          'Skills',
          'Projetos',
          'Experiência',
          'Certificações',
          'Contato',
        ].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`
              
              opacity-70 in-focus:opacity-100
              relative flex items-center overflow-hidden
              px-10 py-4 text-sm transition-all duration-300

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
            {item}
          </a>
        ))}
      </nav>

    </aside >
  )
}