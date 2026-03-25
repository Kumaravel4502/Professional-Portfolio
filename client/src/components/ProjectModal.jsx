// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        onClick={e => e.stopImmediatePropagation()}
        className="bg-white dark:bg-zinc-900 max-w-2xl w-full rounded-3xl overflow-hidden"
      >
        <div className="relative">
          <img
            // src={`https://picsum.photos/id/${project.id * 10}/1200/800`}
            src={project.image}

            alt="" className="w-full" />
          <button onClick={onClose} className="absolute top-4 right-4 bg-white rounded-full p-3 shadow">
            <X size={24} />
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">{project.desc}</p>
          <div className="mt-8 flex gap-4">
            <a href={project.live} target="_blank" className="flex-1 text-center py-4 bg-violet-600 text-white rounded-2xl">Live Demo</a>
            <a href={project.github} target="_blank" className="flex-1 text-center py-4 border border-zinc-300 dark:border-zinc-700 rounded-2xl">GitHub</a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}