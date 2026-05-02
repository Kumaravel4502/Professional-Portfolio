import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { summary } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-600/20 blur-[120px] rounded-full" />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Internships
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-display leading-[1.1] mb-8">
            Building the <br />
            <span className="gradient-text">Future of Web</span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-lg mb-10 leading-relaxed">
            {summary}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all hover:scale-105"
            >
              View Work <ArrowRight size={20} />
            </a>
            <a href="./Kumaravel_Resume.pdf" download="Kumaravel_Resume.pdf" className="px-8 py-4 glass rounded-full font-bold flex items-center justify-center gap-2 glass-hover hover:scale-105">
              Download CV <Download size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square max-w-md mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-pink-600 rounded-[3rem] rotate-6 opacity-20 blur-2xl" />
          <div className="relative glass rounded-[3rem] p-4 overflow-hidden h-full">
             <img 
                src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Profile" 
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -bottom-2 -left-2 sm:-bottom-6 sm:-left-6 glass p-4 sm:p-6 rounded-2xl sm:rounded-3xl animate-bounce-slow">
            <div className="text-xl sm:text-3xl font-bold">25%</div>
            <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-tighter">Perf. Optimization</div>
          </div>
          <div className="absolute top-8 -right-2 sm:top-12 sm:-right-6 glass p-4 sm:p-6 rounded-2xl sm:rounded-3xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
            <div className="text-xl sm:text-3xl font-bold">3+</div>
            <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-tighter">MERN Apps Built</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
