import { Code2, Zap, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="section-container radial-bg"
      style={{ background: "hsl(var(--section-bg))" }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title fade-in-up">About Me</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                I'm a passionate blockchain and full-stack developer with over 4
                years of experience creating innovative digital solutions. My
                journey began with traditional web development and evolved into
                the exciting world of decentralized applications and blockchain
                technology.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                I specialize in building robust decentralized applications
                (DApps) using Solidity and EVM-compatible chains, while also
                creating responsive, user-centric web applications with the MERN
                and Next.js stack. My expertise spans from smart contract
                development to modern frontend frameworks.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, I enjoy exploring new blockchain
                technologies, contributing to open-source projects, and staying
                updated with the latest trends in web3 development. I believe in
                creating solutions that are not just technically sound, but also
                accessible and meaningful to users.
              </p>
            </div>
          </div>

          <div className="fade-in-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, scalable, and well documented code
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Optimizing applications for maximum speed and efficiency
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Working effectively in agile teams and cross functional
                  environments
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Staying ahead with cutting-edge technologies and methodologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
