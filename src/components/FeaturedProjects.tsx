import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ShieldCheck, Target, TrendingUp } from "lucide-react";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Credit Card Fraud Detection",
      description: "ML pipeline achieving 99.96% accuracy in real-time transaction monitoring",
      thumbnail: "🛡️",
      metrics: ["99.96% Accuracy", "97.25% Recall", "Real-time Processing"],
      technologies: ["Python", "Random Forest", "Scikit-learn"],
      icon: ShieldCheck,
      color: "from-red-500 to-orange-500",
      github: "https://github.com/shaneeza/fraud-detection",
      demo: "https://fraud-detector-demo.streamlit.app"
    },
    {
      id: 2,
      title: "Student Risk Assessment",
      description: "Automated anomaly detection reducing suspicious applications by 20%",
      thumbnail: "🎯",
      metrics: ["20% Reduction", "25% Accuracy Gain", "500+ Monthly Datasets"],
      technologies: ["Python", "SQL", "Power BI"],
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      github: "https://github.com/shaneeza/student-risk-assessment"
    },
    {
      id: 3,
      title: "Wire Transfer Anomaly Detection",
      description: "Enhanced compliance monitoring for 20,000+ ACH/wire transfers",
      thumbnail: "📈",
      metrics: ["30% Enhancement", "20K+ Records", "Director Adoption"],
      technologies: ["Machine Learning", "Feature Engineering", "SQL"],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      github: "https://github.com/shaneeza/wire-transfer-anomaly"
    }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world fraud prevention systems that protect millions in financial transactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="project-card group cursor-pointer animate-slide-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project thumbnail/visual */}
              <div className={`h-32 bg-gradient-to-r ${project.color} relative overflow-hidden rounded-t-lg`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">{project.thumbnail}</span>
                </div>
                <div className="absolute top-3 right-3">
                  <project.icon className="w-6 h-6 text-white/90" />
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Key metrics */}
                <div className="grid grid-cols-1 gap-2">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-xs bg-muted/50 rounded px-2 py-1 text-center">
                      <span className="font-medium text-primary">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-2">
                  {project.github && (
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-hover transition-all duration-300"
          >
            View All Projects & Case Studies
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;