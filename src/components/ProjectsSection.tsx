import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, ShieldCheck, TrendingUp, Zap } from "lucide-react";
const ProjectsSection = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Auto-open project modal from URL parameter
  useEffect(() => {
    const projectId = searchParams.get('project');
    if (projectId) {
      setSelectedProject(Number(projectId));
      // Remove the parameter after opening
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);
  const projects = [{
    id: 1,
    title: "Credit-Card Transaction Fraud Model",
    subtitle: "Advanced ML Classifiers for Real-time Fraud Detection",
    description: "Engineered Random Forest and Decision Tree classifiers on 10,000+ real-time transactions achieving exceptional accuracy and recall for financial institutions.",
    problem: "Financial institutions required a highly accurate fraud detection system that could identify fraudulent transactions in real-time while maintaining an extremely low false positive rate to avoid disrupting legitimate customer transactions.",
    methodology: ["Engineered Random Forest and Decision Tree classifiers on 10,000+ real-time transactions", "Optimized hyperparameters to elevate Random Forest recall to 77.9%", "Applied advanced feature engineering and model tuning techniques", "Regulated false positives under 0.02% enabling reliable deployment"],
    results: ["Attained 99.96% accuracy for transaction classification", "Achieved 97.25% recall for abnormal payment detection", "Maintained false positive rate under 0.02%", "Enabled reliable deployment for financial institutions"],
    technologies: ["Python", "Random Forest", "Decision Trees", "Excel", "Scikit-learn", "Feature Engineering", "Hyperparameter Optimization"],
    icon: ShieldCheck,
    color: "from-red-500 to-orange-500",
    metrics: {
      accuracy: "99.96%",
      recall: "97.25%",
      "false positives": "<0.02%"
    },
    github: "https://github.com/shaneeza-hasnani/credit-card-fraud-model",
    model: "/fraud-model",
    impact: "CUNY John Jay College of Criminal Justice - October 2024"
  }, {
    id: 3,
    title: "Wire Transfer Anomaly Detection",
    subtitle: "Advanced Pattern Recognition for Financial Crime Prevention",
    description: "Built sophisticated ML workflows to detect anomalous patterns in 20,000+ ACH/wire transfer records for compliance monitoring.",
    problem: "Financial institutions required enhanced monitoring capabilities to detect suspicious wire transfer patterns while maintaining regulatory compliance.",
    methodology: ["Applied advanced feature engineering on transaction metadata", "Implemented unsupervised learning for pattern detection", "Combined ML models with risk scoring algorithms", "Integrated with compliance monitoring systems"],
    results: ["Enhanced compliance monitoring by 30%", "Successfully identified high-risk transaction patterns", "Adopted by directors following technical presentations", "Strengthened anti-money laundering capabilities"],
    technologies: ["Machine Learning", "Feature Engineering", "SQL", "Risk Scoring", "Compliance", "Pattern Recognition"],
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    metrics: {
      anomalies: "847",
      falsePositives: "<5%",
      enhancement: "30%"
    },
    github: "https://github.com/shaneeza-hasnani/wire-transfer-anomaly",
    model: "/wire-transfer-model"
  }];
  const ProjectModal = ({
    project
  }: {
    project: typeof projects[0];
  }) => <Card className="project-card border-0 shadow-medium">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
              <project.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setSelectedProject(null)} className="text-muted-foreground hover:text-foreground">
            ✕
          </Button>
        </div>
      </CardHeader>

      {/* Catchy Hook - Credit Card Fraud Model */}
      {project.id === 1 && (
        <div className="px-6 pt-2 pb-2">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border border-red-200/50 dark:border-red-800/50 rounded-lg p-4">
            <p className="text-lg font-semibold text-center text-foreground leading-relaxed">
              Every second counts when $8.8 billion is at stake—meet the model that catches fraud in real-time
            </p>
          </div>
        </div>
      )}

      {/* Catchy Hook - Wire Transfer Anomaly Detection */}
      {project.id === 3 && (
        <div className="px-6 pt-2 pb-2">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200/50 dark:border-green-800/50 rounded-lg p-4">
            <p className="text-lg font-semibold text-center text-foreground leading-relaxed">
              One anonymous transfer. Seven countries. Twelve shell companies. One AI model to connect the dots.
            </p>
          </div>
        </div>
      )}

      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold text-foreground mb-2">Problem & Motivation</h4>
          <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Methodology</h4>
          <ul className="space-y-2">
            {project.methodology.map((item, idx) => <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>)}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Results & Impact</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {Object.entries(project.metrics).map(([key, value]) => <div key={key} className="text-center p-3 bg-muted rounded-lg">
                <div className="text-xl font-bold text-primary">{value}</div>
                <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
              </div>)}
          </div>
          <ul className="space-y-2">
            {project.results.map((result, idx) => <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>{result}</span>
              </li>)}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => <Badge key={tech} variant="secondary" className="skill-badge">
                {tech}
              </Badge>)}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-3">
        {project.github && <Button asChild variant="outline" size="sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>}
        {project.model && <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={e => {
        e.stopPropagation();
        if (project.model.startsWith('/')) {
          navigate(project.model);
        } else {
          window.open(project.model, '_blank');
        }
      }}>
            <BarChart3 className="w-4 h-4 mr-2" />
            Explore System
          </Button>}
      </CardFooter>
    </Card>;
  const scrollToFraudSimulator = () => {
    document.getElementById('fraud-simulator')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="projects" className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Call to Action for Fraud Simulator */}
        <div className="text-center mb-12 animate-fade-in">
          
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base font-semibold">
            Real-world applications of machine learning and data analytics in fraud detection, 
            risk assessment, and financial crime prevention.
          </p>
        </div>

        {selectedProject && <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <ProjectModal project={projects.find(p => p.id === selectedProject)!} />
            </div>
          </div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => <Card key={project.id} className="project-card cursor-pointer group animate-slide-up hover:shadow-2xl transition-all duration-500 border bg-card relative overflow-hidden" style={{
          animationDelay: `${index * 0.1}s`
        }} onClick={() => setSelectedProject(project.id)}>
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-1 group-hover:text-foreground transition-colors duration-300 font-medium">
                      {project.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-5">
                <p className="text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(tech => <Badge key={tech} variant="secondary" className="text-xs px-3 py-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                      {tech}
                    </Badge>)}
                  {project.technologies.length > 3 && <Badge variant="secondary" className="text-xs px-3 py-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                      +{project.technologies.length - 3} more
                    </Badge>}
                </div>
                
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => <div key={key} className="text-center p-4 bg-muted/50 rounded-lg group-hover:bg-primary/10 transition-all duration-300 border border-transparent group-hover:border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize font-medium">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>)}
                </div>
              </CardContent>

              <CardFooter className="relative pt-4">
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:scale-105 shadow-sm group-hover:shadow-md" variant="outline">
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardFooter>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;