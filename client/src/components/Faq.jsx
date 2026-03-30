const faqs = [
  {
    q: 'What is your typical response time?',
    a: 'I usually respond within 24 hours on weekdays.',
  },
  {
    q: 'Are you open to small or trial projects?',
    a: 'Yes. As a fresher freelancer, I am open to small projects and trial tasks so we can build trust first.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. I work remotely with clients across time zones using async updates and scheduled calls.',
  },
  {
    q: 'How do payments work?',
    a: 'Typical terms are milestone-based: 30% upfront, 40% during development, 30% on final delivery.',
  },
  {
    q: 'Do you provide maintenance after launch?',
    a: 'Yes. I provide short-term support after delivery and can continue as needed.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">FAQ</h2>
        <p className="text-center text-zinc-400 mb-12">Common questions for working with a fresher freelancer.</p>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
              <summary className="cursor-pointer text-lg font-semibold">{item.q}</summary>
              <p className="mt-3 text-zinc-300">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
