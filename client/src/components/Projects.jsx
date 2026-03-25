import { useState } from 'react';
import { projects } from '../constants.jsx';
import ProjectModal from './ProjectModal.jsx';
import { motion } from 'framer-motion';

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-28 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-6"
        >
          Selected Work
        </motion.h2>
        <p className="text-center text-white/60 text-xl mb-16">Projects that turned ideas into impact</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03, y: -10 }}
              onClick={() => setSelected(project)}
              className="group bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-64">
                <img 
                  // src={`https://picsum.photos/id/${project.id * 11}/800/600`} 
                                    src={project.image} 

                  alt={project.title}
                  className="w-full h-full object-fill transition-all group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs uppercase tracking-widest font-medium px-4 py-1 bg-white/10 backdrop-blur-md rounded-3xl">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-white/60 line-clamp-3 mb-6">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="text-xs px-4 py-1 bg-white/10 rounded-3xl">{t}</span>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-sm">
                  <span className="font-medium text-emerald-400">{project.impact}</span>
                  <span className="text-white/40 group-hover:text-white transition">View case study →</span>
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