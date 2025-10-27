import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code2, BarChart3, Shield, Brain, Cloud, Award, ChevronDown, ChevronRight } from "lucide-react";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      id: "programming",
      title: "Programming & Data",
      description: "R, Python, SQL, C++, Scala, SAS, SPSS",
      icon: Code2,
      level: 92,
      color: "from-blue-200 to-cyan-200",
      detailSkills: [
        { name: "Python", level: 95, libraries: "Pandas, NumPy, Scikit-learn" },
        { name: "R", level: 90, focus: "Statistical analysis" },
        { name: "SQL", level: 95, experience: "3+ years production use" },
        { name: "C++", level: 75, focus: "Algorithms and data structures" },
        { name: "Scala", level: 70, use: "Big data processing" },
        { name: "SAS", level: 75, focus: "Statistical analysis" },
        { name: "SPSS", level: 75, use: "Quantitative research" },
      ],
    },
    {
      id: "fraud-detection",
      title: "Fraud Detection",
      description: "Advanced anomaly detection and pattern recognition",
      icon: Shield,
      level: 95,
      color: "from-rose-200 to-orange-200",
      detailSkills: [
        { name: "Anomaly Detection", level: 95, experience: "3+ years" },
        { name: "Financial Forensics", level: 90, certification: "CFE 2025" },
        { name: "Risk Assessment", level: 90, impact: "$500K+ recovery" },
        { name: "Pattern Recognition", level: 95, scale: "20K+ records" },
        { name: "Compliance Monitoring", level: 85, focus: "AML/BSA" },
      ],
    },
    {
      id: "visualization",
      title: "Visualization & BI",
      description: "Tableau, Microsoft Power BI, Excel (Advanced)",
      icon: BarChart3,
      level: 95,
      color: "from-green-200 to-emerald-200",
      detailSkills: [
        { name: "Tableau", level: 90, experience: "Dashboard design & deployment" },
        { name: "Microsoft Power BI", level: 95, focus: "Automated reporting" },
        { name: "Excel (Advanced)", level: 95, features: "Pivot tables, macros, complex formulas" },
        { name: "Data Storytelling", level: 90, impact: "Executive presentations" },
        { name: "Dashboard Automation", level: 90, efficiency: "15% time reduction" },
      ],
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      description: "Random Forest, Logistic Regression, Decision Trees, Anomaly Detection, Predictive Analysis",
      icon: Brain,
      level: 93,
      color: "from-purple-200 to-pink-200",
      detailSkills: [
        { name: "Random Forest", level: 95, achievement: "99.96% accuracy achieved" },
        { name: "Logistic Regression", level: 92, experience: "Production deployment" },
        { name: "Decision Trees", level: 90, optimization: "Hyperparameter tuning" },
        { name: "Anomaly Detection", level: 95, scale: "200K+ transactions monthly" },
        { name: "Predictive Analysis", level: 90, impact: "25% accuracy improvement" },
      ],
    },
  ];

  const achievements = [
    {
      title: "Certified Fraud Examiner (CFE) - 2025",
      description: "Professional certification demonstrating expertise in fraud prevention, detection, and deterrence",
      url: "https://www.credly.com/badges/e18001cd-3825-47cf-8018-d0ff83f6be8f/public_url",
      label: "View my Badge",
    },
    {
      title: "Dean's List Recognition - 2025",
      description: "Consistent academic excellence throughout undergraduate studies at CUNY John Jay College",
      url: "/Deans_List_JJAY.pdf",
      label: "Download my Certificate",
    },
    {
      title: "ACFE Ritchie-Jennings Memorial Scholarship - 2024",
      description:
        "Prestigious scholarship recognizing excellence in fraud examination studies and commitment to the profession",
      url: "/ACFE_Scholarship_2024.pdf",
      label: "Download the Fraud Magazine Snippet",
    },
  ];

  const toggleSkillExpansion = (skillId: string) => {
    setExpandedSkill(expandedSkill === skillId ? null : skillId);
  };

  return (
    <section id="skills" className="py-12 bg-background">
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
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {skills.map((skill, index) => (
            <Card
              key={skill.id}
              className="group relative overflow-hidden border-0 bg-card hover:shadow-hover transition-all duration-300 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => toggleSkillExpansion(skill.id)}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <CardContent className="p-6">
                {/* Header with expand icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} transform transition-transform duration-300 ${hoveredSkill === skill.id ? "scale-110" : ""}`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{skill.title}</h3>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedSkill === skill.id ? (
                      <ChevronDown className="w-5 h-5 text-primary transition-transform duration-200" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                    )}
                  </div>
                </div>

                {/* Skill Level Bar */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-muted-foreground">Overall Proficiency</span>
                    <span className="text-xs font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{
                        width: skillsVisible ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedSkill === skill.id && (
                  <div className="space-y-3 pt-4 border-t border-border animate-fade-in">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Specific Skills & Experience</h4>
                    {skill.detailSkills.map((detailSkill, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{detailSkill.name}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {detailSkill.experience && `Experience: ${detailSkill.experience}`}
                          {detailSkill.projects && `Projects: ${detailSkill.projects}`}
                          {detailSkill.impact && `Impact: ${detailSkill.impact}`}
                          {detailSkill.certification && `Certification: ${detailSkill.certification}`}
                          {detailSkill.tools && `Tools: ${detailSkill.tools}`}
                          {detailSkill.platforms && `Platforms: ${detailSkill.platforms}`}
                          {detailSkill.libraries && `Libraries: ${detailSkill.libraries}`}
                          {detailSkill.databases && `Databases: ${detailSkill.databases}`}
                          {detailSkill.focus && `Focus: ${detailSkill.focus}`}
                          {detailSkill.use && `Use Case: ${detailSkill.use}`}
                          {detailSkill.automation && `Automation: ${detailSkill.automation}`}
                          {detailSkill.scale && `Scale: ${detailSkill.scale}`}
                        </div>
                        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-700 ease-out`}
                            style={{ width: `${detailSkill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards & Recognition Section */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">
            Awards & <span className="text-primary">Recognition</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className="text-center hover:shadow-hover transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  <a
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(achievement.url.startsWith("/") && {
                      download:
                        achievement.url === "/Deans_List_JJAY.pdf"
                          ? "Shaneeza_Hasnani_Deans_List.pdf"
                          : achievement.url === "/ACFE_Scholarship_2024.pdf"
                            ? "Shaneeza_Hasnani_ACFE_Scholarship.pdf"
                            : true,
                    })}
                    className="inline-block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    {achievement.label}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
