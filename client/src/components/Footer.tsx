import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold gradient-text">Kumaravel.Dev</div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Kumaravel4502" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-violet-500/20 text-zinc-400 hover:text-violet-400 rounded-full transition-all">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/kumaravel4502/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-violet-500/20 text-zinc-400 hover:text-violet-400 rounded-full transition-all">
            <FaLinkedinIn size={20} />
          </a>
          <a href="mailto:Kumaravel.dev45@gmail.com" className="p-3 bg-white/5 hover:bg-violet-500/20 text-zinc-400 hover:text-violet-400 rounded-full transition-all">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
