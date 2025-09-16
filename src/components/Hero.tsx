import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="fade-in-up">
          <h1 className="hero-title">Abdul Fatir Ansari</h1>
        </div>

        <div className="fade-in-up stagger-1">
          <p className="hero-subtitle">Blockchain & Full-Stack Developer</p>
        </div>

        <div className="fade-in-up stagger-2">
          <p className="hero-description mb-8">
            Innovative developer with 4+ years of experience building
            decentralized applications, smart contracts, and full-stack web
            solutions. Passionate about creating scalable, secure, and
            user-centric digital experiences.
          </p>
        </div>

        <div className="fade-in-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#contact"
            className="btn-hero inline-flex items-center gap-2"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href="#projects"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Code size={20} />
            View My Work
          </a>
        </div>

        <div className="fade-in-up stagger-4 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/abdulfatiransari"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/abdulfatiransari"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:abdulfatiransari2@gmail.com"
            className="social-link"
            aria-label="Email Contact"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+923152957699"
            className="social-link"
            aria-label="Phone Contact"
          >
            <Smartphone size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
