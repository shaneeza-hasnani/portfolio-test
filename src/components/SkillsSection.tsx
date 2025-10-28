import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, BarChart3, Shield, Brain, Award } from "lucide-react";
const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const skills = [{
    id: "programming",
    title: "Programming & Data",
    subtitle: "R, Python, SQL, C++, Scala, SAS, SPSS",
    icon: Code2,
    color: "from-blue-200 to-cyan-200"
  }, {
    id: "machine-learning",
    title: "Machine Learning",
    subtitle: "Random Forest, Logistic Regression, Decision Trees, Anomaly Detection",
    icon: Brain,
    color: "from-purple-200 to-pink-200"
  }, {
    id: "visualization",
    title: "Visualization & BI",
    subtitle: "Tableau, Microsoft Power BI, Excel (Advanced)",
    icon: BarChart3,
    color: "from-green-200 to-emerald-200"
  }, {
    id: "fraud-detection",
    title: "Fraud Detection",
    subtitle: "Advanced anomaly detection and pattern recognition",
    icon: Shield,
    color: "from-rose-200 to-orange-200"
  }];
  const achievements = [{
    title: "Certified Fraud Examiner (CFE) - 2025",
    description: "Professional certification demonstrating expertise in fraud prevention, detection, and deterrence",
    url: "https://www.credly.com/badges/e18001cd-3825-47cf-8018-d0ff83f6be8f/public_url",
    label: "View my Badge"
  }, {
    title: "Dean's List Recognition - 2025",
    description: "Consistent academic excellence throughout undergraduate studies at CUNY John Jay College",
    url: "/Deans_List_JJAY.pdf",
    label: "Download my Certificate"
  }, {
    title: "ACFE Ritchie-Jennings Memorial Scholarship - 2024",
    description: "Prestigious scholarship recognizing excellence in fraud examination studies and commitment to the profession",
    url: "/ACFE_Scholarship_2024.pdf",
    label: "Download the Fraud Magazine Snippet"
  }];
  return <section id="skills" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in fraud detection and data science with hands-on experience in machine learning and financial
            forensics
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {skills.map((skill, index) => <Card key={skill.id} className="group relative overflow-hidden border bg-card hover:shadow-lg transition-all duration-300 animate-scale-in" style={{
          animationDelay: `${index * 0.1}s`
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

        {/* Awards & Recognition Section */}
        <div id="awards" className="animate-fade-in">
          <h2 className="text-center mb-8 text-2xl font-bold">
            Awards & <span className="text-primary">Recognition</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => <Card key={achievement.title} className="text-center hover:shadow-hover transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 animate-scale-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  <a href={achievement.url} target="_blank" rel="noopener noreferrer" {...achievement.url.startsWith("/") && {
                download: achievement.url === "/Deans_List_JJAY.pdf" ? "Shaneeza_Hasnani_Deans_List.pdf" : achievement.url === "/ACFE_Scholarship_2024.pdf" ? "Shaneeza_Hasnani_ACFE_Scholarship.pdf" : true
              }} className="inline-block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                    {achievement.label}
                  </a>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default SkillsSection;