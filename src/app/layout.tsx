import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jorge Castro | Full Stack Developer & SEO Specialist",
  description:
    "Full Stack Developer especializado en React, Next.js, TypeScript y SEO técnico. Experiencia en arquitecturas escalables, optimización de performance y marketing digital.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "SEO Specialist",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "Node.js",
    "Python",
    "DevOps",
  ],
  authors: [{ name: "Jorge Castro" }],
  creator: "Jorge Castro",
  publisher: "Jorge Castro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jorgecastro.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
      en: "/",
    },
  },
  openGraph: {
    title: "Jorge Castro | Full Stack Developer",
    description:
      "Full Stack Developer especializado en React, Next.js, TypeScript y SEO técnico. Con experiencia en proyectos de alto impacto.",
    url: "https://jorgecastro.dev",
    siteName: "Jorge Castro Portfolio",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge Castro | Full Stack Developer",
    description:
      "Full Stack Developer especializado en React, Next.js, TypeScript y SEO técnico.",
    creator: "@jorgecastro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


