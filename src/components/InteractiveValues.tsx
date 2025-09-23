import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Target, 
  Users, 
  TrendingUp, 
  Lightbulb, 
  Heart,
  CheckCircle,
  Sparkles
} from "lucide-react";

const InteractiveValues = () => {
  const [activeValue, setActiveValue] = useState<string | null>(null);

  const values = [
    {
      id: "integrity",
      title: "Integrity First",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      shortDescription: "Ethical approach to fraud detection and data analysis",
      fullDescription: "Every analysis, every model, every recommendation is built on a foundation of complete honesty and transparency. In fraud detection, integrity isn't just a value—it's the cornerstone of trust.",
      examples: [
        "Transparent reporting of model limitations and confidence intervals",
        "Ethical handling of sensitive financial data",
        "Clear communication of findings to stakeholders",
        "Rigorous validation of all analytical conclusions"
      ],
      impact: "Built trust with legal teams handling $500K+ fraud cases"
    },
    {
      id: "precision",
      title: "Precision & Accuracy",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      shortDescription: "Meticulous attention to detail in every analysis",
      fullDescription: "In fraud detection, a false positive can freeze an innocent person's account, while a false negative can cost thousands. Every decimal point matters, every pattern must be verified.",
      examples: [
        "99.96% accuracy in fraud detection models",
        "Comprehensive cross-validation of all ML models",
        "Detailed statistical significance testing",
        "Multiple verification layers for critical findings"
      ],
      impact: "Reduced false positive rates to 0.8% while maintaining high recall"
    },
    {
      id: "collaboration",
      title: "Collaborative Excellence",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      shortDescription: "Working together to solve complex problems",
      fullDescription: "Great fraud detection isn't built in isolation. It requires seamless collaboration between data scientists, investigators, compliance teams, and business stakeholders.",
      examples: [
        "Cross-functional project leadership with legal and compliance teams",
        "Mentoring junior analysts in statistical methods",
        "Presenting complex findings to non-technical stakeholders",
        "Building consensus around data-driven recommendations"
      ],
      impact: "Led multi-department initiatives improving workflow efficiency by 25%"
    },
    {
      id: "innovation",
      title: "Continuous Innovation",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      shortDescription: "Always seeking better ways to detect and prevent fraud",
      fullDescription: "Fraudsters evolve their tactics constantly. Our detection methods must evolve faster. Innovation isn't just about new technology—it's about creative problem-solving.",
      examples: [
        "Pioneering ensemble methods for improved detection accuracy",
        "Automating manual review processes through ML",
        "Developing real-time scoring systems for instant decisions",
        "Creating intuitive dashboards for investigative teams"
      ],
      impact: "Automated processes reduced manual review time by 73%"
    },
    {
      id: "learning",
      title: "Lifelong Learning",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      shortDescription: "Staying ahead through continuous education and growth",
      fullDescription: "The intersection of technology, finance, and human behavior is constantly shifting. Staying effective requires dedicated learning and adaptation to new methodologies.",
      examples: [
        "Pursuing advanced certifications (CFE, upcoming Data Science MS)",
        "Staying current with latest ML algorithms and techniques",
        "Learning from each fraud case to improve future detection",
        "Sharing knowledge through documentation and training"
      ],
      impact: "ACFE scholarship recipient demonstrating commitment to professional growth"
    },
    {
      id: "empathy",
      title: "Human-Centered Approach",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      shortDescription: "Understanding the human impact behind every data point",
      fullDescription: "Behind every transaction is a person. Every fraud case affects real lives. Technology should protect people, not intimidate them. User experience matters as much as accuracy.",
      examples: [
        "Designing user-friendly interfaces for investigation tools",
        "Considering customer experience when setting alert thresholds",
        "Creating clear explanations for fraud detection decisions",
        "Balancing security with customer convenience"
      ],
      impact: "Improved customer satisfaction while maintaining security standards"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Core <span className="text-primary">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide every analysis, every model, and every decision in my fraud detection work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={value.id}
              className={`group cursor-pointer transition-all duration-300 border-0 bg-gradient-card hover:shadow-hover animate-slide-up ${
                activeValue === value.id ? 'ring-2 ring-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveValue(activeValue === value.id ? null : value.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                  </div>
                  {activeValue === value.id && (
                    <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {value.shortDescription}
                </p>

                {activeValue === value.id && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="border-t border-border pt-4">
                      <p className="text-sm text-foreground leading-relaxed mb-4">
                        {value.fullDescription}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">How I live this value:</h4>
                        <ul className="space-y-2">
                          {value.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="bg-primary/5 rounded-lg p-3 mt-4">
                          <Badge variant="secondary" className="mb-2">Impact</Badge>
                          <p className="text-xs text-foreground font-medium">
                            {value.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <Button 
                  variant={activeValue === value.id ? "default" : "outline"}
                  size="sm" 
                  className="w-full mt-4 transition-all duration-300"
                >
                  {activeValue === value.id ? "Show Less" : "Learn More"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground">
            These values aren't just words—they're the foundation of every project and the reason for my success in fraud detection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveValues;