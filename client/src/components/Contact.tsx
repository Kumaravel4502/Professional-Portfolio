import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // In a real app, this would be your backend URL
      await axios.post('http://localhost:5000/api/contact', form);
      toast.success('Message sent! I will get back to you soon. 🎉');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 blur-[120px] rounded-full" />
      
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-display mb-6">Let's Connect</h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">Have a project in mind? Let's build something amazing together.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'kumaravel.dev45@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 9941925585 ' },
              { icon: MapPin, label: 'Location', value: 'Chennai, India' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2rem] flex items-center gap-6 group hover:bg-white/10 transition-colors"
              >
                <div className="p-4 bg-violet-500/10 rounded-2xl text-violet-400 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass p-8 md:p-12 rounded-[3rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 ml-4">NAME</label>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    placeholder="John Doe" 
                    required 
                    className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 ml-4">EMAIL</label>
                  <input 
                    name="email" 
                    type="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com" 
                    required 
                    className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-500 ml-4">SUBJECT</label>
                <input 
                  name="subject" 
                  value={form.subject} 
                  onChange={handleChange} 
                  placeholder="Project Inquiry" 
                  required 
                  className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-500 ml-4">MESSAGE</label>
                <textarea 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                  rows={6} 
                  placeholder="Tell me about your project..." 
                  required 
                  className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all resize-none" 
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-5 bg-white text-black text-lg font-bold rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <Send size={20} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
