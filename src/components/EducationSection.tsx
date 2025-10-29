import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, ChevronDown, ChevronUp } from "lucide-react";

const EducationSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const education = [
    {
      period: "December 2026",
      title: "Master of Science in Business Analytics & AI",
      company: "American University, Kogod School of Business",
      location: "Washington, DC",
      concentration: "Concentration: Data Science",
      description: "Advanced graduate program focusing on the intersection of business analytics and artificial intelligence.",
      skills: [
        "Statistical Analysis & Business Intelligence",
        "Machine Learning & Predictive Modeling",
        "Database Design & AI Integration",
        "Data-Driven Decision Making",
        "Quantitative Analysis & Optimization"
      ],
    },
    {
      period: "May 2025",
      title: "Bachelor of Science in Fraud Examination and Financial Forensics",
      company: "CUNY John Jay College of Criminal Justice",
      location: "New York, NY",
      concentration: "Minor: Computer Science",
      description: "Specialized undergraduate program combining fraud detection expertise with technical computer science skills.",
      skills: [
        "Fraud Detection & Financial Forensics",
        "Data Analytics & Digital Forensics",
        "Database Management & Data Mining",
        "Python & Advanced Data Structures",
        "Computer Networking & Security"
      ],
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-primary">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in data science and fraud analytics
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative flex gap-6 group">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-medium group-hover:shadow-hover transition-all duration-300 relative z-10">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-6">
                    <Card 
                      className="cursor-pointer hover-lift transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 space-y-2">
                            <CardTitle className="text-xl font-bold">
                              {edu.title}
                            </CardTitle>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <div className="font-semibold">{edu.company}</div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold">{edu.period}</span>
                                <span>•</span>
                                <span className="font-semibold">{edu.location}</span>
                              </div>
                              <div className="text-primary font-medium">{edu.concentration}</div>
                            </div>
                          </div>
                          {expandedIndex === index ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                          {edu.description}
                        </p>
                      </CardHeader>
                      
                      {expandedIndex === index && (
                        <CardContent className="animate-fade-in pt-0">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm mb-3">Key Skills:</h4>
                            {edu.skills.map((skill, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>{skill}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
