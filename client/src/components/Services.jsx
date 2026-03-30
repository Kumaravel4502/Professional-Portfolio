import { motion } from 'framer-motion';
import { Globe, Database, Zap, Users } from 'lucide-react';

const services = [
    {
        icon: Globe,
        title: "Portfolio & Business Websites",
        desc: "Responsive websites for personal brands, startups, and local businesses"
    },
    {
        icon: Database,
        title: "Basic Full-Stack Apps",
        desc: "Beginner-friendly MERN applications with authentication and CRUD features"
    },
    {
        icon: Zap,
        title: "Website Improvements",
        desc: "Fix UI issues, improve mobile view, and optimize loading speed"
    },
    {
        icon: Users,
        title: "Long-Term Learning Partnership",
        desc: "Transparent collaboration as I build your project and grow with your business"
    }
];

export default function Services() {
    return (
        <section className="py-28 bg-zinc-950 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-5xl font-bold text-center mb-6"
                >
                    Services I Offer
                </motion.h2>
                <p className="text-center text-white/60 text-xl mb-16">Practical development support for early-stage ideas and small projects</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-violet-400 transition-all group"
                        >
                            <service.icon size={48} className="mb-6 text-violet-400 group-hover:scale-110 transition" />
                            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                            <p className="text-white/70">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}