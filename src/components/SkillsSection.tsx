import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  BarChart3, 
  Shield, 
  Brain, 
  Cloud, 
  FileSpreadsheet,
  TrendingUp,
  Zap,
  Award,
  ChevronRight,
  Star
} from "lucide-react";

const SkillsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const skillCategories = [
    {
      title: "Programming & Data",
      description: "Core technical foundation for data manipulation and analysis",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      category: "technical",
      skills: [
        { name: "Python", level: "Expert", years: "3+", proficiency: 95 },
        { name: "SQL", level: "Expert", years: "3+", proficiency: 95 },
        { name: "R", level: "Advanced", years: "2+", proficiency: 85 },
        { name: "C++", level: "Intermediate", years: "1+", proficiency: 70 },
        { name: "Scala", level: "Intermediate", years: "1+", proficiency: 65 }
      ]
    },
    {
      title: "Machine Learning",
      description: "Advanced algorithms and predictive modeling expertise",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      category: "ml",
      skills: [
        { name: "Random Forest", level: "Expert", projects: "5+", proficiency: 95 },
        { name: "Logistic Regression", level: "Expert", projects: "4+", proficiency: 90 },
        { name: "Decision Trees", level: "Expert", projects: "4+", proficiency: 90 },
        { name: "Anomaly Detection", level: "Expert", projects: "3+", proficiency: 95 },
        { name: "Predictive Analysis", level: "Advanced", projects: "3+", proficiency: 85 },
        { name: "Feature Engineering", level: "Advanced", projects: "5+", proficiency: 90 }
      ]
    },
    {
      title: "Fraud & Risk Analytics",
      description: "Specialized expertise in fraud detection and financial forensics",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      category: "domain",
      skills: [
        { name: "Fraud Detection", level: "Expert", impact: "25% accuracy improvement", proficiency: 95 },
        { name: "Risk Assessment", level: "Expert", impact: "$500K+ recovery identified", proficiency: 90 },
        { name: "Financial Forensics", level: "Advanced", certification: "CFE 2025", proficiency: 85 },
        { name: "Compliance Monitoring", level: "Advanced", impact: "30% enhancement", proficiency: 80 },
        { name: "Pattern Recognition", level: "Expert", scale: "20K+ records", proficiency: 90 }
      ]
    },
    {
      title: "Visualization & BI",
      description: "Data storytelling and business intelligence tools",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      category: "visualization",
      skills: [
        { name: "Tableau", level: "Advanced", experience: "Dashboard creation", proficiency: 85 },
        { name: "Power BI", level: "Expert", impact: "15% efficiency gain", proficiency: 90 },
        { name: "Excel (Advanced)", level: "Expert", experience: "Complex modeling", proficiency: 95 },
        { name: "Statistical Visualization", level: "Advanced", tools: "Multiple platforms", proficiency: 85 }
      ]
    },
    {
      title: "Cloud & Deployment",
      description: "Modern deployment and cloud technologies",
      icon: Cloud,
      color: "from-indigo-500 to-blue-500",
      category: "cloud",
      skills: [
        { name: "AWS", level: "Intermediate", focus: "Data services", proficiency: 70 },
        { name: "Docker", level: "Intermediate", use: "Model deployment", proficiency: 65 },
        { name: "Git/GitHub", level: "Advanced", experience: "Version control", proficiency: 85 },
        { name: "MLOps", level: "Intermediate", focus: "Pipeline automation", proficiency: 70 }
      ]
    },
    {
      title: "Domain Knowledge",
      description: "Industry expertise and certifications",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      category: "domain",
      skills: [
        { name: "Certified Fraud Examiner (CFE)", level: "Certified", year: "2025", proficiency: 100 },
        { name: "Financial Crime Investigation", level: "Expert", experience: "Government work", proficiency: 90 },
        { name: "Healthcare Fraud", level: "Advanced", impact: "$500K+ identified", proficiency: 85 },
        { name: "AML/BSA Compliance", level: "Advanced", focus: "Wire transfers", proficiency: 80 },
        { name: "Data Privacy & Ethics", level: "Advanced", focus: "GDPR/CCPA", proficiency: 85 }
      ]
    }
  ];

  const achievements = [
    {
      title: "ACFE Ritchie-Jennings Memorial Scholarship",
      year: "2024",
      description: "Prestigious scholarship recognizing excellence in fraud examination studies and commitment to the profession"
    },
    {
      title: "Dean's List Recognition",
      year: "2022-2025",
      description: "Consistent academic excellence with 3.87 GPA throughout undergraduate studies"
    },
    {
      title: "Cum Laude, Honors in Major",
      year: "2025",
      description: "Graduated with highest honors in Fraud Examination and Financial Forensics"
    },
    {
      title: "Certified Fraud Examiner (CFE)",
      year: "2025",
      description: "Professional certification demonstrating expertise in fraud prevention, detection, and deterrence"
    }
  ];

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "technical", label: "Technical" },
    { id: "ml", label: "Machine Learning" },
    { id: "domain", label: "Domain Expertise" },
    { id: "visualization", label: "Visualization" },
    { id: "cloud", label: "Cloud & Ops" }
  ];

  const filteredCategories = selectedCategory === "all" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for turning complex data challenges into actionable business solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="project-card animate-slide-up border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {category.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <Badge 
                            variant="secondary" 
                            className="text-xs px-2 py-0"
                          >
                            {skill.level}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {skill.years && `${skill.years} years`}
                          {skill.projects && `${skill.projects} projects`}
                          {skill.impact && skill.impact}
                          {skill.certification && skill.certification}
                          {skill.experience && skill.experience}
                          {skill.scale && skill.scale}
                          {skill.focus && skill.focus}
                          {skill.use && skill.use}
                          {skill.tools && skill.tools}
                          {skill.year && skill.year}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">
            Awards & <span className="text-primary">Recognition</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="text-center hover-lift border-0 bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 mx-auto bg-gradient-accent rounded-full flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {achievement.year}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
          {[
            { label: "Years Experience", value: "3+", icon: TrendingUp },
            { label: "Projects Completed", value: "15+", icon: FileSpreadsheet },
            { label: "Models Deployed", value: "8+", icon: Zap },
            { label: "Fraud Cases Analyzed", value: "500+", icon: Shield }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-4 rounded-lg bg-muted/50 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;