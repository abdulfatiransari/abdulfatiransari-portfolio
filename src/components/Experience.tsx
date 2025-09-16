import { Calendar, MapPin, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Experience = () => {
  const experiences = [
    {
      title: "Blockchain & Full Stack Developer",
      company: "TheatriaTechnologies.com",
      link: "https://theatriatechnologies.com",
      period: "Aug 2024 - Present",
      location: "Healthcare Technology",
      achievements: [
        "Developed responsive web applications using React.js and Next.js, ensuring cross-device compatibility",
        "Integrated REST APIs for efficient communication between front-end and back-end systems",
        "Collaborated with UX/UI teams to convert wireframes into high-fidelity, functional interfaces",
        "Built decentralized applications (DApps) with blockchain technology to enhance user engagement",
        "Improved application performance by optimizing resources and applying responsive design best practices",
      ],
      current: true,
    },
    {
      title: "Blockchain & Frontend Developer",
      company: "Pixpel.io",
      link: "https://pixpel.io",
      period: "Jan 2024 - Jan 2025",
      location: "Blockchain Solutions",
      achievements: [
        "Developed robust decentralized applications (DApps) utilizing blockchain technology",
        "Implemented REST API integrations for efficient data exchange between applications",
        "Managed source code with Git, maintaining collaborative development practices",
        "Built responsive web applications using React.js and Next.js with interactive interfaces",
      ],
      current: false,
    },
    {
      title: "Blockchain & Frontend Developer",
      company: "Cubicus.io",
      link: "",
      period: "Dec 2021 - Oct 2024",
      location: "Digital Solutions & Blockchain",
      achievements: [
        "Worked closely with UX/UI teams ensuring design and functional cohesion",
        "Developed and maintained DApps, integrating Solidity-based smart contracts",
        "Executed REST APIs to enable seamless front-end and back-end communication",
        "Designed and optimized databases with Firebase for efficient data management",
        "Optimized web applications for maximum speed and scalability",
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="section-container">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title fade-in-up">Professional Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary-glow"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative pl-20 fade-in-left stagger-${index + 1}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <Link
                        to={exp.link}
                        target="_blank"
                        className="flex items-center gap-2 text-primary font-medium mb-2"
                      >
                        <Building2 size={16} />
                        {exp.company}
                      </Link>
                    </div>

                    {exp.current && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
