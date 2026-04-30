



import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold gradient-text"
          >
            Kumaravel.Dev
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Kumaravel4502"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition"
            >
              <FaGithub size={20} />
            </a> 

             <a
              href="https://linkedin.com/in/kumaravel4502/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:Kumaravel.dev45@gmail.com"
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass rounded-3xl p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-zinc-400 hover:text-white transition"
              >
                {link.name}
              </a>
            ))}

            <hr className="border-white/10" />

            <div className="flex flex-col gap-3">
              <a
                href="mailto:Kumaravel.dev45@gmail.com"
                className="bg-white text-black py-3 rounded-2xl text-center font-bold"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}