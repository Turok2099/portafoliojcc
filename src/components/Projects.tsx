"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Triple Impacto (En Desarrollo)",
    description:
      "Plataforma de impacto social: monorepo con NestJS (backend) y Next.js (frontend), gestionado con Turborepo. Donaciones, cupones Bonda, landings para ONGs. En producción y en constante actualización de diseño y funcionalidad.",
    image:
      "https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,w_800,h_600,c_fit/v1769564151/8017f5bc-7b0a-4d61-9e37-3fc3b5786f8f.png",
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Turborepo",
      "PostgreSQL",
      "Supabase",
    ],
    url: "https://www.tripleimpacto.site",
  },
  {
    title: "The Klan BJJ",
    description:
      "Sitio oficial de la academia de Jiu Jitsu Brasileño en CDMX. Autenticación con Supabase, responsivas digitales, generación de PDFs, suscripciones con Stripe y panel administrativo. En producción y en mejora continua.",
    image:
      "https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,w_800,h_600,c_fit/v1769564193/667ca67b-1ffc-4741-a081-68fdbdbce9f2.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Resend",
    ],
    url: "https://theklanbjj.com.mx",
  },
  {
    title: "La Trinchera México",
    description:
      "Sitio empresarial de organización de eventos (bodas, corporativos, catering). Optimización con Cloudinary, SEO técnico, GTM/GA4 y Core Web Vitals. Mejora de rendimiento y UX en curso.",
    image:
      "https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,w_800,h_600,c_fit/v1769564209/87af5a3e-ebc7-4f46-bf4e-a3b7e7b22b21.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Cloudinary",
      "SEO",
    ],
    url: "https://latrincheramexico.com",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding bg-surface-900 border-t border-surface-700/50"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proyectos <span className="gradient-text">en producción</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Sitios y aplicaciones reales, en actualización continua de diseño y
            funcionalidad
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div
                className={`relative group ${
                  index % 2 === 1 ? "md:col-start-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-xl aspect-video card-dark border border-surface-600/50 bg-surface-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain opacity-90 group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-900/90 via-transparent to-transparent" />
                  
                  {/* Botón Ver sitio dentro de la imagen - Siempre visible en móvil, hover en desktop */}
                  <div className="absolute inset-0 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold shadow-xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 z-10 text-sm md:text-base"
                    >
                      <FiExternalLink className="h-4 w-4 md:h-5 md:w-5" />
                      Ver sitio
                    </Link>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-surface-800 text-slate-300 rounded-lg text-sm font-medium border border-surface-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
