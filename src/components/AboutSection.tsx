import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Globe, Heart, Target, Users, ChevronDown, ChevronRight } from "lucide-react";
import TimelineExperience from "./TimelineExperience";
import InteractiveStory from "./InteractiveStory";
import InteractiveValues from "./InteractiveValues";

const AboutSection = () => {
  const [expandedEducation, setExpandedEducation] = useState<number | null>(0);

  const workExperience = [
    {
      period: "2021 - Present",
      title: "Fraud Data Analyst",
      company: "EduGuide Overseas Pvt. Ltd.",
      location: "Mumbai, India",
      description: "Lead fraud detection initiatives using advanced machine learning models to protect digital payment flows and enhance risk assessment accuracy.",
      achievements: [
        "Improved fraud detection accuracy by 25% through optimized ML pipelines",
        "Reduced suspicious applications by 20% annually with automated scoring systems",
        "Process 500+ datasets monthly using automated data pipelines",
        "Built real-time anomaly detection systems for payment protection"
      ],
      icon: Briefcase,
      type: "work"
    },
    {
      period: "2024",
      title: "Financial Crime Intern",
      company: "Guidehouse",
      location: "New York, NY",
      description: "Developed advanced anomaly detection algorithms for wire transfer monitoring, delivering technical solutions that were adopted by senior leadership.",
      achievements: [
        "Enhanced compliance monitoring capabilities by 30%",
        "Analyzed 20,000+ ACH/wire transfer records using advanced ML techniques",
        "Presented technical solutions to directors and senior management",
        "Implemented pattern recognition algorithms for suspicious activity detection"
      ],
      icon: Briefcase,
      type: "work"
    },
    {
      period: "2023",
      title: "Fraud Audit Intern",
      company: "NY State Attorney General",
      location: "Hauppauge, NY",
      description: "Conducted comprehensive data analysis for Medicaid fraud investigations, providing statistical evidence that supported successful prosecutions.",
      achievements: [
        "Identified $500K+ in recovery anomalies through statistical analysis",
        "Improved case resolution turnaround by 20% with streamlined workflows",
        "Supported multiple successful fraud prosecutions with data evidence",
        "Developed automated evidence review processes for investigators"
      ],
      icon: Briefcase,
      type: "work"
    }
  ];

  const education = [
    {
      period: "Aug 2025 - Dec 2026", 
      title: "MS Business Analytics & AI",
      company: "American University",
      location: "Washington, DC",
      description: "Advanced graduate program focusing on artificial intelligence applications in business analytics.",
      achievements: [
        "Core focus on AI and machine learning applications in business contexts",
        "Advanced coursework in predictive analytics and statistical modeling",
        "Research emphasis on financial crime detection methodologies",
        "Hands-on experience with cutting-edge AI tools and frameworks"
      ],
      icon: GraduationCap,
      type: "education"
    },
    {
      period: "Aug 2022 - May 2025",
      title: "BS Fraud Examination & Financial Forensics",
      company: "CUNY John Jay College",
      location: "New York, NY",
      description: "Graduated Cum Laude with Honors in Major, maintaining a 3.87 GPA while consistently earning Dean's List recognition.",
      achievements: [
        "3.87 GPA with consistent Dean's List recognition (2022-2025)",
        "Computer Science Minor with programming and data analysis focus",
        "Graduated Cum Laude with Honors in Major distinction",
        "Comprehensive training in fraud investigation and financial forensics"
      ],
      icon: GraduationCap,
      type: "education"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "I build models with meticulous attention to accuracy and reliability, because in fraud detection, precision protects both money and people."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Every solution I create addresses real business challenges, focusing on measurable outcomes that matter to organizations and their customers."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "I bridge technical complexity with business understanding, ensuring that advanced analytics translate into practical, actionable insights."
    },
    {
      icon: Globe,
      title: "Growth",
      description: "I stay current with emerging technologies and methodologies, continuously expanding my expertise to deliver cutting-edge solutions."
    }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Gujarati", level: "Fluent" }
  ];

  const ExperienceCard = ({ item, index, expanded, setExpanded, items }: {
    item: typeof workExperience[0] | typeof education[0];
    index: number;
    expanded: number | null;
    setExpanded: (index: number | null) => void;
    items: (typeof workExperience | typeof education);
  }) => (
    <Card className="border-l-4 border-l-primary hover-lift bg-card/50 cursor-pointer transition-all duration-300">
      <CardHeader className="pb-3" onClick={() => setExpanded(expanded === index ? null : index)}>
        <div className="flex items-start gap-4">
          <div className={`p-2 rounded-lg ${
            item.type === 'work' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-accent text-accent-foreground'
          }`}>
            <item.icon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 mb-1">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <Badge variant="outline" className="text-xs">
                  {item.period}
                </Badge>
              </div>
              {expanded === index ? <ChevronDown className="w-5 h-5 text-muted-foreground" /> : <ChevronRight className="w-5 h-5 text-muted-foreground" />}
            </div>
            <CardDescription className="font-medium">
              {item.company} • {item.location}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      {expanded === index && (
        <CardContent className="animate-fade-in">
          <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
          <ul className="space-y-2">
            {item.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );

  return (
    <section id="about" className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From student to specialist — transforming data into actionable fraud prevention solutions that protect businesses and drive results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Personal Story */}
          <InteractiveStory />

          {/* Professional Experience */}
          <TimelineExperience />

          {/* Education */}
          <div className="animate-slide-up">
            <h3 className="font-heading text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <ExperienceCard 
                  key={`edu-${index}`}
                  item={item}
                  index={index}
                  expanded={expandedEducation}
                  setExpanded={setExpandedEducation}
                  items={education}
                />
              ))}
            </div>
          </div>
        </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Values */}
            <InteractiveValues />

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;