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
              I am a fresher full-stack developer starting my freelancing journey and helping clients build modern web experiences.
            </p>
            <p className="text-lg text-zinc-500 max-w-2xl">
              I work with the MERN stack and focus on clear communication, on-time delivery, and clean code so your idea can go live quickly.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-violet-600">Fresher</div>
                <div className="text-zinc-500">Freelancer</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-violet-600">MERN</div>
                <div className="text-zinc-500">Tech Stack</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-violet-600">24h</div>
                <div className="text-zinc-500">Reply Time</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-5 bg-zinc-100 p-8 rounded-3xl"
          >
            <h3 className="font-semibold text-xl mb-6">Why work with me:</h3>
            <ul className="space-y-6 text-zinc-600">
              <li className="flex gap-4">
                <span className="text-2xl">⚡</span>
                <div>Affordable starter pricing for small businesses and new founders</div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">🎯</span>
                <div>Simple and responsive UI that looks good on all devices</div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">🔒</span>
                <div>Clean code with proper structure so your project can grow later</div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">📈</span>
                <div>Friendly communication and regular updates during the project</div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}