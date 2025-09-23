import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, ShieldCheck, Brain, TrendingUp, Zap, Target } from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Credit Card Fraud Detection System",
      subtitle: "Advanced ML Pipeline for Real-time Transaction Monitoring",
      description: "Built a comprehensive fraud detection system using Random Forest and Decision Tree classifiers on 10,000+ real-time transactions.",
      problem: "Financial institutions needed a reliable system to detect fraudulent credit card transactions with high accuracy while minimizing false positives that could inconvenience legitimate customers.",
      methodology: [
        "Implemented Random Forest and Decision Tree models with hyperparameter tuning",
        "Applied advanced feature engineering on transaction patterns",
        "Optimized recall to 77.9% while maintaining false positive rate under 0.02%",
        "Deployed real-time scoring pipeline for instant transaction assessment"
      ],
      results: [
        "Achieved 99.96% overall accuracy on test dataset",
        "97.25% recall for detecting fraudulent transactions",
        "Reduced false positive rate to 0.02%",
        "Enabled real-time fraud prevention for financial institutions"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "Random Forest", "Decision Trees", "Feature Engineering"],
      icon: ShieldCheck,
      color: "from-red-500 to-orange-500",
      metrics: { accuracy: "99.96%", recall: "97.25%", precision: "77.9%" },
      github: "https://github.com/shaneeza/fraud-detection",
      demo: "https://fraud-detector-demo.streamlit.app"
    },
    {
      id: 2,
      title: "Student Application Risk Assessment",
      subtitle: "Automated Anomaly Detection for Educational Services",
      description: "Developed an automated system to identify high-risk student applications using machine learning, processing 500+ datasets monthly.",
      problem: "EduGuide needed to efficiently identify potentially fraudulent student applications while maintaining a smooth legitimate application process.",
      methodology: [
        "Engineered anomaly detection models using Python and SQL",
        "Applied Random Forest and Logistic Regression for risk classification",
        "Created automated scoring pipelines for real-time assessment",
        "Integrated with existing admissions workflow"
      ],
      results: [
        "Reduced suspicious applications by 20% annually",
        "Improved fraud detection accuracy by 25%",
        "Streamlined review process for admissions teams",
        "Safeguarded digital payment flows"
      ],
      technologies: ["Python", "SQL", "Random Forest", "Logistic Regression", "Power BI", "Automation"],
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      metrics: { improvement: "25%", reduction: "20%", processed: "500+/month" },
      github: "https://github.com/shaneeza/student-risk-assessment"
    },
    {
      id: 3,
      title: "Wire Transfer Anomaly Detection",
      subtitle: "Advanced Pattern Recognition for Financial Crime Prevention",
      description: "Built sophisticated ML workflows to detect anomalous patterns in 20,000+ ACH/wire transfer records for compliance monitoring.",
      problem: "Financial institutions required enhanced monitoring capabilities to detect suspicious wire transfer patterns while maintaining regulatory compliance.",
      methodology: [
        "Applied advanced feature engineering on transaction metadata",
        "Implemented unsupervised learning for pattern detection",
        "Combined ML models with risk scoring algorithms",
        "Integrated with compliance monitoring systems"
      ],
      results: [
        "Enhanced compliance monitoring by 30%",
        "Successfully identified high-risk transaction patterns",
        "Adopted by directors following technical presentations",
        "Strengthened anti-money laundering capabilities"
      ],
      technologies: ["Machine Learning", "Feature Engineering", "SQL", "Risk Scoring", "Compliance", "Pattern Recognition"],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      metrics: { enhancement: "30%", records: "20,000+", adoption: "Director-level" },
      github: "https://github.com/shaneeza/wire-transfer-anomaly"
    },
    {
      id: 4,
      title: "Medicaid Fraud Investigation Analytics",
      subtitle: "Statistical Analysis for Healthcare Fraud Detection",
      description: "Conducted comprehensive data analysis on provider billing patterns across multiple Medicaid fraud investigations.",
      problem: "The NY State Attorney General's office needed to efficiently analyze large volumes of healthcare billing data to identify fraudulent patterns and quantify financial impact.",
      methodology: [
        "Applied statistical validation on billing transactions",
        "Used SQL for complex healthcare data queries",
        "Implemented prescriptive analytics for case prioritization",
        "Created evidence review workflows for investigators"
      ],
      results: [
        "Identified $500K+ in recovery anomalies",
        "Improved fraud case resolution turnaround by 20%",
        "Streamlined evidence review process",
        "Supported successful fraud prosecutions"
      ],
      technologies: ["SQL", "Statistical Analysis", "Healthcare Data", "Prescriptive Analytics", "Evidence Analysis"],
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      metrics: { recovery: "$500K+", improvement: "20%", cases: "4 investigations" },
      impact: "Government prosecution support"
    },
    {
      id: 5,
      title: "Real-time Fraud Monitoring Dashboard",
      subtitle: "Interactive Business Intelligence for Risk Management",
      description: "Designed and automated comprehensive Power BI dashboards for real-time fraud monitoring and team collaboration.",
      problem: "Multiple departments needed unified, real-time visibility into fraud metrics and trends to make informed decisions quickly.",
      methodology: [
        "Integrated multiple data sources into unified dashboard",
        "Automated data refresh and alert systems",
        "Created role-based access and views",
        "Implemented drill-down capabilities for detailed analysis"
      ],
      results: [
        "Reduced review time by 15%",
        "Improved cross-team collaboration",
        "Enabled data-driven decision making",
        "Streamlined reporting processes"
      ],
      technologies: ["Power BI", "Dashboard Design", "Data Integration", "Automation", "Business Intelligence"],
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      metrics: { efficiency: "15%", teams: "Multi-department", automation: "Real-time" },
      demo: "https://powerbi-fraud-dashboard.demo"
    },
    {
      id: 6,
      title: "Predictive Risk Modeling Framework",
      subtitle: "Advanced Analytics for Proactive Fraud Prevention",
      description: "Developed a comprehensive framework combining multiple ML algorithms for predictive risk assessment and early fraud detection.",
      problem: "Organizations needed to move from reactive fraud detection to proactive risk prevention using predictive modeling techniques.",
      methodology: [
        "Combined ensemble methods with neural networks",
        "Implemented time-series analysis for trend detection",
        "Created risk scoring algorithms with confidence intervals",
        "Built interpretable model explanations for stakeholders"
      ],
      results: [
        "Achieved early fraud detection capabilities",
        "Reduced false positive rates significantly",
        "Improved model interpretability for business users",
        "Enabled proactive risk management strategies"
      ],
      technologies: ["Ensemble Methods", "Neural Networks", "Time Series", "Risk Modeling", "Model Interpretability"],
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      metrics: { prediction: "Early detection", accuracy: "High confidence", interpretability: "Business-friendly" },
      github: "https://github.com/shaneeza/predictive-risk-framework"
    }
  ];

  const ProjectModal = ({ project }: { project: typeof projects[0] }) => (
    <Card className="project-card border-0 shadow-medium">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
              <project.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-sm font-medium text-primary">
                {project.subtitle}
              </CardDescription>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedProject(null)}
            className="text-muted-foreground hover:text-foreground"
          >
            ✕
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold text-foreground mb-2">Problem & Motivation</h4>
          <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Methodology</h4>
          <ul className="space-y-2">
            {project.methodology.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Results & Impact</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="text-center p-3 bg-muted rounded-lg">
                <div className="text-xl font-bold text-primary">{value}</div>
                <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
              </div>
            ))}
          </div>
          <ul className="space-y-2">
            {project.results.map((result, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="skill-badge">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-3">
        {project.github && (
          <Button asChild variant="outline" size="sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        {project.demo && (
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications of machine learning and data analytics in fraud detection, 
            risk assessment, and financial crime prevention.
          </p>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <ProjectModal project={projects.find(p => p.id === selectedProject)!} />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="project-card cursor-pointer group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription>{project.subtitle}</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-muted/50 rounded">
                      <div className="font-semibold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  variant="outline"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;