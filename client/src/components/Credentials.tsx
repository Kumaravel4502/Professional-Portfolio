import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { certifications, education } from '../constants';

export default function Credentials() {
  return (
    <section id="credentials" className="bg-zinc-900/30">
      <div className="section-container grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="p-3 glass rounded-2xl text-violet-400">
              <GraduationCap size={28} />
            </div>
            <h2 className="text-3xl font-bold font-display">Education</h2>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-3xl group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">{edu.degree}</h3>
                  <span className="text-zinc-500 font-medium">{edu.year}</span>
                </div>
                <div className="text-zinc-400 mb-2">{edu.institution}</div>
                <div className="inline-block px-3 py-1 bg-violet-500/10 text-violet-400 text-xs font-bold rounded-lg uppercase tracking-tighter">
                  {edu.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="p-3 glass rounded-2xl text-pink-400">
              <Award size={28} />
            </div>
            <h2 className="text-3xl font-bold font-display">Certifications</h2>
          </motion.div>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-3xl group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{cert.name}</h3>
                  <span className="text-zinc-500 font-medium">{cert.year}</span>
                </div>
                <div className="text-zinc-400">{cert.issuer}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
