import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Indus University",
      period: "2018 - 2022",
      description:
        "Focused on software engineering, algorithms, and data structures with emphasis on web technologies and blockchain fundamentals.",
    },
  ];

  const certifications = [
    {
      name: "Certified Blockchain Developer",
      issuer: "Jawan Pakistan",
      date: "2021",
    },
    {
      name: "Full Stack Web Development",
      issuer: "",
      date: "2020",
    },
  ];

  return (
    <section
      id="education"
      className="section-container radial-bg"
      style={{ background: "hsl(var(--section-bg))" }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title fade-in-up">Education & Certifications</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="fade-in-left">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center gap-2 text-primary font-medium mb-2">
                    <GraduationCap size={16} />
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground mb-3">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="fade-in-right">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h4 className="font-semibold text-foreground mb-2">
                    {cert.name}
                  </h4>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-medium">
                      {cert.issuer}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Calendar size={12} />
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
