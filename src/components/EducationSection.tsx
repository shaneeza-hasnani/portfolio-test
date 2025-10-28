import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ChevronDown, ChevronRight } from "lucide-react";

const EducationSection = () => {
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null);

  const education = [
    {
      period: "December 2026",
      title: "Master of Science in Business Analytics & AI",
      company: "American University, Kogod School of Business",
      location: "Washington, DC",
      description: "Concentration in Data Science with coursework in Applied Managerial Statistics, Business Intelligence, Database and AI, Predictive Analytics and Machine Learning.",
      achievements: [
        "Concentration: Data Science",
        "Core coursework: Applied Managerial Statistics, Business Insights and Analytics",
        "Advanced topics: Predictive Analytics and Machine Learning, Database and AI",
        "Business focus: Managing Digital Organization, Quantitative Methods and Data Analysis"
      ],
      icon: GraduationCap,
    },
    {
      period: "May 2025",
      title: "Bachelor of Science in Fraud Examination and Financial Forensics",
      company: "CUNY John Jay College of Criminal Justice",
      location: "New York, NY",
      description: "Graduated Cum Laude with Honors in Major, maintaining a 3.87 GPA while earning Dean's List recognition throughout undergraduate studies.",
      achievements: [
        "Minor: Computer Science",
        "GPA: 3.87 | Dean's List 2022-2025 | Cum Laude, Honors in Major",
        "Key courses: Data Analytics for Fraud Examination, Digital Forensics Fraud, Databases and Data Mining",
        "Programming: Introduction to Computer Programming, Advanced Data Structures, Computer Networking"
      ],
      icon: GraduationCap,
    }
  ];

  const ExperienceCard = ({
    item,
    index,
    expanded,
    setExpanded,
  }: {
    item: typeof education[0];
    index: number;
    expanded: number | null;
    setExpanded: (index: number | null) => void;
  }) => (
    <Card className="border-l-4 border-l-accent hover-lift bg-card/50 cursor-pointer transition-all duration-300">
      <CardHeader className="pb-3" onClick={() => setExpanded(expanded === index ? null : index)}>
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-accent text-accent-foreground">
            <item.icon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 mb-1">
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs bg-transparent border-0 whitespace-nowrap">
                  {item.period}
                </Badge>
                {expanded === index ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </div>
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
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-primary">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in data science and fraud analytics
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

export default EducationSection;
