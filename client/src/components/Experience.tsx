import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="bg-zinc-900/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Professional Journey</h2>
          <p className="text-zinc-400">My path in the software development world</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[2.5rem] glass-hover relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Briefcase size={120} />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <div className="text-violet-400 font-medium text-lg">{exp.company}</div>
                </div>
                <div className="px-6 py-2 glass rounded-full text-zinc-300 text-sm font-semibold">
                  {exp.duration}
                </div>
              </div>

              <ul className="grid md:grid-cols-2 gap-4">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-4 items-start text-zinc-400 leading-relaxed">
                    <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-violet-500 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
