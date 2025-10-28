"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const contactMethods = [
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "jorge.castro.cruz@hotmail.com",
      href: "mailto:jorge.castro.cruz@hotmail.com",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: PhoneIcon,
      label: "Teléfono",
      value: "+52 55 4521 0178",
      href: "tel:+525545210178",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: MapPinIcon,
      label: "Ubicación",
      value: "Ciudad de México",
      href: "#",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jorge-castro-953267144",
      hoverColor: "hover:bg-blue-50",
    },
    {
      label: "GitHub",
      href: "https://github.com/Turok2099",
      hoverColor: "hover:bg-slate-100",
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Trabajemos <span className="gradient-text">Juntos</span>
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Contáctame y conversemos sobre cómo
          puedo ayudarte.
        </p>

        <div
          className={`max-w-4xl mx-auto ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method) => (
              <Link
                key={method.label}
                href={method.href}
                className={`flex flex-col items-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-lg border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg`}
              >
                <div className={`${method.bgColor} p-3 rounded-full mb-4`}>
                  <method.icon className={`h-6 w-6 ${method.color}`} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {method.label}
                </h3>
                <p className="text-sm text-slate-600 text-center break-words">
                  {method.value}
                </p>
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3 border-2 border-slate-200 rounded-lg font-semibold transition-all duration-300 ${social.hoverColor} text-slate-700`}
              >
                {social.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="mailto:jorge.castro.cruz@hotmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Enviar Email
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
