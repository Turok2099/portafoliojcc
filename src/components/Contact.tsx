"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";

const contactMethods = [
  {
    icon: FiMail,
    label: "Email",
    value: "jorge.castro.cruz@hotmail.com",
    href: "mailto:jorge.castro.cruz@hotmail.com",
  },
  {
    icon: FiPhone,
    label: "Teléfono",
    value: "+52 55 4521 0178",
    href: "tel:+525545210178",
  },
  {
    icon: FiMapPin,
    label: "Ubicación",
    value: "Ciudad de México",
    href: "#",
  },
];

const socialLinks = [
  { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jorge-castro-953267144" },
  { icon: FiGithub, label: "GitHub", href: "https://github.com/Turok2099" },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-surface-900 border-t border-surface-700/50"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trabajemos <span className="gradient-text">juntos</span>
          </h2>
          <p className="text-slate-400 mb-12">
            ¿Tienes un proyecto en mente? Contáctame y conversemos sobre cómo
            puedo ayudarte.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {contactMethods.map((method) => {
              const baseClass =
                "card-dark p-6 flex flex-col items-center text-center group";
              const content = (
                <>
                  <div className="p-3 rounded-full bg-blue-500/20 text-blue-400 mb-3 group-hover:bg-blue-500/30 transition-colors">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                    {method.label}
                  </span>
                  <span className="text-slate-300 text-sm break-all">
                    {method.value}
                  </span>
                </>
              );
              return method.href === "#" ? (
                <div key={method.label} className={baseClass}>
                  {content}
                </div>
              ) : (
                <Link
                  key={method.label}
                  href={method.href}
                  className={`${baseClass} hover:border-blue-500/50 transition-colors duration-300`}
                >
                  {content}
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center gap-4 mb-10">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-surface-800 border border-surface-600 text-slate-300 rounded-lg font-medium hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
              >
                <social.icon className="h-5 w-5" />
                {social.label}
              </Link>
            ))}
          </div>

          <Link
            href="mailto:jorge.castro.cruz@hotmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300"
          >
            <FiSend className="h-5 w-5" />
            Enviar email
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
