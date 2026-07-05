import { Hero, ViewProjects, ContactMe, Follow, FollowIcons, } from "../components/layout/hero/hero";
import { Aboutme } from "../components/layout/about/aboutme";
import { CodeShowcase } from "../components/effects/CodeShowcase";
import { motion } from "framer-motion";

// Página inicial do portfólio, reunindo a apresentação principal, botões de ação e a seção sobre mim.
export default function Home() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>
      <div className="absolute top-20 right-40">
        <motion.div
          className="absolute right-10"
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <CodeShowcase />
        </motion.div>
      </div>

      <div className="flex items-center gap-4">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.6,
          }}
        >
          <ViewProjects />
          <ContactMe />
        </motion.div>

      </div>

      <div className="flex items-center">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
        >
          <Follow />
          <FollowIcons />
        </motion.div>

      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
        }}
      >
        <Aboutme />
      </motion.div>

    </div>
  );
}