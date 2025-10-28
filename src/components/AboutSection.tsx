import { Globe, Heart, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "I build models with meticulous attention to accuracy and reliability, because in fraud detection, precision protects both money and people."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Every solution I create addresses real business challenges, focusing on measurable outcomes that matter to organizations and their customers."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "I bridge technical complexity with business understanding, ensuring that advanced analytics translate into practical, actionable insights."
    },
    {
      icon: Globe,
      title: "Growth",
      description: "I stay current with emerging technologies and methodologies, continuously expanding my expertise to deliver cutting-edge solutions."
    }
  ];
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="text-muted-foreground max-w-3xl mx-auto space-y-2">
            <p className="text-lg font-semibold">Graduate Business Analytics and AI Student @American University</p>
            <p className="text-lg font-semibold">Fraud Data Analyst @EduGuide</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl font-bold mb-6 text-center">Core Values</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift bg-card/50">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;