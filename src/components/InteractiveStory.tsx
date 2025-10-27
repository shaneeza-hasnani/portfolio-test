import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Target, Lightbulb } from "lucide-react";
const InteractiveStory = () => {
  const [activeStage, setActiveStage] = useState(0);
  const storyStages = [{
    icon: Shield,
    title: "Certified Fraud Examiner",
    subtitle: "Professional Foundation",
    description: "Started as a CFE with deep expertise in fraud examination and financial forensics, building the domain knowledge that makes my data insights meaningful.",
    highlight: "CFE Certified 2025",
    color: "from-red-500 to-orange-500"
  }, {
    icon: TrendingUp,
    title: "Fraud Data Analyst",
    subtitle: "Applied Analytics",
    description: "Currently analyzing complex fraud patterns at scale, using ML to detect anomalies in payment systems and building automated detection pipelines.",
    highlight: "$500K+ fraud identified",
    color: "from-blue-500 to-cyan-500"
  }, {
    icon: Target,
    title: "Transition to Data Science",
    subtitle: "Future Focus",
    description: "Expanding into broader data science applications while maintaining fraud domain expertise - combining statistical rigor with business impact.",
    highlight: "MS in Business Analytics & AI",
    color: "from-purple-500 to-pink-500"
  }, {
    icon: Lightbulb,
    title: "What Drives Me",
    subtitle: "Core Mission",
    description: "I build systems that protect businesses and people. Every model has real-world impact - from stopping fraud to enabling confident decisions.",
    highlight: "Models that matter",
    color: "from-green-500 to-emerald-500"
  }];
  
  return (
    <Card className="animate-slide-up">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">My Journey</CardTitle>
        <CardDescription>From fraud examination to data science</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {storyStages.map((stage, index) => {
            const StageIcon = stage.icon;
            return (
              <Button
                key={index}
                variant={activeStage === index ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveStage(index)}
                className="h-auto py-2 px-3"
              >
                <StageIcon className="w-4 h-4 mr-2" />
                <span className="text-xs">{stage.subtitle}</span>
              </Button>
            );
          })}
        </div>
        
        <div className="space-y-4">
          {(() => {
            const ActiveIcon = storyStages[activeStage].icon;
            return (
              <div className={`bg-gradient-to-r ${storyStages[activeStage].color} p-4 rounded-lg text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  <ActiveIcon className="w-6 h-6" />
                  <h4 className="font-bold text-lg">{storyStages[activeStage].title}</h4>
                </div>
            <Badge variant="secondary" className="mb-3">
              {storyStages[activeStage].highlight}
            </Badge>
            <p className="text-white/90 leading-relaxed">
              {storyStages[activeStage].description}
            </p>
          </div>
            );
          })()}
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveStory;