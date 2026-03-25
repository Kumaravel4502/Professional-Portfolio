import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      toast.success('Message sent! Thank you 🎉');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
      console.log(err);
      
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">Let's Work Together</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="w-full px-6 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl focus:outline-none" />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email" required className="w-full px-6 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl focus:outline-none" />
          </div>
          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required className="w-full px-6 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl focus:outline-none" />
          <textarea name="message" value={form.message} onChange={handleChange} rows="6" placeholder="Your message" required className="w-full px-6 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl focus:outline-none resize-none" />
          <button type="submit" className="w-full py-5 bg-gradient-to-r from-violet-600 to-pink-600 text-white text-lg font-semibold rounded-3xl hover:scale-105 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}