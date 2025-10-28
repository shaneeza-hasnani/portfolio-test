interface Experience {
  company: string;
  title: string;
  period: string;
  location: string;
  achievements: string[];
}

const TimelineExperience = () => {
  const experiences: Experience[] = [
    {
      company: "EduGuide Overseas Pvt. Ltd.",
      title: "Fraud Data Analyst",
      period: "June 2021 - Present",
      location: "Mumbai, India",
      achievements: [
        "Engineer anomaly detection models in Python (Random Forest, Logistic Regression)",
        "Classify an average of 200k+ high-risk transactions monthly using a self-developed model",
        "Enhance fraud detection accuracy by 25%",
        "Analyze 500+ payment datasets monthly using SQL and Python",
        "Reduce suspicious student applications by 20% annually via automated scoring pipelines",
        "Design and automate Power BI dashboards, streamlining review time by 15%",
        "Deliver prescriptive, data-driven recommendations to admissions, compliance, and IT teams"
      ]
    },
    {
      company: "Guidehouse, Inc.",
      title: "Financial Crime & Investigative Services Intern",
      period: "June 2024 - August 2024",
      location: "New York, NY",
      achievements: [
        "Developed and optimized fraud detection workflows for 20,000+ ACH/wire transfers",
        "Applied feature engineering and SQL-based data preparation",
        "Detected 50+ high-risk transaction patterns",
        "Integrated ML and risk scoring to strengthen compliance monitoring by 30%",
        "Presented capstone on wire transfer anomaly detection",
        "Influenced directors through technical presentations and solution adoption"
      ]
    },
    {
      company: "State of New York, Office of the Attorney General",
      title: "Fraud Audit Intern",
      period: "June 2023 - August 2023",
      location: "Hauppauge, NY",
      achievements: [
        "Conducted data analysis on provider billing and claims transactions",
        "Collaborated across four Medicaid fraud investigations",
        "Identified $500K+ in recovery anomalies using SQL and statistical validation",
        "Consulted with investigators to streamline evidence review",
        "Leveraged prescriptive analytics to accelerate fraud case resolution by 20%"
      ]
    }
  ];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical Timeline Line */}
      <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-border hidden md:block" />
      
      {experiences.map((exp, index) => (
        <div key={index} className="relative pb-12 last:pb-0">
          {/* Timeline Dot */}
          <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-primary border-4 border-background hidden md:block" />
          
          {/* Content */}
          <div className="md:ml-12 space-y-4 animate-fade-in">
            {/* Company & Title */}
            <div className="space-y-1">
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-foreground">
                {exp.company}
              </h3>
              <h4 className="text-lg font-semibold text-primary">
                {exp.title}
              </h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{exp.period}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Achievements List */}
            <ul className="space-y-2.5">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineExperience;
