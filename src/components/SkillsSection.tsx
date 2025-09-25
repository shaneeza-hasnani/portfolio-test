import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  BarChart3, 
  Shield, 
  Brain, 
  Cloud,
  Award,
  ChevronDown,
  ChevronRight
} from "lucide-react";

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
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      id: "programming",
      title: "Python/R/SQL",
      description: "Core programming languages for data science",
      icon: Code2,
      level: 90,
      color: "from-blue-200 to-cyan-200",
      detailSkills: [
        { name: "Python", level: 95, libraries: "Pandas, NumPy, Scikit-learn" },
        { name: "SQL", level: 95, databases: "PostgreSQL, MySQL" },
        { name: "R", level: 85, focus: "Statistical analysis" },
        { name: "Git/GitHub", level: 85, experience: "Version control" },
        { name: "Data Processing", level: 90, scale: "Large datasets" }
      ]
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
        { name: "Compliance Monitoring", level: 85, focus: "AML/BSA" }
      ]
    },
    {
      id: "data-analysis",
      title: "Data Analysis",
      description: "Statistical analysis and insights extraction",
      icon: BarChart3,
      level: 95,
      color: "from-green-200 to-emerald-200",
      detailSkills: [
        { name: "Statistical Analysis", level: 95, tools: "Python/R" },
        { name: "Data Visualization", level: 90, platforms: "Tableau/Power BI" },
        { name: "SQL Querying", level: 95, experience: "3+ years" },
        { name: "Excel Advanced", level: 95, focus: "Complex modeling" },
        { name: "Report Generation", level: 90, automation: "Yes" }
      ]
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      description: "Predictive modeling and algorithm development",
      icon: Brain,
      level: 90,
      color: "from-purple-200 to-pink-200",
      detailSkills: [
        { name: "Random Forest", level: 95, projects: "5+" },
        { name: "Logistic Regression", level: 90, projects: "4+" },
        { name: "Decision Trees", level: 90, projects: "4+" },
        { name: "Feature Engineering", level: 90, experience: "Advanced" },
        { name: "Model Validation", level: 85, focus: "Cross-validation" }
      ]
    },
    {
      id: "cloud-deployment",
      title: "Cloud & MLOps",
      description: "AWS deployment and model operations",
      icon: Cloud,
      level: 75,
      color: "from-indigo-200 to-blue-200",
      detailSkills: [
        { name: "AWS Services", level: 70, focus: "S3, EC2, Lambda" },
        { name: "Docker", level: 65, use: "Model containerization" },
        { name: "MLOps Pipeline", level: 70, automation: "CI/CD" },
        { name: "Model Deployment", level: 75, platforms: "Cloud-based" },
        { name: "Monitoring", level: 65, tools: "Performance tracking" }
      ]
    }
  ];

  const achievements = [
    {
      title: "Certified Fraud Examiner (CFE)",
      year: "2025",
      description: "Professional certification demonstrating expertise in fraud prevention, detection, and deterrence",
      link: "#" // CFE certificate link placeholder
    },
    {
      title: "ACFE Ritchie-Jennings Memorial Scholarship",
      year: "2024", 
      description: "Prestigious scholarship recognizing excellence in fraud examination studies and commitment to the profession",
      link: "#" // Scholarship received page PDF placeholder
    },
    {
      title: "Cum Laude, Honors in Major", 
      year: "2025",
      description: "Graduated with highest honors in Fraud Examination and Financial Forensics",
      link: "#" // Diploma PDF placeholder
    },
    {
      title: "Dean's List Recognition",
      year: "2022-2025",
      description: "Consistent academic excellence with 3.87 GPA throughout undergraduate studies",
      link: "#" // Transcript placeholder
    }
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
            Specialized in fraud detection and data science with hands-on experience in machine learning and financial forensics
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
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} transform transition-transform duration-300 ${hoveredSkill === skill.id ? 'scale-110' : ''}`}>
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
                        width: skillsVisible ? `${skill.level}%` : '0%'
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
                          <Badge variant="secondary" className="text-xs">
                            {detailSkill.level}%
                          </Badge>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="text-center hover:shadow-hover transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 animate-scale-in cursor-pointer hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(achievement.link, '_blank')}
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{achievement.title}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {achievement.year}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
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