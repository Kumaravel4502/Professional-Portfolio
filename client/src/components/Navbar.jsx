import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 20));
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-zinc-950/80 backdrop-blur-lg shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Kumaravel D</h1>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-violet-600 transition">About</a>
          <a href="#skills" className="hover:text-violet-600 transition">Skills</a>
          <a href="#projects" className="hover:text-violet-600 transition">Projects</a>
          <a href="#pricing" className="hover:text-violet-600 transition">Pricing</a>
          <a href="#faq" className="hover:text-violet-600 transition">FAQ</a>
          <a href="#contact" className="hover:text-violet-600 transition">Contact</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 py-4">
          <div className="flex flex-col gap-4 px-6 text-center">
            <a href="#about" onClick={() => setIsOpen(false)} className="py-2">About</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="py-2">Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="py-2">Projects</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="py-2">Pricing</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="py-2">FAQ</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}