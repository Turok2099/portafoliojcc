"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const projects = [
  {
    title: "La Trinchera México",
    description:
      "Sitio web empresarial optimizado para organización de eventos. Implementé optimizaciones que redujeron el tamaño de imágenes en 88% (15MB → 2-4MB), mejorando LCP de 4-8s a 1.5-3s.",
    image:
      "https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,w_800,h_600,c_fill/v1758905577/trinchera/eventos-sociales/23.png",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Cloudinary",
      "SEO",
      "GTM",
      "GA4",
    ],
    features: [
      "Optimización de imágenes con Cloudinary",
      "Lazy loading de componentes",
      "Critical CSS inline",
      "Structured Data (Schema.org)",
      "Sitemap dinámico",
      "Performance >85 en Lighthouse",
    ],
    year: "2024",
    category: "Web Empresarial",
    url: "https://latrincheramexico.com",
    status: "Live",
  },
  {
    title: "The Klan BJJ",
    description:
      "Plataforma para academia de Jiu Jitsu Brasileño con autenticación avanzada, gestión de responsivas, generación de PDFs y panel administrativo.",
    image:
      "https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,w_800,h_600,c_fill/The%20Klan/hero-image.jpg",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Supabase",
      "React Hook Form",
      "Zod",
      "@react-pdf/renderer",
    ],
    features: [
      "Autenticación con Supabase",
      "Sistema de roles (Admin/Estudiante)",
      "Formularios responsivas digitales",
      "Generación de PDFs",
      "Panel administrativo",
      "Email service con Resend",
    ],
    year: "2024",
    category: "SaaS",
    url: "https://theklanbjj.com.mx",
    status: "Live",
  },
  {
    title: "Otros Proyectos",
    description:
      "Desarrollo de portales web, integraciones con APIs, y aplicaciones empresariales utilizando tecnologías modernas.",
    image:
      "https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,w_800,h_600,c_fill/v1758905577/trinchera/eventos-sociales/23.png",
    technologies: [
      "React",
      "Node.js",
      "Python",
      ".NET Core",
      "PostgreSQL",
      "AWS",
    ],
    features: [
      "Arquitecturas escalables",
      "Microservicios",
      "APIs RESTful",
      "Integración SSO",
      "CRM personalizado",
    ],
    year: "2016-2023",
    category: "Diversos",
    status: "Archivados",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Proyectos <span className="gradient-text">Destacados</span>
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Proyectos reales en producción con foco en performance y escalabilidad
        </p>

        <div
          className={`space-y-12 ${inView ? "animate-fade-in" : "opacity-0"}`}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-lg shadow-xl aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-900">
                      {project.status}
                    </span>
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "md:order-first" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <span className="text-sm font-semibold text-slate-500">
                    {project.year}
                  </span>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">
                    Tecnologías
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">
                    Características
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start text-slate-600 text-sm"
                      >
                        <span className="text-blue-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                {project.url && (
                  <div className="flex gap-4">
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      Ver Sitio
                    </Link>
                    {project.title !== "Otros Proyectos" && (
                      <Link
                        href="#contact"
                        className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                      >
                        <CodeBracketIcon className="h-5 w-5" />
                        Ver Código
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
