import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Globe, Heart, Target, Users } from "lucide-react";

const AboutSection = () => {
  const journeySteps = [
    {
      period: "2021 - Present",
      title: "Fraud Data Analyst",
      company: "EduGuide Overseas Pvt. Ltd.",
      location: "Mumbai, India",
      description: "Leading fraud detection initiatives, building ML models that protect digital payment flows and improve risk assessment accuracy.",
      achievements: [
        "Improved fraud detection accuracy by 25%",
        "Reduced suspicious applications by 20% annually",
        "Process 500+ datasets monthly with automated pipelines"
      ],
      icon: Briefcase,
      type: "work"
    },
    {
      period: "2024",
      title: "Financial Crime Intern",
      company: "Guidehouse",
      location: "New York, NY",
      description: "Developed advanced anomaly detection for wire transfers, delivering solutions adopted by senior leadership.",
      achievements: [
        "Enhanced compliance monitoring by 30%",
        "Analyzed 20,000+ ACH/wire transfer records",
        "Presented technical solutions to directors"
      ],
      icon: Briefcase,
      type: "work"
    },
    {
      period: "2023",
      title: "Fraud Audit Intern",
      company: "NY State Attorney General",
      location: "Hauppauge, NY",
      description: "Conducted data analysis for Medicaid fraud investigations, supporting prosecutions with statistical evidence.",
      achievements: [
        "Identified $500K+ in recovery anomalies",
        "Improved case resolution turnaround by 20%",
        "Supported multiple successful prosecutions"
      ],
      icon: Briefcase,
      type: "work"
    },
    {
      period: "2022 - Present", 
      title: "MS Business Analytics & AI",
      company: "American University",
      location: "Washington, DC",
      description: "Pursuing advanced degree with concentration in Data Science, expected graduation December 2026.",
      achievements: [
        "Focus on AI and machine learning applications",
        "Advanced coursework in predictive analytics",
        "Research in financial crime detection"
      ],
      icon: GraduationCap,
      type: "education"
    },
    {
      period: "2021 - 2025",
      title: "BS Fraud Examination & Financial Forensics",
      company: "CUNY John Jay College",
      location: "New York, NY",
      description: "Graduated Cum Laude with Honors in Major, maintaining 3.87 GPA while on Dean's List.",
      achievements: [
        "3.87 GPA, Dean's List 2022-2025",
        "Computer Science Minor",
        "Cum Laude, Honors in Major"
      ],
      icon: GraduationCap,
      type: "education"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every model I build is designed for accuracy and reliability, because in fraud detection, precision saves money and protects people."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "I'm driven by the real-world impact of my work - protecting businesses from fraud and helping organizations make better decisions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "The best solutions come from understanding business needs. I bridge the gap between complex analytics and practical applications."
    },
    {
      icon: Globe,
      title: "Growth",
      description: "Technology evolves rapidly. I stay current with the latest ML techniques and fraud prevention strategies to deliver cutting-edge solutions."
    }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Gujarati", level: "Fluent" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From student to specialist - my journey in transforming data into actionable fraud prevention solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Personal Story */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-0 bg-gradient-card shadow-medium animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">My Story</CardTitle>
                <CardDescription>The journey from fraud examination student to data science specialist</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  My passion for fraud detection began during my undergraduate studies in Fraud Examination and Financial Forensics. 
                  What started as academic curiosity quickly became a calling when I realized how machine learning could revolutionize 
                  the way we detect and prevent financial crimes.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Today, as a <strong>Certified Fraud Examiner (CFE)</strong> and data scientist, I combine domain expertise in 
                  fraud examination with cutting-edge machine learning techniques. My work spans across various industries - from 
                  protecting educational service payments to analyzing healthcare fraud for government investigations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  What drives me is the tangible impact of my work: every model I build has the potential to save organizations 
                  thousands of dollars and protect honest people from becoming victims of fraud. I believe that the best fraud 
                  detection systems are not just technically sophisticated, but also practical and interpretable for the teams 
                  that use them.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  When I'm not analyzing data or building models, I'm staying current with the latest developments in AI and 
                  machine learning, contributing to the fraud examination community, and mentoring other students interested 
                  in this fascinating intersection of technology and financial crime prevention.
                </p>
              </CardContent>
            </Card>

            {/* Professional Journey */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-6">Professional Journey</h3>
              <div className="space-y-6">
                {journeySteps.map((step, index) => (
                  <Card 
                    key={`${step.title}-${step.period}`}
                    className="border-l-4 border-l-primary hover-lift bg-card/50"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${
                          step.type === 'work' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-accent text-accent-foreground'
                        }`}>
                          <step.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-lg">{step.title}</CardTitle>
                            <Badge variant="outline" className="text-xs">
                              {step.period}
                            </Badge>
                          </div>
                          <CardDescription className="font-medium">
                            {step.company} • {step.location}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{step.description}</p>
                      <ul className="space-y-1">
                        {step.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Values */}
            <Card className="border-0 bg-gradient-card shadow-medium animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl">What Drives Me</CardTitle>
                <CardDescription>The principles that guide my work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <value.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{value.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="border-0 bg-gradient-card shadow-soft animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between">
                      <span className="font-medium">{lang.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="border-0 bg-gradient-card shadow-soft animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Based in</span>
                  <span className="font-medium">Washington, DC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Certifications</span>
                  <span className="font-medium">CFE (2025)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Scholarship</span>
                  <span className="font-medium">ACFE Ritchie-Jennings</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Academic Honor</span>
                  <span className="font-medium">Dean's List</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;