export const Hero = () => {
    return (
        <div className="mx-16 my-8 max-w-xl">
            <h4>👋<span className="text-2xl text-blue-500">Olá, eu sou</span></h4>
            <h1 className="text-6xl font-bold tracking-tight size-lg">
                Daniel <span className="text-blue-500">Souza_</span>
            </h1>
            <h3 className="my-2 text-3xl">
                Desenvolvedor <span className="text-blue-500">Full Stack</span>
            </h3>
            <h4 className="opacity-50">
                Desenvolvo aplicações web modernas e escaláveis <br /> com foco em performace, experiência do usuário <br /> e código limpo.
            </h4>

        </div>
    )
}

export const ViewProjects = () => {
    return (
        <div className="my-8 ml-16">
            <a
                href="https://github.com/Dan-ads" target="_blank" className="w-fit flex items-center gap-2 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover: blue-100">
                <h4>Ver meus projetos</h4> 
                <img src="/arrow-right.svg" className="w-5 h-5 invert"></img>
            </a>
        </div>
    );
}

export const ContactMe = () => {
    return (
        <div className="">
            <a
                href="https://www.linkedin.com/in/daniel-souza-leite-43981b352/" target="_blank" className="w-fit flex items-center gap-2 inline-block px-6 py-3 border 1px border-gray-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:box-shadow: 0 0 25px blue-500">
                <h4>Entre em contato</h4> 
                <img src="/arrow-right.svg" className="w-5 h-5 invert"></img>
            </a>
        </div>
    );
}

export const Follow = () => {
    return (
        <div className="ml-16 mr-4 my-4 flex items-center">
            <h4 className="text-sm">Siga-me</h4>
        </div>
    );
}

export const Picture = () => {
    return(
        <div>
            <span>
                <img src="/retrato.png" width={800}></img>
            </span>
        </div>
    );
}

export const FollowIcons = () => {
    return (
        <div className="flex items-center gap-2 ">
            <a href="https://github.com/Dan-ads" target="_blank" rel="noreferrer" className="inline-block p-2">
                <img className='w-5 h-5 invert' src='/github.svg' />
            </a>
            <a href="https://www.linkedin.com/in/daniel-souza-leite-43981b352/" target="_blank" rel="noreferrer" className="inline-block p-2">
                <img className='w-5 h-5 invert' src="/linkedin.svg" />
            </a>
            <a href="https://www.instagram.com/daniel.sleite/" target="_blank" rel="noreferrer" className="inline-block p-2">
                <img className='w-5 h-5 invert' src="/instagram.svg" />
            </a>
        </div>
    )
}
