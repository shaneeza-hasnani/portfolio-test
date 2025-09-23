import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, BarChart3 } from "lucide-react";

const CaseStudyDownload = () => {
  const caseStudies = [
    {
      title: "Fraud Detection ML Models",
      description: "Comprehensive analysis of machine learning approaches to credit card fraud detection",
      pages: 12,
      insights: "Model performance, feature engineering strategies, and business impact",
      downloadUrl: "/case-studies/fraud-detection-ml-case-study.pdf"
    },
    {
      title: "Student Risk Assessment System",
      description: "Automated anomaly detection for educational service applications",
      pages: 8,
      insights: "Risk scoring algorithms, automation workflows, and operational improvements",
      downloadUrl: "/case-studies/student-risk-assessment-case-study.pdf"
    },
    {
      title: "Medicaid Fraud Investigation",
      description: "Statistical analysis supporting healthcare fraud prosecutions",
      pages: 15,
      insights: "Evidence analysis methods, recovery strategies, and legal support",
      downloadUrl: "/case-studies/medicaid-fraud-investigation-case-study.pdf"
    }
  ];

  const handleDownload = (url: string, title: string) => {
    // In a real implementation, this would trigger the download
    // For now, we'll show a placeholder action
    alert(`Case study "${title}" download would begin here. This is a demo - actual PDFs would be generated with detailed technical analysis.`);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Download <span className="text-primary">Case Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get detailed technical analysis of my fraud detection projects, methodologies, and business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.title}
              className="border-0 bg-gradient-card shadow-soft hover-lift group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <FileText className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">{study.pages} pages</div>
                    <div className="text-xs text-muted-foreground">PDF Format</div>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {study.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {study.description}
                </p>
                
                <div className="flex items-start gap-2">
                  <BarChart3 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Key Insights:</span> {study.insights}
                  </p>
                </div>
                
                <Button 
                  onClick={() => handleDownload(study.downloadUrl, study.title)}
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  variant="outline"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDownload;