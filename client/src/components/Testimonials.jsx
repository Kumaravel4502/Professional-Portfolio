import { motion } from 'framer-motion';
import { testimonials } from '../constants.jsx';

export default function Testimonials() {
  return (
    <section className="py-28 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">What Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
            >
              <p className="italic text-lg leading-relaxed mb-8">“{t.text}”</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-2xl object-cover" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-white/60 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}