import { ExternalLink, Github, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Blockface.io",
      description:
        "Decentralized web platform integrating blockchain features for enhanced user engagement. Built with React.js & Next.js ensuring seamless performance and responsive UI.",
      tech: ["React.js", "Next.js", "Solidity", "Web3.js", "Smart Contracts"],
      liveUrl: "https://blockface.io/",
      githubUrl: "",
      image: "./projectImages/blockface.PNG",
    },
    {
      title: "AT Care",
      description:
        "Healthcare application developed at TheatriaTechnologies focusing on improving healthcare accessibility through modern web technologies and blockchain integration.",
      tech: [
        "React.js",
        "Next.js",
        "Healthcare APIs",
        "Firebase",
        "Responsive Design",
      ],
      liveUrl: "https://www.theatcare.com/",
      githubUrl: "",
      image: "./projectImages/atcare.PNG",
    },
    {
      title: "DeFi Trading Platform",
      description:
        "Comprehensive decentralized finance platform enabling secure trading, liquidity provision, and yield farming with advanced smart contract integration.",
      tech: [
        "Solidity",
        "React.js",
        "Ethers.js",
        "DeFi Protocols",
        "Web3 Integration",
      ],
      liveUrl: "https://lieo-farm.vercel.app/",
      githubUrl: "",
      image: "./projectImages/defi.PNG",
    },
    {
      title: "NFT Marketplace",
      description:
        "Full-stack NFT marketplace with minting, trading, and auction functionality. Features advanced filtering, search capabilities, and seamless wallet integration.",
      tech: [
        "Next.js",
        "Solidity",
        "IPFS",
        "OpenSea API",
        "MetaMask Integration",
      ],
      liveUrl: "https://universe-nft-marketplace.vercel.app/",
      githubUrl: "",
      image: "./projectImages/marketplace.PNG",
    },
    {
      title: "E-Commerce Solution",
      description:
        "Modern e-commerce platform with real-time inventory management, secure payment processing, and comprehensive admin dashboard.",
      tech: ["React.js", "Node.js", "MongoDB", "Stripe API", "Express.js"],
      liveUrl: "https://de-fabs.com/",
      githubUrl: "",
      image: "./projectImages/ecommerce.PNG",
    },
    {
      title: "Blockchain Voting System",
      description:
        "Secure and transparent voting system built on blockchain technology ensuring immutable records and democratic participation.",
      tech: ["Solidity", "React.js", "Blockchain", "Smart Contracts", "Web3"],
      liveUrl: "https://lotoz.vercel.app/voting",
      githubUrl: "",
      image: "./projectImages/voting.PNG",
    },
  ];

  return (
    <section
      id="projects"
      className="section-container radial-bg"
      style={{ background: "hsl(var(--section-bg))" }}
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title fade-in-up">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card fade-in-up stagger-${(index % 3) + 1}`}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary-glow/10 rounded-lg mb-6 flex items-center justify-center border border-primary/10">
                {/* <div className="text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Project Preview
                  </p>
                </div> */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-outline text-center inline-flex items-center justify-center gap-2 py-2"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                {project?.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-outline text-center inline-flex items-center justify-center gap-2 py-2"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
