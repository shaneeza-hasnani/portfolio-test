import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

const TimelineExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      period: "2021 - Present",
      title: "Fraud Data Analyst",
      company: "EduGuide Overseas Pvt. Ltd.",
      location: "Mumbai, India",
      description: "Leading fraud detection initiatives using advanced ML models to protect digital payment flows.",
      achievements: [
        "Improved fraud detection accuracy by 25% through optimized ML pipelines",
        "Reduced suspicious applications by 20% annually with automated scoring systems", 
        "Process 500+ datasets monthly using automated data pipelines",
        "Built real-time anomaly detection systems for payment protection"
      ]
    },
    {
      period: "2024",
      title: "Financial Crime Intern", 
      company: "Guidehouse",
      location: "New York, NY",
      description: "Developed advanced anomaly detection algorithms for wire transfer monitoring.",
      achievements: [
        "Enhanced compliance monitoring capabilities by 30%",
        "Analyzed 20,000+ ACH/wire transfer records using advanced ML techniques",
        "Presented technical solutions to directors and senior management", 
        "Implemented pattern recognition algorithms for suspicious activity detection"
      ]
    },
    {
      period: "2023",
      title: "Fraud Audit Intern",
      company: "NY State Attorney General", 
      location: "Hauppauge, NY",
      description: "Conducted comprehensive data analysis for Medicaid fraud investigations.",
      achievements: [
        "Identified $500K+ in recovery anomalies through statistical analysis",
        "Improved case resolution turnaround by 20% with streamlined workflows",
        "Supported multiple successful fraud prosecutions with data evidence",
        "Developed automated evidence review processes for investigators"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <h3 className="font-heading text-2xl font-bold mb-6">Professional Experience</h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30"></div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-6 group">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-medium group-hover:shadow-hover transition-all duration-300 relative z-10">
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-6">
                <Card 
                  className="cursor-pointer hover-lift transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-lg font-semibold">{exp.title}</CardTitle>
                          <Badge variant="secondary" className="text-xs px-2 py-1">
                            {exp.period}
                          </Badge>
                        </div>
                        <CardDescription className="font-medium text-base">
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                      {expandedIndex === index ? 
                        <ChevronUp className="w-5 h-5 text-muted-foreground" /> : 
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      }
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                      {exp.description}
                    </p>
                  </CardHeader>
                  
                  {expandedIndex === index && (
                    <CardContent className="animate-fade-in pt-0">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm mb-3">Key Achievements:</h4>
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
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
  );
};

export default TimelineExperience;