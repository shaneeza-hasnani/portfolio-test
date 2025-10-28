import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Globe, Heart, Target, Users, ChevronDown, ChevronRight } from "lucide-react";
import TimelineExperience from "./TimelineExperience";
import InteractiveValues from "./InteractiveValues";
const AboutSection = () => {
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null);
  const workExperience = [{
    period: "June 2021 - Present",
    title: "Fraud Data Analyst",
    company: "EduGuide Overseas Pvt. Ltd.",
    location: "Mumbai, India",
    description: "Engineer anomaly detection models and analyze payment datasets to enhance fraud detection accuracy and reduce suspicious applications.",
    achievements: ["Engineer anomaly detection models in Python (Random Forest, Logistic Regression)", "Classify an average of 200k+ high-risk transactions monthly using self-developed model", "Enhance fraud detection accuracy by 25%", "Analyze 500+ payment datasets monthly using SQL and Python", "Reduce suspicious student applications by 20% annually via automated scoring pipelines", "Design and automate Power BI dashboards, streamlining review time by 15%", "Deliver prescriptive, data-driven recommendations to admissions, compliance, and IT teams"],
    icon: Briefcase,
    type: "work"
  }, {
    period: "June 2024 - August 2024",
    title: "Financial Crime & Investigative Services Intern",
    company: "Guidehouse, Inc.",
    location: "New York, NY",
    description: "Developed and optimized fraud detection workflows for ACH/wire transfers using ML and feature engineering.",
    achievements: ["Developed and optimized fraud detection workflows for 20,000+ ACH/wire transfers", "Applied feature engineering and SQL-based data preparation", "Detected 50+ high-risk transaction patterns", "Presented capstone on wire transfer anomaly detection", "Integrated ML and risk scoring to strengthen compliance monitoring by 30%", "Influenced directors through technical presentations and solution adoption"],
    icon: Briefcase,
    type: "work"
  }, {
    period: "June 2023 - August 2023",
    title: "Fraud Audit Intern",
    company: "State of New York, Office of the Attorney General, Medicaid Fraud Control Unit",
    location: "Hauppauge, NY",
    description: "Conducted data analysis on provider billing and claims transactions, collaborating across multiple Medicaid fraud investigations.",
    achievements: ["Conducted data analysis on provider billing and claims transactions", "Collaborated across four Medicaid fraud investigations", "Identified $500K+ in recovery anomalies using SQL and statistical validation", "Consulted with investigators to streamline evidence review", "Leveraged prescriptive analytics to accelerate fraud case resolution by 20%"],
    icon: Briefcase,
    type: "work"
  }];
  const education = [{
    period: "December 2026",
    title: "Master of Science in Business Analytics & AI",
    company: "American University, Kogod School of Business",
    location: "Washington, DC",
    description: "Concentration in Data Science with coursework in Applied Managerial Statistics, Business Intelligence, Database and AI, Predictive Analytics and Machine Learning.",
    achievements: ["Concentration: Data Science", "Core coursework: Applied Managerial Statistics, Business Insights and Analytics", "Advanced topics: Predictive Analytics and Machine Learning, Database and AI", "Business focus: Managing Digital Organization, Quantitative Methods and Data Analysis"],
    icon: GraduationCap,
    type: "education"
  }, {
    period: "May 2025",
    title: "Bachelor of Science in Fraud Examination and Financial Forensics",
    company: "CUNY John Jay College of Criminal Justice",
    location: "New York, NY",
    description: "Graduated Cum Laude with Honors in Major, maintaining a 3.87 GPA while earning Dean's List recognition throughout undergraduate studies.",
    achievements: ["Minor: Computer Science", "GPA: 3.87 | Dean's List 2022-2025 | Cum Laude, Honors in Major", "Key courses: Data Analytics for Fraud Examination, Digital Forensics Fraud, Databases and Data Mining", "Programming: Introduction to Computer Programming, Advanced Data Structures, Computer Networking"],
    icon: GraduationCap,
    type: "education"
  }];
  const values = [{
    icon: Target,
    title: "Precision",
    description: "I build models with meticulous attention to accuracy and reliability, because in fraud detection, precision protects both money and people."
  }, {
    icon: Heart,
    title: "Impact",
    description: "Every solution I create addresses real business challenges, focusing on measurable outcomes that matter to organizations and their customers."
  }, {
    icon: Users,
    title: "Collaboration",
    description: "I bridge technical complexity with business understanding, ensuring that advanced analytics translate into practical, actionable insights."
  }, {
    icon: Globe,
    title: "Growth",
    description: "I stay current with emerging technologies and methodologies, continuously expanding my expertise to deliver cutting-edge solutions."
  }];
  const languages = [{
    name: "English",
    level: "Fluent"
  }, {
    name: "Hindi",
    level: "Fluent"
  }, {
    name: "Gujarati",
    level: "Fluent"
  }];
  const ExperienceCard = ({
    item,
    index,
    expanded,
    setExpanded,
    items
  }: {
    item: typeof workExperience[0] | typeof education[0];
    index: number;
    expanded: number | null;
    setExpanded: (index: number | null) => void;
    items: (typeof workExperience | typeof education);
  }) => <Card className="border-l-4 border-l-primary hover-lift bg-card/50 cursor-pointer transition-all duration-300">
      <CardHeader className="pb-3" onClick={() => setExpanded(expanded === index ? null : index)}>
        <div className="flex items-start gap-4">
          <div className={`p-2 rounded-lg ${item.type === 'work' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}>
            <item.icon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 mb-1">
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs bg-transparent border-0 whitespace-nowrap">
                  {item.period}
                </Badge>
                {expanded === index ? <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" /> : <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
              </div>
            </div>
            <CardDescription className="font-medium">
              {item.company} • {item.location}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      {expanded === index && <CardContent className="animate-fade-in">
          <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
          <ul className="space-y-2">
            {item.achievements.map((achievement, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{achievement}</span>
              </li>)}
          </ul>
        </CardContent>}
    </Card>;
  return <section id="about" className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="text-xl text-muted-foreground max-w-3xl mx-auto space-y-1">
            <p className="text-base font-semibold">Graduate Business Analytics and AI Student @American University</p>
            <p className="font-semibold text-base">Fraud Data Analyst @EduGuide</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Professional Experience */}
          <TimelineExperience />

          {/* Education */}
          <div className="animate-slide-up">
            <h3 className="font-heading text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((item, index) => <ExperienceCard key={`edu-${index}`} item={item} index={index} expanded={expandedEducation} setExpanded={setExpandedEducation} items={education} />)}
            </div>
          </div>
        </div>

          {/* Sidebar */}
          
        </div>
      </div>
    </section>;
};
export default AboutSection;