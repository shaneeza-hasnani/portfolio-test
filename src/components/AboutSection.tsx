import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Globe } from "lucide-react";

const AboutSection = () => {
  const quickInfo = {
    currentRole: "Fraud Data Analyst",
    company: "EduGuide Overseas",
    education: "MS in Business Analytics & AI",
    school: "American University",
    languages: ["English", "Hindi", "Gujarati"]
  };

  return (
    <Card className="animate-fade-in border-l-4 border-l-primary bg-card/50 h-fit">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl">Quick Info</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary text-primary-foreground">
            <Briefcase className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">{quickInfo.currentRole}</p>
            <p className="text-sm text-muted-foreground">{quickInfo.company}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-accent text-accent-foreground">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">{quickInfo.education}</p>
            <p className="text-sm text-muted-foreground">{quickInfo.school}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-secondary text-secondary-foreground">
            <Globe className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm mb-2">Languages</p>
            <div className="flex flex-wrap gap-1.5">
              {quickInfo.languages.map((lang) => (
                <Badge key={lang} variant="outline" className="text-xs">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
