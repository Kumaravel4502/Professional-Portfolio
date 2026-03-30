import { motion } from 'framer-motion';

const packages = [
  {
    name: 'Basic Landing Page',
    price: 'From $80',
    timeline: '3-5 days',
    points: ['Responsive single-page site', 'Simple contact section', 'Deployment support'],
  },
  {
    name: 'Multi-Page Business Site',
    price: 'From $180',
    timeline: '1-2 weeks',
    points: ['Up to 5 pages', 'Reusable components', 'Deployment + basic SEO setup'],
    featured: true,
  },
  {
    name: 'Starter MERN App',
    price: 'From $300',
    timeline: '2-5 weeks',
    points: ['Authentication + CRUD features', 'MongoDB integration', 'Post-delivery walkthrough'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl font-bold text-center mb-4">
          Service Packages
        </motion.h2>
        <p className="text-center text-zinc-400 text-lg mb-14">Beginner-friendly pricing for first projects. Final quote depends on scope.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`rounded-3xl border p-8 ${item.featured ? 'border-violet-400 bg-violet-500/10' : 'border-zinc-800 bg-zinc-900/60'}`}
            >
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="mt-3 text-3xl font-bold">{item.price}</p>
              <p className="mt-1 text-zinc-400">{item.timeline}</p>
              <ul className="mt-6 space-y-3 text-zinc-300">
                {item.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
