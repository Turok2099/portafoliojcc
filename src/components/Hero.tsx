"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-900"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-xl" />
              <Image
                src="https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,w_400,h_400,c_fill,g_face/v1769566788/Gemini_Generated_Image_bikj1nbikj1nbikj_bdpup6.png"
                alt="Jorge Castro - Full Stack Developer"
                width={192}
                height={192}
                className="relative rounded-full border-4 border-surface-700/50 shadow-xl object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-4"
          >
            <span className="gradient-text">Jorge Castro</span>
            <br />
            <span className="text-slate-100">Full Stack Developer</span>
            <br />
            <span className="text-slate-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
              SEO Specialist &amp; Data Science
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg lg:text-xl text-slate-400 mb-10 max-w-2xl mx-auto px-4"
          >
            Soluciones web con <span className="text-slate-200">React</span>,{" "}
            <span className="text-slate-200">Next.js</span>,{" "}
            <span className="text-slate-200">TypeScript</span> y optimización
            SEO. Proyectos en producción, en constante mejora.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 px-4"
          >
            <Link
              href="#projects"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300 text-center"
            >
              Ver proyectos
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-surface-800 border border-surface-600 text-slate-200 rounded-lg font-semibold hover:bg-surface-700 hover:border-surface-500 transition-all duration-300 text-center"
            >
              Contacto
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
