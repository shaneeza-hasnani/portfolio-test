import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Users, Globe, Brain, Shield, BarChart3, Code2 } from "lucide-react";

const InteractiveValues = () => {
  const [selectedValue, setSelectedValue] = useState(0);

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "In fraud detection, accuracy isn't just a metric - it's what protects real money and real people from financial crime.",
      impact: "25% accuracy improvement",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Heart, 
      title: "Impact",
      description: "Every algorithm I build addresses genuine business challenges, creating measurable value that matters to organizations.",
      impact: "$500K+ fraud identified",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Collaboration", 
      description: "I translate complex technical solutions into clear business insights that teams can understand and act on.",
      impact: "Cross-functional expertise",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Growth",
      description: "Continuously expanding my expertise in emerging technologies to deliver cutting-edge fraud prevention solutions.",
      impact: "Always learning",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const skillCategories = [
    {
      title: "Programming & Data",
      skills: ["R", "Python", "SQL", "C++", "Scala", "SAS", "SPSS"]
    },
    {
      title: "Visualization & BI",
      skills: ["Tableau", "Microsoft Power BI", "Excel (Advanced)"]
    },
    {
      title: "Machine Learning",
      skills: ["Random Forest", "Logistic Regression", "Decision Trees", "Anomaly Detection", "Predictive Analysis"]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Values Section */}
      <Card className="border-0 bg-gradient-card shadow-medium">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            What Drives Me
          </CardTitle>
          <CardDescription>The principles that guide my approach to data science</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedValue(index)}
                  className={`p-3 rounded-lg text-left transition-all duration-300 border-2 ${
                    selectedValue === index 
                      ? 'border-primary bg-primary/5' 
                      : 'border-transparent hover:border-primary/30 hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <IconComponent className={`w-4 h-4 transition-colors ${
                      selectedValue === index ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <span className="font-semibold text-sm">{value.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
          
          <div className="animate-fade-in bg-muted/30 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${values[selectedValue].color}`}>
                {(() => {
                  const IconComponent = values[selectedValue].icon;
                  return <IconComponent className="w-4 h-4 text-white" />;
                })()}
              </div>
              <div>
                <h4 className="font-semibold text-sm">{values[selectedValue].title}</h4>
                <Badge variant="outline" className="text-xs">
                  {values[selectedValue].impact}
                </Badge>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {values[selectedValue].description}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Skills and Expertise */}
      <Card className="border-0 bg-gradient-card shadow-soft">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            Skills and Expertise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h4 className="font-semibold text-sm mb-2 text-muted-foreground">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveValues;