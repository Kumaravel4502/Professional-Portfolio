import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold gradient-text">Kumaravel.Dev</div>

        <div className="flex gap-4">
          <a href="https://github.com/Kumaravel4502">
            <FaGithub size={20} />
          </a>

          <a href="https://linkedin.com/in/kumaravel4502/">
            <FaLinkedinIn size={20} />
          </a>

          <a href="mailto:Kumaravel.dev45@gmail.com">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
