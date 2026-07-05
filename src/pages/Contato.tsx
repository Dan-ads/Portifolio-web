import { motion } from "framer-motion";
import {
    // Github,
    // Linkedin,
    Mail,
    Phone,
    MapPin,
    Send,
} from "lucide-react";

// Página de contato com informações principais e formulário para mensagens.
export default function Contato() {
    return (
        <main className="relative z-10 flex-1 overflow-y-auto p-16">

            {/* Cabeçalho */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
            >
                <span className="text-blue-400 text-lg">
                    📬 Entre em contato
                </span>

                <h1 className="text-6xl font-bold mt-2">
                    Vamos <span className="text-blue-500">conversar.</span>
                </h1>

                <p className="text-slate-400 max-w-3xl mt-5 leading-8">
                    Estou sempre aberto para conversar sobre desenvolvimento,
                    oportunidades profissionais, projetos ou simplesmente trocar
                    experiências sobre tecnologia.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 mt-14">

                {/* Informações */}

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: .2 }}
                    className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-xl p-8"
                >

                    <h2 className="text-2xl font-bold">
                        Informações
                    </h2>

                    <div className="mt-8 space-y-6">

                        <div className="flex items-center gap-4">
                            <Mail className="text-blue-500" />
                            <div>
                                <p className="text-sm text-slate-400">Email</p>
                                <p>danidanielsouzaleite@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Phone className="text-blue-500" />
                            <div>
                                <p className="text-sm text-slate-400">Telefone</p>
                                <p>+55 (48) 99845-4867</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <MapPin className="text-blue-500" />
                            <div>
                                <p className="text-sm text-slate-400">Localização</p>
                                <p>Santa Catarina • Brasil</p>
                            </div>
                        </div>

                    </div>

                    <div className="border-t border-slate-700 my-10"></div>

                    <h3 className="font-semibold text-xl mb-5">
                        Disponível para
                    </h3>

                    <div className="space-y-4 text-slate-300">

                        <p>- Desenvolvimento Full Stack</p>
                        <p>- Projetos Web</p>
                        <p>- Novas oportunidades</p>

                    </div>

                    <div className="flex gap-5 mt-10">

                        {/* <a
                            href="https://github.com/seuusuario"
                            target="_blank"
                            className="p-4 rounded-xl bg-slate-800 hover:bg-blue-500 transition"
                        >
                            <Github />
                        </a>

                        <a
                            href="https://linkedin.com/in/seuusuario"
                            target="_blank"
                            className="p-4 rounded-xl bg-slate-800 hover:bg-blue-500 transition"
                        >
                            <Linkedin />
                        </a>
*/}
                    </div> 

                </motion.div>

                {/* Formulário */}

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: .3 }}
                    className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-xl p-8"
                >

                    <h2 className="text-2xl font-bold mb-8">
                        Envie uma mensagem
                    </h2>

                    <form className="space-y-5">

                        <input
                            type="text"
                            placeholder="Nome"
                            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 outline-none focus:border-blue-500 transition"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 outline-none focus:border-blue-500 transition"
                        />

                        <input
                            type="text"
                            placeholder="Assunto"
                            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 outline-none focus:border-blue-500 transition"
                        />

                        <textarea
                            rows={6}
                            placeholder="Sua mensagem..."
                            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 outline-none resize-none focus:border-blue-500 transition"
                        />

                        <button
                            type="submit"
                            className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 transition w-full py-4 rounded-xl font-semibold"
                        >
                            Enviar mensagem

                            <Send size={18} />
                        </button>

                    </form>

                </motion.div>

            </div>

        </main>
    );
}