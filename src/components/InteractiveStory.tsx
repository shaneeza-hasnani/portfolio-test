import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Target, Lightbulb } from "lucide-react";

const InteractiveStory = () => {
  const [activeStage, setActiveStage] = useState(0);

  const storyStages = [
    {
      icon: Shield,
      title: "Certified Fraud Examiner",
      subtitle: "Professional Foundation",
      description: "Started as a CFE with deep expertise in fraud examination and financial forensics, building the domain knowledge that makes my data insights meaningful.",
      highlight: "CFE Certified 2025",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Fraud Data Analyst",
      subtitle: "Applied Analytics", 
      description: "Currently analyzing complex fraud patterns at scale, using ML to detect anomalies in payment systems and building automated detection pipelines.",
      highlight: "$500K+ fraud identified",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Transition to Data Science",
      subtitle: "Future Focus",
      description: "Expanding into broader data science applications while maintaining fraud domain expertise - combining statistical rigor with business impact.",
      highlight: "MS in Business Analytics & AI",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "What Drives Me",
      subtitle: "Core Mission",
      description: "I build systems that protect businesses and people. Every model has real-world impact - from stopping fraud to enabling confident decisions.",
      highlight: "Models that matter",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <Card className="border-0 bg-gradient-card shadow-medium">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">My Journey</CardTitle>
        <CardDescription>From fraud examiner to data scientist - built on domain expertise</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          {storyStages.map((stage, index) => {
            const IconComponent = stage.icon;
            return (
              <Button
                key={index}
                variant={activeStage === index ? "default" : "outline"}
                onClick={() => setActiveStage(index)}
                className="h-auto p-3 flex flex-col items-center gap-2 transition-all duration-300"
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-xs font-medium">{stage.title}</span>
              </Button>
            );
          })}
        </div>

        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${storyStages[activeStage].color}`}>
              {(() => {
                const IconComponent = storyStages[activeStage].icon;
                return <IconComponent className="w-6 h-6 text-white" />;
              })()}
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold">{storyStages[activeStage].title}</h3>
              <p className="text-sm text-muted-foreground">{storyStages[activeStage].subtitle}</p>
            </div>
            <Badge variant="secondary" className="ml-auto">
              {storyStages[activeStage].highlight}
            </Badge>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {storyStages[activeStage].description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveStory;