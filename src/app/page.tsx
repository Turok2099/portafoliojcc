import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jorge Castro",
    jobTitle: "Full Stack Developer, SEO Specialist & Data Science",
    url: "https://jorgecastro.dev",
    email: "jorge.castro.cruz@hotmail.com",
    telephone: "+52 55 4521 0178",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de México",
      addressCountry: "MX",
    },
    sameAs: [
      "https://www.linkedin.com/in/jorge-castro-953267144",
      "https://github.com/Turok2099",
    ],
    alumniOf: [
      { "@type": "Organization", name: "Universidad de Negocios", description: "Lic. en Neuropsicología" },
      { "@type": "Organization", name: "Henry", description: "Full Stack Developer" },
      { "@type": "Organization", name: "Oracle Next Education", description: "Data Science" },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: { "@type": "City", name: "Ciudad de México" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FloatingButtons />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
