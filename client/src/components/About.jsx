import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-28 bg-white text-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-7"
          >
            <h2 className="text-5xl font-bold tracking-tight mb-8">
              Hi, I'm <span className="text-violet-600">Kumaravel D</span>
            </h2>
            <p className="text-2xl leading-relaxed text-zinc-600 mb-8">
              A passionate full-stack developer who partners with ambitious businesses to build fast, scalable, and beautiful web applications that actually deliver results.
            </p>
            <p className="text-lg text-zinc-500 max-w-2xl">
              With expertise in the MERN stack and modern tools, I’ve helped startups and established companies launch products that increased revenue, improved user engagement, and streamlined operations.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-violet-600">5+</div>
                <div className="text-zinc-500">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-violet-600">15+</div>
                <div className="text-zinc-500">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-violet-600">100%</div>
                <div className="text-zinc-500">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-5 bg-zinc-100 p-8 rounded-3xl"
          >
            <h3 className="font-semibold text-xl mb-6">Why clients choose me:</h3>
            <ul className="space-y-6 text-zinc-600">
              <li className="flex gap-4">
                <span className="text-2xl">⚡</span>
                <div>Blazing-fast, scalable applications built with modern tech</div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">🎯</span>
                <div>Pixel-perfect UI/UX that converts visitors into customers</div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">🔒</span>
                <div>Clean code, security-first approach, and long-term maintainability</div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">📈</span>
                <div>Focus on real business outcomes — not just pretty interfaces</div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}