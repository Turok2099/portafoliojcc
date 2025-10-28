export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container-custom px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jorge Castro</h3>
            <p className="text-slate-400 text-sm">
              Full Stack Developer especializado en React, Next.js, TypeScript y
              SEO técnico.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-white transition-colors"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-white transition-colors"
                >
                  Experiencia
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="mailto:jorge.castro.cruz@hotmail.com"
                  className="hover:text-white transition-colors"
                >
                  jorge.castro.cruz@hotmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+525545210178"
                  className="hover:text-white transition-colors"
                >
                  +52 55 4521 0178
                </a>
              </li>
              <li>Ciudad de México</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Jorge Castro. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a
              href="https://www.linkedin.com/in/jorge-castro-953267144"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Turok2099"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
