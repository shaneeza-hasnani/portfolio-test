import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  GraduationCap, 
  Award, 
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Target,
  ChevronDown,
  ChevronRight,
  ExternalLink
} from "lucide-react";

const TimelineExperience = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const timelineData = [
    {
      id: "current",
      type: "education",
      title: "Master of Science in Data Science",
      organization: "University of Maryland, College Park",
      location: "College Park, MD",
      period: "2025 - 2027 (Expected)",
      status: "Upcoming",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
      description: "Advanced graduate program focusing on machine learning, statistical modeling, and big data analytics with applications in fraud detection and financial crime prevention.",
      highlights: [
        "Specialization in Machine Learning and Statistical Modeling",
        "Advanced coursework in Deep Learning and Neural Networks",
        "Capstone project on real-time fraud detection systems",
        "Research focus on financial crime pattern recognition"
      ],
      skills: ["Advanced ML", "Deep Learning", "Big Data Analytics", "Statistical Modeling", "Research Methods"],
      achievements: [],
      projects: []
    },
    {
      id: "graduation",
      type: "education",
      title: "Bachelor of Business Administration",
      organization: "St. Mary's University",
      location: "San Antonio, TX",
      period: "2021 - 2025",
      status: "Completed",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
      description: "Specialized degree in Fraud Examination and Financial Forensics with highest honors, developing expertise in white-collar crime investigation and data analysis techniques.",
      highlights: [
        "Graduated Cum Laude with Honors in Major (3.87 GPA)",
        "Dean's List recognition for 3 consecutive years",
        "Comprehensive training in fraud detection methodologies",
        "Advanced coursework in financial forensics and data analysis"
      ],
      skills: ["Fraud Examination", "Financial Forensics", "Data Analysis", "SQL", "Excel Advanced", "Statistical Analysis"],
      achievements: [
        "Cum Laude graduation with 3.87 GPA",
        "Dean's List 2022-2025",
        "Honors in Major recognition",
        "ACFE Ritchie-Jennings Memorial Scholarship recipient"
      ],
      projects: [
        "Senior capstone project on machine learning fraud detection",
        "Research paper on financial crime trends",
        "Case study analysis of corporate fraud schemes"
      ]
    },
    {
      id: "cfe-certification",
      type: "certification",
      title: "Certified Fraud Examiner (CFE)",
      organization: "Association of Certified Fraud Examiners",
      location: "Global Certification",
      period: "2025",
      status: "Achieved",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      description: "Premier professional certification demonstrating expertise in fraud prevention, detection, investigation, and deterrence across all areas of fraud examination.",
      highlights: [
        "Comprehensive examination covering all fraud examination domains",
        "Demonstrates expertise in fraud prevention and detection",
        "Validates knowledge of investigative techniques",
        "Commitment to professional ethics and continuing education"
      ],
      skills: ["Fraud Prevention", "Investigation Techniques", "Legal Knowledge", "Ethics", "Report Writing"],
      achievements: [
        "Successfully passed comprehensive CFE examination",
        "Member of global professional community",
        "Commitment to ethical standards in fraud examination"
      ],
      projects: []
    },
    {
      id: "eduguide",
      type: "experience",
      title: "Fraud Data Analyst",
      organization: "EduGuide",
      location: "Remote",
      period: "2023 - Present",
      status: "Current",
      icon: Building2,
      color: "from-orange-500 to-red-500",
      description: "Leading data analysis initiatives to detect and prevent fraudulent student applications through machine learning algorithms and statistical analysis, processing 500+ datasets monthly.",
      highlights: [
        "Reduced suspicious applications by 20% annually through ML models",
        "Improved fraud detection accuracy by 25% using ensemble methods",
        "Automated review processes reducing manual effort by 40%",
        "Collaborated with cross-functional teams on risk assessment protocols"
      ],
      skills: ["Python", "SQL", "Machine Learning", "Statistical Analysis", "Power BI", "Risk Assessment", "Automation"],
      achievements: [
        "20% reduction in fraudulent applications",
        "25% improvement in detection accuracy",
        "40% reduction in manual review processes",
        "Successfully processed 500+ datasets monthly"
      ],
      projects: [
        "Automated anomaly detection system for student applications",
        "Real-time risk scoring algorithm development",
        "Interactive Power BI dashboards for fraud monitoring",
        "ML model optimization for improved accuracy"
      ]
    },
    {
      id: "ny-ag",
      type: "experience",
      title: "Data Analyst Intern",
      organization: "New York State Attorney General's Office",
      location: "New York, NY",
      period: "Summer 2024",
      status: "Completed",
      icon: Building2,
      color: "from-indigo-500 to-blue-500",
      description: "Conducted comprehensive data analysis supporting Medicaid fraud investigations, applying statistical methods to identify patterns and quantify financial impact for prosecution teams.",
      highlights: [
        "Analyzed large-scale healthcare billing data for fraud patterns",
        "Identified $500K+ in recovery opportunities through statistical analysis",
        "Improved case resolution turnaround by 20% through data insights",
        "Supported successful fraud prosecutions with analytical evidence"
      ],
      skills: ["SQL", "Statistical Analysis", "Healthcare Data", "Evidence Analysis", "Report Writing", "Data Visualization"],
      achievements: [
        "$500K+ fraud recovery identified",
        "20% improvement in case resolution time",
        "Contributed to successful fraud prosecutions",
        "Streamlined analytical processes for investigation teams"
      ],
      projects: [
        "Medicaid billing pattern analysis for fraud detection",
        "Statistical validation of healthcare fraud evidence",
        "Development of analytical frameworks for case prioritization",
        "Creation of evidence summary reports for legal teams"
      ]
    },
    {
      id: "wire-transfer",
      type: "project",
      title: "Wire Transfer Anomaly Detection",
      organization: "Independent Research Project",
      location: "Academic Project",
      period: "2024",
      status: "Completed",
      icon: Target,
      color: "from-teal-500 to-cyan-500",
      description: "Developed advanced machine learning workflows to detect anomalous patterns in 20,000+ ACH/wire transfer records, enhancing compliance monitoring capabilities.",
      highlights: [
        "Enhanced compliance monitoring by 30% through ML algorithms",
        "Successfully analyzed 20,000+ transaction records",
        "Developed pattern recognition algorithms for suspicious activity",
        "Presented findings to academic and professional audiences"
      ],
      skills: ["Machine Learning", "Pattern Recognition", "Feature Engineering", "Compliance", "Risk Scoring"],
      achievements: [
        "30% enhancement in compliance monitoring",
        "Successfully processed 20,000+ records",
        "Recognition from academic supervisors",
        "Adoption of methodologies by industry professionals"
      ],
      projects: [
        "Unsupervised learning algorithms for anomaly detection",
        "Risk scoring system development",
        "Advanced feature engineering for transaction analysis",
        "Compliance monitoring dashboard creation"
      ]
    }
  ];

  const toggleExpansion = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Current': return 'bg-green-100 text-green-700 border-green-200';
      case 'Upcoming': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Completed': return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'Achieved': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive timeline of my education, experience, and achievements in fraud detection and data science.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
            
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div 
                  key={item.id} 
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-4 border-background shadow-lg z-10`} />
                  
                  {/* Content card */}
                  <div className="ml-16">
                    <Card 
                      className="border-0 bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 cursor-pointer"
                      onClick={() => toggleExpansion(item.id)}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} flex-shrink-0`}>
                              <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <CardTitle className="text-xl">{item.title}</CardTitle>
                                <Badge variant="outline" className={getStatusColor(item.status)}>
                                  {item.status}
                                </Badge>
                              </div>
                              <div className="text-primary font-semibold mb-1">{item.organization}</div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{item.period}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{item.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            {expandedItem === item.id ? (
                              <ChevronDown className="w-5 h-5 text-primary" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.skills.slice(0, 4).map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {item.skills.length > 4 && (
                            <Badge variant="secondary" className="text-xs">
                              +{item.skills.length - 4} more
                            </Badge>
                          )}
                        </div>

                        {expandedItem === item.id && (
                          <div className="space-y-6 pt-4 border-t border-border animate-fade-in">
                            {/* Key Highlights */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-primary" />
                                Key Highlights
                              </h4>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {item.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* All Skills */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Technical Skills</h4>
                              <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill) => (
                                  <Badge key={skill} variant="secondary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Achievements */}
                            {item.achievements.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                  <Award className="w-4 h-4 text-primary" />
                                  Key Achievements
                                </h4>
                                <ul className="space-y-2">
                                  {item.achievements.map((achievement, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                      <span>{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Projects */}
                            {item.projects.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                  <Target className="w-4 h-4 text-primary" />
                                  Notable Projects
                                </h4>
                                <ul className="space-y-2">
                                  {item.projects.map((project, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <div className="w-1.5 h-1.5 rounded-full bg-melon mt-2 flex-shrink-0" />
                                      <span>{project}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}

                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full mt-4"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpansion(item.id);
                          }}
                        >
                          {expandedItem === item.id ? "Show Less" : "View Details"}
                        </Button>
                      </CardContent>
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

export default TimelineExperience;