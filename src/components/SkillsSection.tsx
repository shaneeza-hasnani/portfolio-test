import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, BarChart3, Shield, Brain } from "lucide-react";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const skills = [{
    id: "programming",
    title: "Programming & Data",
    subtitle: "R, Python, SQL, C++, Scala, SAS, SPSS",
    icon: Code2,
    color: "from-blue-200/70 to-cyan-200/70"
  }, {
    id: "machine-learning",
    title: "Machine Learning",
    subtitle: "Random Forest, Logistic Regression, Decision Trees, Anomaly Detection",
    icon: Brain,
    color: "from-purple-200/70 to-pink-200/70"
  }, {
    id: "visualization",
    title: "Visualization & BI",
    subtitle: "Tableau, Microsoft Power BI, Excel (Advanced)",
    icon: BarChart3,
    color: "from-emerald-200/70 to-teal-200/70"
  }, {
    id: "fraud-detection",
    title: "Fraud Detection",
    subtitle: "Advanced anomaly detection and pattern recognition",
    icon: Shield,
    color: "from-rose-200/70 to-orange-200/70"
  }];
  return <section ref={sectionRef} id="skills" className="py-16 md:py-24 bg-background section-fade-top section-fade-bottom">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base font-semibold">
            Specialized in fraud detection and data science with hands-on experience in machine learning and financial
            forensics
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => <Card key={skill.id} className="group relative overflow-hidden border bg-card hover:shadow-lg transition-all duration-300 scroll-fade-in" style={{
          transitionDelay: `${index * 0.1}s`
        }} onMouseEnter={() => setHoveredSkill(skill.id)} onMouseLeave={() => setHoveredSkill(null)}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} transform transition-transform duration-300 flex-shrink-0 ${hoveredSkill === skill.id ? "scale-110" : ""}`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.subtitle}</p>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default SkillsSection;