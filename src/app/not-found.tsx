import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-900">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          <span className="gradient-text">404</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-4">
          Página no encontrada
        </h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
