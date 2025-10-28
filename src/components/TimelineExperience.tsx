import { Card } from "@/components/ui/card";
import { Brain, TrendingUp, Zap, Target, BarChart, Search, AlertTriangle, CheckCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Achievement {
  text: string;
}

interface AchievementGroup {
  category: string;
  icon: LucideIcon;
  achievements: Achievement[];
}

interface Experience {
  company: string;
  logo: string;
  logoPosition: "left" | "right";
  title: string;
  period: string;
  location: string;
  achievementGroups: AchievementGroup[];
}

const TimelineExperience = () => {
  const experiences: Experience[] = [
    {
      company: "EduGuide Overseas Pvt. Ltd.",
      logo: "/eduguide-logo.png",
      logoPosition: "left",
      title: "Fraud Data Analyst",
      period: "June 2021 - Present",
      location: "Mumbai, India",
      achievementGroups: [
        {
          category: "Model Development",
          icon: Brain,
          achievements: [
            { text: "Engineer anomaly detection models in Python (Random Forest, Logistic Regression)" },
            { text: "Classify an average of 200k+ high-risk transactions monthly using a self-developed model" },
            { text: "Enhance fraud detection accuracy by 25%" }
          ]
        },
        {
          category: "Impact & Results",
          icon: TrendingUp,
          achievements: [
            { text: "Analyze 500+ payment datasets monthly using SQL and Python" },
            { text: "Reduce suspicious student applications by 20% annually via automated scoring pipelines" }
          ]
        },
        {
          category: "Automation & Insights",
          icon: Zap,
          achievements: [
            { text: "Design and automate Power BI dashboards, streamlining review time by 15%" },
            { text: "Deliver prescriptive, data-driven recommendations to admissions, compliance, and IT teams" }
          ]
        }
      ]
    },
    {
      company: "Guidehouse, Inc.",
      logo: "/guidehouse-logo.png",
      logoPosition: "right",
      title: "Financial Crime & Investigative Services Intern",
      period: "June 2024 - August 2024",
      location: "New York, NY",
      achievementGroups: [
        {
          category: "Workflow Optimization",
          icon: Target,
          achievements: [
            { text: "Developed and optimized fraud detection workflows for 20,000+ ACH/wire transfers" },
            { text: "Applied feature engineering and SQL-based data preparation" }
          ]
        },
        {
          category: "Pattern Detection",
          icon: AlertTriangle,
          achievements: [
            { text: "Detected 50+ high-risk transaction patterns" },
            { text: "Integrated ML and risk scoring to strengthen compliance monitoring by 30%" }
          ]
        },
        {
          category: "Strategic Influence",
          icon: BarChart,
          achievements: [
            { text: "Presented capstone on wire transfer anomaly detection" },
            { text: "Influenced directors through technical presentations and solution adoption" }
          ]
        }
      ]
    },
    {
      company: "State of New York, Office of the Attorney General",
      logo: "/nyag-seal.png",
      logoPosition: "left",
      title: "Fraud Audit Intern",
      period: "June 2023 - August 2023",
      location: "Hauppauge, NY",
      achievementGroups: [
        {
          category: "Investigation Support",
          icon: Search,
          achievements: [
            { text: "Conducted data analysis on provider billing and claims transactions" },
            { text: "Collaborated across four Medicaid fraud investigations" }
          ]
        },
        {
          category: "Financial Recovery",
          icon: CheckCircle,
          achievements: [
            { text: "Identified $500K+ in recovery anomalies using SQL and statistical validation" },
            { text: "Consulted with investigators to streamline evidence review" }
          ]
        },
        {
          category: "Process Improvement",
          icon: Zap,
          achievements: [
            { text: "Leveraged prescriptive analytics to accelerate fraud case resolution by 20%" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="space-y-16">
      {experiences.map((exp, index) => (
        <div key={index}>
          {/* Experience Container */}
          <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
            exp.logoPosition === "right" ? "lg:flex-row-reverse" : ""
          }`}>
            {/* Logo Section */}
            <div className="flex-shrink-0 w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center p-4 bg-background rounded-lg shadow-medium hover:shadow-hover transition-shadow duration-300">
              <img 
                src={exp.logo} 
                alt={`${exp.company} logo`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details Section */}
            <div className="flex-1 w-full space-y-6 animate-fade-in">
              {/* Company & Title */}
              <div className="space-y-2 text-center lg:text-left">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                  {exp.company}
                </h3>
                <h4 className="text-xl lg:text-2xl font-semibold text-primary">
                  {exp.title}
                </h4>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">{exp.period}</span>
                  <span>•</span>
                  <span className="font-medium">{exp.location}</span>
                </div>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exp.achievementGroups.map((group, groupIndex) => {
                  const Icon = group.icon;
                  return (
                    <Card 
                      key={groupIndex}
                      className="p-4 space-y-3 hover-lift transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <h5 className="font-semibold text-sm text-foreground">
                          {group.category}
                        </h5>
                      </div>
                      <ul className="space-y-2">
                        {group.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement.text}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Separator (not shown after last item) */}
          {index < experiences.length - 1 && (
            <div className="mt-16 border-t border-border/50" />
          )}
        </div>
      ))}
    </div>
  );
};

export default TimelineExperience;
