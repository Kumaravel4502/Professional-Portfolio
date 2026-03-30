import { motion } from 'framer-motion';
import VisitorCounter from './VisitorCounter.jsx';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-indigo-950 to-violet-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(129,140,248,0.25)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10 pt-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl text-white text-sm mb-8">
            <Sparkles size={18} className="text-violet-400" />
            Fresher Freelancer • Open to starter projects
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tighter text-white">
            I build <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">clean and responsive websites</span> for startups and small businesses
          </h1>

          <p className="mt-8 text-2xl text-white/90 font-light max-w-lg">
            Junior MERN Stack Developer<br />
            Focused on affordable, high-quality first versions
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group px-8 py-5 bg-white text-zinc-950 rounded-3xl font-semibold text-lg flex items-center gap-3 hover:scale-105 transition"
            >
              See My Work
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="#contact"
              className="px-8 py-5 border-2 border-white/30 hover:border-white text-white rounded-3xl font-semibold text-lg transition"
            >
              Start With a Free Discussion
            </a>
          </div>
          <VisitorCounter /> 
        </motion.div>

        {/* RIGHT SIDE - Animated Coder Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}  
          className="relative flex justify-center"
        >  
          <div className="relative">
            {/* Soft glowing ring */}
            <div className="absolute -inset-10 bg-gradient-to-r from-violet-500 to-pink-500 rounded-[4rem] blur-3xl opacity-30 animate-pulse" />
            
            {/* Image Container */}
            <div className="w-80 h-80 md:w-96 md:h-96 bg-zinc-900/70 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                alt="Animated coder working at a desk"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}