import { motion } from "framer-motion";

// Import only the icons you need (better performance)
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiMui,
} from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io";

import { GrMysql } from "react-icons/gr";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

// Define your skills with icons and colors
const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: RiNextjsFill, color: "#000000" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#06B6D4" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: GrMysql, color: "#4479A1" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-display mb-4">Tech Stack</h2>
          <p className="text-zinc-400 text-xl">
            The tools and technologies I use to build impact
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {skills.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <div className="glass p-8 rounded-3xl w-40 h-40 flex flex-col items-center justify-center gap-4 border border-white/10 hover:border-violet-500/30 transition-all duration-300">
                <div className="text-5xl transition-transform group-hover:scale-110">
                  <item.icon style={{ color: item.color }} />
                </div>
                <p className="text-sm font-medium text-center text-zinc-300 group-hover:text-white transition-colors">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
