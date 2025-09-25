import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import InteractiveStory from "./InteractiveStory";
import InteractiveValues from "./InteractiveValues";

const PersonalAbout = () => {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Gujarati", level: "Fluent" }
  ];

  return (
    <section id="about" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From student to specialist — transforming data into actionable fraud prevention solutions that protect businesses and drive results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Why Data Science & Fraud */}
            <Card className="border-0 bg-gradient-card shadow-soft animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Globe className="w-6 h-6 text-primary" />
                  Why Data Science & Fraud Analytics?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  My passion for fraud detection started during my undergraduate studies when I realized how vulnerable people are to financial crimes. What excites me most is the intersection of human behavior and data patterns—every fraudulent transaction tells a story, and machine learning helps us read that story before it's too late.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I bring a unique combination: the investigative mindset of a Certified Fraud Examiner and the technical skills of a data scientist. This means I don't just build models—I build systems that fraud investigators can trust and use effectively. My goal is to make financial systems safer for everyone, one algorithm at a time.
                </p>
                <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-sm font-medium text-primary mb-2">My Mission</p>
                  <p className="text-sm text-muted-foreground">
                    To protect people's financial security by transforming complex fraud patterns into actionable intelligence that prevents crimes before they happen.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Personal Story */}
            <InteractiveStory />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Values */}
            <InteractiveValues />

            {/* Languages */}
            <Card className="border-0 bg-gradient-card shadow-soft animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between">
                      <span className="font-medium">{lang.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalAbout;