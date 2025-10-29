import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, BarChart3, Shield, Brain } from "lucide-react";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      id: "programming",
      title: "Programming & Data",
      subtitle: "R, Python, SQL, C++, Scala, SAS, SPSS",
      icon: Code2,
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
      borderGradient: "from-blue-500 to-cyan-500",
      iconGradient: "from-blue-500 to-cyan-600"
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      subtitle: "Random Forest, Logistic Regression, Decision Trees, Anomaly Detection",
      icon: Brain,
      gradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20",
      borderGradient: "from-purple-500 to-pink-500",
      iconGradient: "from-purple-500 to-pink-600"
    },
    {
      id: "visualization",
      title: "Visualization & BI",
      subtitle: "Tableau, Microsoft Power BI, Excel (Advanced)",
      icon: BarChart3,
      gradient: "from-green-500/20 via-emerald-500/20 to-green-600/20",
      borderGradient: "from-green-500 to-emerald-500",
      iconGradient: "from-green-500 to-emerald-600"
    },
    {
      id: "fraud-detection",
      title: "Fraud Detection",
      subtitle: "Advanced anomaly detection and pattern recognition",
      icon: Shield,
      gradient: "from-rose-500/20 via-orange-500/20 to-rose-600/20",
      borderGradient: "from-rose-500 to-orange-500",
      iconGradient: "from-rose-500 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Specialized in fraud detection and data science with hands-on experience in machine learning and financial
            forensics
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={skill.id}
              className="group relative overflow-hidden border-2 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 animate-scale-in"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Animated gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              {/* Gradient border effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
              />

              <CardContent className="relative p-8">
                <div className="flex items-start gap-6">
                  {/* Icon with gradient background */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.iconGradient} opacity-20 group-hover:opacity-30 rounded-2xl blur-md transition-all duration-500 ${
                        hoveredSkill === skill.id ? "scale-110" : ""
                      }`}
                    />
                    <div
                      className={`relative p-5 rounded-2xl bg-gradient-to-br ${skill.iconGradient} transform transition-all duration-500 ${
                        hoveredSkill === skill.id ? "scale-110 rotate-3" : ""
                      }`}
                    >
                      <skill.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {skill.subtitle}
                    </p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div
                  className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${skill.iconGradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-all duration-700`}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
