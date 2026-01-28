"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiAward, FiBriefcase } from "react-icons/fi";

const formation = [
  "Universidad de Negocios — Lic. Neuropsicología",
  "Henry — Full Stack Developer",
  "Oracle Next Education — Data Science",
];

const experience = [
  "Fundador / La Trinchera México (2019 – Actual)",
  "American Express (2018 – 2019)",
  "SANANTIA Farmacéutica (2016 – 2018)",
  "SEDECO-CDMX (2013 – 2016)",
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-16 md:py-20 bg-surface-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Sobre <span className="gradient-text">mí</span>
          </h2>


          <p className="text-slate-300 leading-relaxed mb-10">
          Full Stack Developer especializado en React/Next.js, con enfoque en arquitectura modular, escalabilidad y experiencia de usuario. Combino más de una década de trayectoria en estrategia comercial, marketing digital y coordinación interinstitucional con habilidades avanzadas en tecnologías como HTML, CSS, JavaScript, TypeScript, MongoDB y PostgreSQL.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="card-dark p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <FiAward className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg text-slate-100">
                  Formación
                </h3>
              </div>
              <ul className="space-y-2 text-slate-400 text-sm">
                {formation.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="card-dark p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <FiBriefcase className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg text-slate-100">
                  Experiencia clave
                </h3>
              </div>
              <ul className="space-y-2 text-slate-400 text-sm">
                {experience.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
