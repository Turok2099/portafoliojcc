import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-800 border-t border-surface-700/50 py-12">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © {year} Jorge Castro. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors"
            >
              Sobre mí
            </a>
            <a
              href="#projects"
              className="text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              className="text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors"
            >
              Contacto
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jorge-castro-953267144"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-blue-400 rounded-lg hover:bg-surface-700/50 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Turok2099"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-blue-400 rounded-lg hover:bg-surface-700/50 transition-all"
              aria-label="GitHub"
            >
              <FiGithub className="h-5 w-5" />
            </a>
            <a
              href="mailto:jorge.castro.cruz@hotmail.com"
              className="p-2 text-slate-400 hover:text-blue-400 rounded-lg hover:bg-surface-700/50 transition-all"
              aria-label="Email"
            >
              <FiMail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
