import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Target, TrendingUp, Award, Users, BarChart3 } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const MetricsSection = () => {
  const metrics = [
    {
      icon: DollarSign,
      label: "Fraud Prevented",
      value: 500,
      suffix: "K+",
      prefix: "$",
      description: "Total amount saved through fraud detection systems",
      color: "from-[hsl(18,45%,63%)] to-[hsl(18,45%,53%)]"
    },
    {
      icon: Target,
      label: "Detection Accuracy",
      value: 99.96,
      suffix: "%",
      description: "Average accuracy across all ML fraud detection models",
      color: "from-[hsl(209,36%,70%)] to-[hsl(209,36%,60%)]"
    },
    {
      icon: TrendingUp,
      label: "Process Improvement",
      value: 30,
      suffix: "%",
      description: "Average improvement in operational efficiency",
      color: "from-[hsl(18,45%,63%)] to-[hsl(9,100%,81%)]"
    },
    {
      icon: BarChart3,
      label: "Datasets Processed",
      value: 500,
      suffix: "+",
      description: "Monthly datasets processed through automated pipelines",
      color: "from-[hsl(9,100%,81%)] to-[hsl(9,100%,71%)]"
    },
    {
      icon: Users,
      label: "Compliance Enhancement",
      value: 25,
      suffix: "%",
      description: "Improvement in compliance monitoring capabilities",
      color: "from-[hsl(18,45%,68%)] to-[hsl(18,45%,58%)]"
    },
    {
      icon: Award,
      label: "Case Resolutions",
      value: 20,
      suffix: "%",
      description: "Faster fraud case resolution turnaround time",
      color: "from-[hsl(209,36%,75%)] to-[hsl(209,36%,65%)]"
    }
  ];

  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Impact by the <span className="text-primary">Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Performance metrics from active fraud detection systems and machine learning models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Card 
              key={metric.label}
              className="border-0 bg-white/70 backdrop-blur-md border border-border/40 shadow-soft hover-lift group relative overflow-hidden animate-slide-up hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <CardContent className="p-6 text-center relative">
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${metric.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="mb-2">
                  <AnimatedCounter
                    endValue={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    className="text-3xl lg:text-4xl font-bold text-primary"
                    duration={2500}
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {metric.label}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;