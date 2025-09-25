import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ChevronDown, ChevronRight } from "lucide-react";

const Education = () => {
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null);

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

  const ExperienceCard = ({ item, index, expanded, setExpanded }: {
    item: typeof education[0];
    index: number;
    expanded: number | null;
    setExpanded: (index: number | null) => void;
  }) => (
    <Card className="border-l-4 border-l-primary hover-lift bg-card/50 cursor-pointer transition-all duration-300">
      <CardHeader className="pb-3" onClick={() => setExpanded(expanded === index ? null : index)}>
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-accent text-accent-foreground">
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
            <p className="text-muted-foreground text-sm leading-relaxed mt-2">{item.description}</p>
          </div>
        </div>
      </CardHeader>
      
      {expanded === index && (
        <CardContent className="animate-fade-in">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm mb-3">Key Achievements:</h4>
            {item.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );

  return (
    <section id="education" className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in fraud examination, financial forensics, and advanced analytics driving expertise in data-driven crime prevention.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {education.map((item, index) => (
            <ExperienceCard 
              key={`edu-${index}`}
              item={item}
              index={index}
              expanded={expandedEducation}
              setExpanded={setExpandedEducation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;