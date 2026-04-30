import { useState, useEffect } from "react";
import { projects } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Project } from "../types";
import { FaGithub } from "react-icons/fa";


export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selected]);

  const getFallbackImage = (id: number) =>
    `https://picsum.photos/id/${100 + id}/1200/700`;

  return (
    <section id="projects" className="py-28 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">Selected Work</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Projects that turned ideas into real-world scalable applications
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setSelected(project)} // ✅ FIXED
              className="group bg-zinc-950 border border-white/10 rounded-3xl p-4 hover:border-white/20 transition-all cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative  overflow-hidden bg-zinc-900 border border-white/10">
                <img
                  src={project.image || getFallbackImage(project.id)}
                  alt={project.title}
                  className="w-full h-[180px] object-cover"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src =
                      getFallbackImage(project.id))
                  }
                />

                {/* BADGE */}
                <span className="absolute bottom-3 left-3 px-4 py-1 text-xs bg-zinc-800 text-white rounded-full border border-white/10">
                  {project.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="pt-6 px-2 pb-2">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs bg-zinc-900 border border-white/10 rounded-full text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                  <span className="text-emerald-400 font-medium">
                    Project showcase
                  </span>

                  <span className="text-zinc-500 group-hover:text-white transition">
                    View case study →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl"
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 z-30 p-2.5 bg-black/60 rounded-full hover:bg-black/80"
              >
                <X size={20} />
              </button>

              {/* IMAGE */}
              <div className="relative h-[260px] sm:h-[320px] md:h-[420px] overflow-hidden">
                <img
                  src={selected.image || getFallbackImage(selected.id)}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src =
                      getFallbackImage(selected.id))
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="-mt-16 relative z-10 px-6 md:px-10 pb-10">
                <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                  <span className="inline-block px-3 py-1 bg-zinc-800 text-violet-400 text-xs uppercase rounded-full mb-4">
                    {selected.category}
                  </span>

                  <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    {selected.title}
                  </h2>

                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {selected.desc}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 text-xs bg-zinc-800 border border-white/10 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4">
                    <a
                      href={selected.live || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-violet-600 hover:bg-violet-500 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>

                    <a
                      href={selected.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-white/20 hover:bg-white/5 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition"
                    >
                      <FaGithub size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}