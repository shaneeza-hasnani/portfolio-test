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
  return;
};
export default InteractiveStory;