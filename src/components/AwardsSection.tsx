import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
const AwardsSection = () => {
  const achievements = [{
    title: "Certified Fraud Examiner (CFE) - 2025",
    description: "Professional certification demonstrating expertise in fraud prevention, detection, and deterrence",
    url: "https://www.credly.com/badges/e18001cd-3825-47cf-8018-d0ff83f6be8f/public_url",
    label: "View my Badge"
  }, {
    title: "Dean's List Recognition - 2025",
    description: "Consistent academic excellence throughout undergraduate studies at CUNY John Jay College",
    url: "/Deans_List_JJAY.pdf",
    label: "Download my Certificate"
  }, {
    title: "ACFE Ritchie-Jennings Memorial Scholarship - 2024",
    description: "Prestigious scholarship recognizing excellence in fraud examination studies and commitment to the profession",
    url: "/ACFE_Scholarship_2024.pdf",
    label: "Download the Fraud Magazine Snippet"
  }];
  return <section id="awards" className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Awards & <span className="text-primary">Recognition</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base font-semibold">
            Recognition for excellence in fraud examination and academic achievement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => <Card key={achievement.title} className="text-center hover:shadow-hover transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 animate-scale-in flex flex-col" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardHeader className="pb-3">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg leading-tight font-bold text-center">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                <a href={achievement.url} target="_blank" rel="noopener noreferrer" {...achievement.url.startsWith("/") && {
              download: achievement.url === "/Deans_List_JJAY.pdf" ? "Shaneeza_Hasnani_Deans_List.pdf" : achievement.url === "/ACFE_Scholarship_2024.pdf" ? "Shaneeza_Hasnani_ACFE_Scholarship.pdf" : true
            }} className="inline-block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium mt-auto">
                  {achievement.label}
                </a>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default AwardsSection;