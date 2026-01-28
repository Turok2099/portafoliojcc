"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const phoneNumber = "525545210178"; // Sin espacios ni guiones para WhatsApp

  return (
    <>
      {/* Botón "Disponible para proyectos" */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: 1, 
          x: 0,
        }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed top-20 right-2 md:top-24 md:right-8 z-40"
      >
        <motion.div
          animate={{ 
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2 rounded-full bg-surface-800 border border-surface-600/50 text-slate-300 text-xs md:text-sm shadow-lg hover:shadow-blue-500/25 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className="hidden sm:inline">Disponible para proyectos</span>
          <span className="sm:hidden">Disponible</span>
        </motion.div>
      </motion.div>

      {/* Botón WhatsApp */}
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=Hola%20Jorge,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte.`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-3 md:bottom-8 md:right-8 z-40 p-3 md:p-4 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 hover:shadow-green-500/50 transition-all duration-300 group"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        >
          <FaWhatsapp className="h-6 w-6 md:h-7 md:w-7" />
        </motion.div>
        
        {/* Tooltip - Solo en desktop */}
        <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-surface-800 text-slate-200 text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-surface-600">
          Chatea conmigo
        </span>
      </motion.a>
    </>
  );
}
