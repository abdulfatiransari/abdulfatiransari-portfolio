import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Abdul Fatir Ansari - Blockchain & Full-Stack Developer</title>
        <meta
          name="description"
          content="Learn Abdul Fatir Ansari, a Blockchain & Full-Stack Developer with expertise in DApps, smart contracts, and web development."
        />
        <meta
          name="keywords"
          content="blockchain developer, full stack developer, full stack, frontend developer, web3, DApps, smart contracts, React.js, Next.js, Solidity, web development, JavaScript, Abdul Fatir Ansari, Abdul Fatir, Fatir Ansari, Fatir"
        />
        <meta property="og:title" content=" Abdul Fatir Ansari" />
        <meta
          property="og:description"
          content="Innovative Blockchain & Full-Stack Developer with expertise in DApps, smart contracts, and modern web solutions."
        />
        <meta
          property="og:url"
          content="https://abdulfatiransari.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://abdulfatiransari.vercel.app/hero.PNG"
        />
        <link rel="canonical" href="https://abdulfatiransari.vercel.app/" />
      </Helmet>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
