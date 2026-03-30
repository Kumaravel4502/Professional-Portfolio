import { motion } from 'framer-motion';

const steps = [
  { title: 'Quick Requirement Call', detail: 'A short call to understand your exact requirement and priority.' },
  { title: 'Simple Plan and Quote', detail: 'I share a beginner-friendly plan, timeline, and budget estimate.' },
  { title: 'Build With Regular Updates', detail: 'I develop your project and keep you updated at each stage.' },
  { title: 'Delivery and Revisions', detail: 'Final handover with small revisions and support for next steps.' },
];

export default function Process() {
  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">How We Work</h2>
        <p className="text-center text-zinc-400 mb-14">Simple and transparent workflow designed for first-time collaboration.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-3xl border border-zinc-700 bg-zinc-950 p-7"
            >
              <p className="text-violet-400 font-semibold">Step {idx + 1}</p>
              <h3 className="text-2xl font-semibold mt-2">{step.title}</h3>
              <p className="mt-3 text-zinc-300">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
