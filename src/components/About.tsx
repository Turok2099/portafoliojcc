"use client";

import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div
          className={`max-w-4xl mx-auto ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Full Stack Developer con experiencia en proyectos de alto impacto
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-4">
              Full Stack Developer con experiencia en proyectos de alto impacto,
              integrando desarrollo web, SEO técnico y arquitecturas escalables
              en la nube. Especializado en React, Next.js, TypeScript y bases de
              datos, combino mi experiencia técnica con una sólida trayectoria
              en estrategia comercial, marketing digital y coordinación
              interinstitucional para construir soluciones alineadas a objetivos
              reales de negocio.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-lg mb-2 text-slate-900">
                  🎓 Formación Académica
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Universidad de Negocios - Lic. Neuropsicología</li>
                  <li>• Henry - Full Stack Developer</li>
                  <li>• Oracle Next Education - Data Science</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-lg mb-2 text-slate-900">
                  💼 Experiencia Clave
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Fundador / La Trinchera México (2019 - Actual)</li>
                  <li>• American Express (2018 - 2019)</li>
                  <li>• SANANTIA Farmacéutica (2016 - 2018)</li>
                  <li>• SEDECO-CDMX (2013 - 2016)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
