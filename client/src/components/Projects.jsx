import { useState } from 'react';
import { projects } from '../constants.jsx';
import ProjectModal from './ProjectModal.jsx';
import { motion } from 'framer-motion';

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const getFallbackImage = (id) => `https://picsum.photos/seed/project-${id}/1200/800`;

  return (
    <section id="projects" className="py-28 bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-6"
        >
          Selected Work
        </motion.h2>
        <p className="text-center text-zinc-600 dark:text-white/60 text-xl mb-16">Projects that turned ideas into impact</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03, y: -10 }}
              onClick={() => setSelected(project)}
              className="group bg-white/90 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-3xl overflow-hidden cursor-pointer shadow-sm dark:shadow-none"
            >
              <div className="relative w-full h-56 overflow-hidden bg-zinc-100 dark:bg-zinc-800/60">
                <img 
                  src={project.image || getFallbackImage(project.id)}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.src = getFallbackImage(project.id);
                  }}
                  className="block w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest font-medium px-4 py-1 bg-white/90 dark:bg-black/40 backdrop-blur-md rounded-3xl">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-zinc-600 dark:text-white/60 line-clamp-3 mb-6">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="text-xs px-4 py-1 bg-zinc-100 dark:bg-white/10 rounded-3xl">{t}</span>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between text-sm">
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">{project.impact ?? 'Project showcase'}</span>
                  <span className="text-zinc-500 dark:text-white/40 group-hover:text-zinc-900 dark:group-hover:text-white transition">View case study →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}