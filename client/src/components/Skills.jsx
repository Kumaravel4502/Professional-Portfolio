import { motion } from 'framer-motion';

const skillsData = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 98,
    color: "from-orange-400 to-red-500"
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: 96,
    color: "from-blue-400 to-cyan-500"
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 97,
    color: "from-yellow-400 to-amber-500"
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    level: 95,
    color: "from-sky-400 to-cyan-500"
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 96,
    color: "from-cyan-400 to-blue-500"
  },
  {
    name: "Material UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    level: 92,
    color: "from-blue-500 to-indigo-500"
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    level: 90,
    color: "from-purple-500 to-violet-500"
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 94,
    color: "from-green-400 to-emerald-500"
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: 93,
    color: "from-gray-400 to-slate-500"
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 92,
    color: "from-green-500 to-lime-500"
  },
  {
    name: "Prisma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    level: 88,
    color: "from-indigo-400 to-purple-500"
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    level: 85,
    color: "from-red-500 to-orange-500"
  },
  {
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: 90,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: 95,
    color: "from-orange-500 to-red-500"
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    level: 96,
    color: "from-gray-600 to-black"
  },
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    level: 93,
    color: "from-orange-500 to-red-500"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tighter">Skills &amp; Expertise</h2>
          <p className="text-white/60 text-xl mt-3">
            Technologies I master to build production-ready applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-300"
            >
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 group-hover:rotate-12 transition-transform duration-300"
                />
              </div>

              {/* Skill Name */}
              <h3 className="text-2xl font-semibold text-center mb-4">{skill.name}</h3>

              {/* Progress Bar */}
              <div className="relative h-3 bg-white/10 rounded-3xl overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-3xl`}
                />
              </div>

              <div className="flex justify-between text-xs mt-3 text-white/60">
                <span>Proficiency</span>
                <span className="font-semibold text-white">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}