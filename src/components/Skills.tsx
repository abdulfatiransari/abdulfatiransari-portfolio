const Skills = () => {
  const skillCategories = [
    {
      title: "Blockchain & Web3",
      skills: [
        "Solidity",
        "Smart Contracts",
        "DApp Development",
        "Web3.js",
        "Ethers.js",
        "EVM",
        "Blockchain Integration",
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL",
        "Database Design",
        "Firebase",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "Webpack",
        "Vite",
        "Figma",
        "Agile Development",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title fade-in-up">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 fade-in-up stagger-${
                categoryIndex + 1
              }`}
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-primary-glow rounded-full"></div>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-badge"
                    style={{
                      animationDelay: `${
                        categoryIndex * 0.1 + skillIndex * 0.05
                      }s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
