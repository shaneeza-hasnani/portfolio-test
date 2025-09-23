import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  BarChart3, 
  Shield, 
  Brain, 
  Cloud
} from "lucide-react";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      id: "fraud-detection",
      title: "Fraud Detection",
      description: "Advanced anomaly detection and pattern recognition",
      icon: Shield,
      level: 95,
      color: "from-red-500 to-orange-500"
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      description: "Predictive modeling and algorithm development",
      icon: Brain,
      level: 90,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "data-analysis",
      title: "Data Analysis",
      description: "Statistical analysis and insights extraction",
      icon: BarChart3,
      level: 95,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "programming",
      title: "Programming",
      description: "Python, SQL, R for data science applications",
      icon: Code2,
      level: 90,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "cloud-deployment",
      title: "Cloud & MLOps",
      description: "AWS deployment and model operations",
      icon: Cloud,
      level: 75,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in fraud detection and data science with hands-on experience in machine learning and financial forensics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={skill.id}
              className="group relative overflow-hidden border-0 bg-card hover:shadow-hover transition-all duration-300 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <CardContent className="p-6">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} transform transition-transform duration-300 ${hoveredSkill === skill.id ? 'scale-110' : ''}`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>

                {/* Skill Level Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-muted-foreground">Proficiency</span>
                    <span className="text-xs font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: hoveredSkill === skill.id ? `${skill.level}%` : '0%'
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple Achievement Highlight */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Certified Fraud Examiner (CFE) - 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;