import reactIcon from "/src/assets/icons/codeLang/atom.png";
import tsIcon from "/src/assets/icons/codeLang/typescript.svg";
import goIcon from "/src/assets/icons/codeLang/golang.svg";
import nodeJs from "/src/assets/icons/codeLang/nodejsHex.svg";
import mySQL from "/src/assets/icons/codeLang/mysql.svg";
import tailwindCss from "/src/assets/icons/codeLang/tailwind.svg";

type SkillBarProps = {
    skill: string;
    percentage: number;
}

type CodeLangProps = {
    name: string;
    icon: string;
    width: number;
}

export const CodeLang = ({ name, icon, width }: CodeLangProps) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <img
                src={icon}
                alt={name}
                width={width}
            />

            <span className="text-sm">
                {name}
            </span>
        </div>
    );
}

export const SkillBar = ({ skill, percentage }: SkillBarProps) => {
    return (
        <div className="flex items-center gap-4 py-2 transition-transform transform hover:scale-105">
            <span className="w-32 text-gray-300">
                {skill}
            </span>

            <div className="flex-1 h-1 bg-zinc-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-500 hover:bg-blue-300 "
                    style={{ width: `${percentage}%` }}
                />
            </div>

            <span className="w-10 text-right text-gray-400 text-sm">
                {percentage}%
            </span>
        </div>
    );
}

export const Aboutme = () => {
    return (
        <div className="h-dvh mx-8 my-8">
            <div className="grid grid-cols-12 rounded-xl bg-gray-900/70 border 1px border-gray-600 text-white">

                <div className="col-span-3 p-8 p-8">
                    <h4 className="font-bold text-xl mb-4 ">
                        Sobre mim
                    </h4>
                    <p className="text-gray-400">
                        Desenvolvedor de software apaixonado por tecnologia, desenvolvimento web e soluções escaláveis. Atualmente atuo na Intelbras, buscando evoluir continuamente e transformar ideias em aplicações de qualidade.
                    </p>
                </div>

                <div className="col-span-2 justify-itens-center border-l border-zinc-800 p-8">
                    <div className="justify-itens-center col-span-4 p-8">
                        <h5 className="font-bold">
                            Localização
                        </h5>
                        <h5 className="text-gray-400">
                            Brasil, Santa Catarina
                        </h5>
                    </div>
                    
                    <div className="justify-itens-center col-span-4 p-8">
                        <h5 className="font-bold">
                            Idade
                        </h5>
                        <h5 className="text-gray-400">
                            19 anos
                        </h5>
                    </div>

                </div>
                <div className="col-span-3 border-l text-xl border-zinc-800 p-8">
                    <strong>Skills</strong>
                    <div className="text-sm">
                        <SkillBar skill="TypeScript" percentage={90} />
                        <SkillBar skill="React" percentage={70} />
                        <SkillBar skill="Golang" percentage={80} />
                        <SkillBar skill="Node.js" percentage={75} />
                        <SkillBar skill="MySQL" percentage={70} />
                        <SkillBar skill="Tailwind CSS" percentage={80} />
                    </div>
                </div>
                <div className="justify-itens-center col-span-4 p-8">
                    <div className="grid grid-cols-3 gap-6">
                        <CodeLang name="React" icon={reactIcon} width={90} />
                        <CodeLang name="TypeScript" icon={tsIcon} width={90} />
                        <CodeLang name="Go" icon={goIcon} width={90} />
                        <CodeLang name="MySQL" icon={mySQL} width={90} />
                        <CodeLang name="NodeJs" icon={nodeJs} width={90} />
                        <CodeLang name="Tailwind" icon={tailwindCss} width={90} />
                    </div>                   
                </div>
            </div>
        </div>
    );
}