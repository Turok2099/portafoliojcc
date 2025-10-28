"use client";

import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Fundador",
    company: "La Trinchera México",
    period: "Feb. 2019 – Actual",
    type: "Empleo completo",
    location: "Ciudad de México",
    achievements: [
      "Fundé y dirijo una empresa especializada en la organización de eventos sociales y corporativos",
      "Lideré el desarrollo del sitio web oficial con Next.js 15, React 19, TypeScript y Tailwind CSS",
      "Implementé prácticas de optimización de rendimiento (Cloudinary, lazy loading, critical CSS)",
      "Logré una mejora de los Core Web Vitals en más del 40%",
      "Pipelines de integración continua con GitHub Actions y métricas de Lighthouse superiores al 85%",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Cloudinary",
      "SEO",
      "GTM",
      "GA4",
    ],
  },
  {
    title: "Merchant Acquisitions Executive",
    company: "American Express",
    period: "Abr. 2018 – Ene. 2019",
    type: "Empleo completo · 10 meses",
    location: "Ciudad de México",
    achievements: [
      "Prospeccioné y negocié con clientes B2B y B2C para la adquisición de líneas de crédito",
      "Elaboré análisis financieros personalizados para demostrar la conveniencia de productos",
      "Segmenté estratégicamente y analicé datos para optimizar la captación de clientes de alto valor",
      "Negocié con clientes corporativos aplicando lógica comercial basada en métricas",
    ],
    technologies: ["Análisis Financiero", "B2B Sales", "CRM", "Data Analysis"],
  },
  {
    title: "Gerente Comercial",
    company: "SANANTIA Farmacéutica Especializada",
    period: "Sept. 2016 – Mar. 2018",
    type: "Empleo completo · 1 año 7 meses",
    location: "Ciudad de México",
    achievements: [
      "Coordiné proyectos tecnológicos, incluyendo integración de PingFederate con .NET para SSO",
      "Desarrollé portales de intranet y implementé un CRM para call center",
      "Diseñé arquitecturas modulares con servicios desacoplados y APIs documentadas en Swagger",
      "Mejoré la eficiencia del call center en un 20% mediante la implementación del CRM",
      "Reduje los tiempos de autenticación en un 30% gracias a la integración de SSO",
    ],
    technologies: [
      ".NET",
      "JavaScript",
      "AngularJS",
      "Swagger",
      "OAuth2",
      "JWT",
    ],
  },
  {
    title: "Subdirector de Desarrollo Económico",
    company: "SEDECO-CDMX",
    period: "Jun. 2013 – Ago. 2016",
    type: "Empleo completo · 3 años 3 meses",
    location: "Ciudad de México",
    achievements: [
      "Diseñé estrategias de desarrollo económico mediante convenios interinstitucionales",
      "Coordiné eventos masivos como ferias, exposiciones y conferencias con más de 2,000 asistentes",
      "Optimicé procesos de planeación, logística y gestión de información",
    ],
    technologies: ["Gestión de Proyectos", "Coordinación", "Eventos Masivos"],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Experiencia <span className="gradient-text">Profesional</span>
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Trayectoria profesional en desarrollo web, gestión de proyectos y
          estrategia comercial
        </p>

        <div
          className={`max-w-4xl mx-auto space-y-8 ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 border-l-4 border-blue-600"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-sm font-medium text-slate-900">
                    {exp.period}
                  </p>
                  <p className="text-sm text-slate-600">{exp.location}</p>
                  <span className="inline-block mt-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {exp.type}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start text-slate-700">
                    <span className="text-blue-600 mr-2 mt-1.5">•</span>
                    <span className="text-sm leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
