import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
const TimelineExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const experiences = [{
    period: "June 2021 - Present",
    title: "Fraud Data Analyst",
    company: "EduGuide Overseas Pvt. Ltd.",
    location: "Mumbai, India",
    description: "Engineer anomaly detection models and analyze payment datasets to enhance fraud detection accuracy and reduce suspicious applications.",
    achievements: ["Engineer anomaly detection models in Python (Random Forest, Logistic Regression)", "Classify an average of 200k+ high-risk transactions monthly using a self-developed model", "Enhance fraud detection accuracy by 25%", "Analyze 500+ payment datasets monthly using SQL and Python", "Reduce suspicious student applications by 20% annually via automated scoring pipelines", "Design and automate Power BI dashboards, streamlining review time by 15%", "Deliver prescriptive, data-driven recommendations to admissions, compliance, and IT teams"]
  }, {
    period: "June 2024 - August 2024",
    title: "Financial Crime & Investigative Services Intern",
    company: "Guidehouse, Inc.",
    location: "New York, NY",
    description: "Developed and optimized fraud detection workflows for ACH/wire transfers using ML and feature engineering.",
    achievements: ["Developed and optimized fraud detection workflows for 20,000+ ACH/wire transfers", "Applied feature engineering and SQL-based data preparation", "Detected 50+ high-risk transaction patterns", "Presented capstone on wire transfer anomaly detection", "Integrated ML and risk scoring to strengthen compliance monitoring by 30%", "Influenced directors through technical presentations and solution adoption"]
  }, {
    period: "June 2023 - August 2023",
    title: "Fraud Audit Intern",
    company: "State of New York, Office of the Attorney General, Medicaid Fraud Control Unit",
    location: "Hauppauge, NY",
    description: "Conducted data analysis on provider billing and claims transactions, collaborating across multiple Medicaid fraud investigations.",
    achievements: ["Conducted data analysis on provider billing and claims transactions", "Collaborated across four Medicaid fraud investigations", "Identified $500K+ in recovery anomalies using SQL and statistical validation", "Consulted with investigators to streamline evidence review", "Leveraged prescriptive analytics to accelerate fraud case resolution by 20%"]
  }];
  return <div className="space-y-8">
      <h3 className="font-heading text-2xl font-bold mb-6">Professional Experience</h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30"></div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => <div key={index} className="relative flex gap-6 group">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-medium group-hover:shadow-hover transition-all duration-300 relative z-10">
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-6">
                <Card className="cursor-pointer hover-lift transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-2">
                        <CardTitle className="text-xl font-bold">
                          {exp.title} @ {exp.company}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-medium">{exp.period}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      {expandedIndex === index ? <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                      {exp.description}
                    </p>
                  </CardHeader>
                  
                  {expandedIndex === index && <CardContent className="animate-fade-in pt-0">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm mb-3">Key Achievements:</h4>
                        {exp.achievements.map((achievement, idx) => <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>)}
                      </div>
                    </CardContent>}
                </Card>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
export default TimelineExperience;