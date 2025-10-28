"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDownIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const gradientStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30"
      style={gradientStyle}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzOWMwIDUuMDIzLTQuOTc3IDktMTEgOUMyMC45NzcgNDggMTYgNDQuMDIzIDE2IDM5czQuOTc3LTkgMTEtOWM2LjAyMyAwIDExIDMuOTc3IDExIDl6IiBzdHJva2U9IiM5Y2FmZjkiIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container-custom relative z-10 section-padding">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Disponible para proyectos
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">Full Stack Developer</span>
            <br className="hidden md:block" />
            <span className="text-slate-900">&amp; SEO Specialist</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Construyendo soluciones web escalables con
            <span className="font-semibold text-slate-900">
              {" "}
              React, Next.js, TypeScript
            </span>{" "}
            y
            <span className="font-semibold text-slate-900">
              {" "}
              optimización SEO
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-300">
            <Link
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Ver Proyectos
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              Contáctame
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-600 animate-fade-in animation-delay-500">
            <a
              href="mailto:jorge.castro.cruz@hotmail.com"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span className="text-sm">jorge.castro.cruz@hotmail.com</span>
            </a>
            <a
              href="tel:+525545210178"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              <span className="text-sm">+52 55 4521 0178</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors"
          >
            <span className="text-sm font-medium">Ver más</span>
            <ArrowDownIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out backwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}
