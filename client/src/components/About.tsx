import { motion } from 'framer-motion';
import { summary } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-violet-600/10 blur-[80px] rounded-full" />
          <div className="relative glass p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-white/5">
            <h2 className="text-4xl font-bold font-display mb-8">About Me</h2>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              {summary}
            </p>
            
            <div className="space-y-4">
              {[
                "Passionate about clean code & scalability",
                "Focused on performance-driven user interfaces",
                "Always learning and exploring new tech stacks",
                "Committed to delivering high-quality web solutions"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-zinc-300">
                  <CheckCircle2 size={20} className="text-emerald-400" />
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="glass p-4 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col justify-center items-center text-center">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">1+</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-500">Year Exp</div>
            </div>
            <div className="glass p-4 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col justify-center items-center text-center sm:mt-12">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">10+</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-500">Projects</div>
            </div>
            <div className="glass p-4 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col justify-center items-center text-center sm:-mt-12">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">15+</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-500">Issues Resolved</div>
            </div>
            <div className="glass p-4 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col justify-center items-center text-center">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-500">Commitment</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
