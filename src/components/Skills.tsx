"use client";

import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5 / CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React / Next.js",
      "Tailwind CSS / Sass",
      "Redux / Zustand",
      "React Query",
      "Cypress",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Backend",
    skills: [
      "Node.js / Express.js",
      "NestJS",
      "Python",
      ".NET Core / ASP.NET",
      "GraphQL / REST APIs",
      "OAuth2 / OIDC / JWT",
      "Microservicios",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Bases de Datos",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Diseño relacional",
      "Optimización de queries",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "GitHub / GitFlow",
      "GitHub Actions",
      "Docker / Kubernetes",
      "CI/CD Pipelines",
      "AWS (Lambda, S3, RDS, EKS)",
      "GCP (Cloud Run, Firestore)",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Testing & QA",
    skills: [
      "Jest / Mocha",
      "Cypress",
      "Playwright",
      "Testing Unitario / E2E",
      "Postman / Newman",
    ],
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Marketing Digital",
    skills: [
      "SEO Técnico",
      "Google Tag Manager",
      "Google Analytics 4",
      "Schema.org",
      "PageSpeed Optimization",
      "Core Web Vitals",
    ],
    color: "from-indigo-500 to-indigo-600",
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Habilidades <span className="gradient-text">Técnicas</span>
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Tecnologías y herramientas con las que trabajo diariamente
        </p>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3
                className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-slate-700 text-sm"
                  >
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
