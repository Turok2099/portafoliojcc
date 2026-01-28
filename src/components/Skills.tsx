"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiRedux,
  SiCypress,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiDotnet,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGitlab,
  SiAmazon,
  SiGooglecloud,
  SiJest,
  SiMocha,
  SiPostman,
} from "react-icons/si";
import { FaCode, FaServer, FaDatabase, FaTools, FaCheckCircle, FaTheaterMasks, FaEllipsisH, FaChevronDown, FaChevronUp } from "react-icons/fa";

const techCategories = [
  {
    title: "Frontend",
    icon: FaCode,
    color: "blue",
    technologies: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Sass", icon: SiSass, color: "#CC6699" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Cypress", icon: SiCypress, color: "#17202C" },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    color: "cyan",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: ".NET Core", icon: SiDotnet, color: "#512BD4" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "REST APIs", icon: FaServer, color: "#64748b" },
    ],
  },
  {
    title: "Bases de Datos",
    icon: FaDatabase,
    color: "purple",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Herramientas / DevOps",
    icon: FaTools,
    color: "orange",
    technologies: [
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "GitLab CI", icon: SiGitlab, color: "#FC6D26" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
    ],
  },
  {
    title: "Testing & QA",
    icon: FaCheckCircle,
    color: "green",
    technologies: [
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Mocha", icon: SiMocha, color: "#8D6748" },
      { name: "Cypress", icon: SiCypress, color: "#17202C" },
      { name: "Playwright", icon: FaTheaterMasks, color: "#2EAD33" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    title: "Otros",
    icon: FaEllipsisH,
    color: "purple",
    technologies: [
      { name: "OAuth2", icon: FaServer, color: "#64748b" },
      { name: "OIDC", icon: FaServer, color: "#64748b" },
      { name: "SAML", icon: FaServer, color: "#64748b" },
      { name: "JWT", icon: FaServer, color: "#64748b" },
      { name: "Microservicios", icon: FaServer, color: "#64748b" },
      { name: "Webhooks", icon: FaServer, color: "#64748b" },
      { name: "Jobs", icon: FaServer, color: "#64748b" },
      { name: "CI/CD", icon: FaTools, color: "#64748b" },
      { name: "Testing E2E", icon: FaCheckCircle, color: "#64748b" },
      { name: "GitFlow", icon: SiGithub, color: "#181717" },
    ],
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    border: "border-blue-500/30",
  },
  cyan: {
    bg: "bg-cyan-500/20",
    text: "text-cyan-400",
    border: "border-cyan-500/30",
  },
  purple: {
    bg: "bg-purple-500/20",
    text: "text-purple-400",
    border: "border-purple-500/30",
  },
  orange: {
    bg: "bg-orange-500/20",
    text: "text-orange-400",
    border: "border-orange-500/30",
  },
  green: {
    bg: "bg-green-500/20",
    text: "text-green-400",
    border: "border-green-500/30",
  },
};

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());

  const toggleCategory = (index: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <section id="skills" ref={ref} className="section-padding bg-surface-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Tecnologías</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Stack tecnológico completo para desarrollo full-stack moderno
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            const isExpanded = expandedCategories.has(categoryIndex);

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="card-dark overflow-hidden"
              >
                {/* Header con botón toggle */}
                <button
                  onClick={() => toggleCategory(categoryIndex)}
                  className="w-full p-6 flex items-center justify-between hover:bg-surface-800/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${colors.bg} ${colors.text}`}>
                      <CategoryIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-xl text-slate-100">
                      {category.title}
                    </h3>
                    <span className="text-sm text-slate-400">
                      ({category.technologies.length})
                    </span>
                  </div>
                  <div className={`${colors.text} transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <FaChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {/* Contenido colapsable */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-2">
                          {category.technologies.map((tech, techIndex) => {
                            const TechIcon = tech.icon;
                            return (
                              <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.2,
                                  delay: techIndex * 0.03,
                                }}
                                className={`flex flex-col items-center gap-2 p-4 rounded-lg bg-surface-800/50 border ${colors.border} hover:bg-surface-800 hover:scale-105 transition-all duration-300 group`}
                              >
                                <TechIcon
                                  className="h-8 w-8 group-hover:scale-110 transition-transform duration-300"
                                  style={{ color: tech.color }}
                                />
                                <span className="text-xs text-slate-300 text-center font-medium">
                                  {tech.name}
                                </span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
