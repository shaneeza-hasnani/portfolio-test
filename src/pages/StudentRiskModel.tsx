import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Target, AlertTriangle, ArrowLeft, Loader2, CheckCircle, XCircle, Info } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface AnalysisResult {
  risk_level: "Low Risk" | "Medium Risk" | "High Risk" | "Critical Risk";
  confidence: number;
  fraud_probability: number;
  risk_factors: string[];
  recommendation: string;
}

const StudentRiskModel = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    program: "",
    academicLevel: "Undergraduate",
    previousInstitution: "",
    gpa: "",
    applicationDate: "",
    country: "",
    documentsSubmitted: "Complete",
    paymentMethod: "Credit Card"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke("analyze-student-risk", {
        body: { applicationData: formData }
      });

      if (error) throw error;

      if (data?.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive"
        });
        return;
      }

      setResult(data.analysis);
      toast({
        title: "Analysis Complete",
        description: "Application has been analyzed successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to analyze application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low Risk": return "text-green-600 bg-green-50 border-green-200";
      case "Medium Risk": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "High Risk": return "text-orange-600 bg-orange-50 border-orange-200";
      case "Critical Risk": return "text-red-600 bg-red-50 border-red-200";
      default: return "text-muted-foreground";
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "Low Risk": return <CheckCircle className="w-6 h-6 text-green-600" />;
      case "Medium Risk": return <Info className="w-6 h-6 text-yellow-600" />;
      case "High Risk": return <AlertTriangle className="w-6 h-6 text-orange-600" />;
      case "Critical Risk": return <XCircle className="w-6 h-6 text-red-600" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-24">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Student Application Risk Assessment</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Automated anomaly detection system using Random Forest and Logistic Regression
              for identifying high-risk applications
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Badge variant="secondary" className="text-sm">25% Accuracy Improvement</Badge>
              <Badge variant="secondary" className="text-sm">20% Annual Reduction</Badge>
              <Badge variant="secondary" className="text-sm">500+ Applications/Month</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card>
              <CardHeader>
                <CardTitle>Application Details</CardTitle>
                <CardDescription>
                  Enter student application information for risk assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student Name</Label>
                    <Input
                      id="studentName"
                      placeholder="John Doe"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program">Program</Label>
                    <Input
                      id="program"
                      placeholder="Computer Science"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="academicLevel">Academic Level</Label>
                    <Select
                      value={formData.academicLevel}
                      onValueChange={(value) => setFormData({ ...formData, academicLevel: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                        <SelectItem value="Graduate">Graduate</SelectItem>
                        <SelectItem value="Doctorate">Doctorate</SelectItem>
                        <SelectItem value="Certificate">Certificate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="previousInstitution">Previous Institution</Label>
                    <Input
                      id="previousInstitution"
                      placeholder="Previous University"
                      value={formData.previousInstitution}
                      onChange={(e) => setFormData({ ...formData, previousInstitution: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gpa">GPA</Label>
                    <Input
                      id="gpa"
                      type="number"
                      step="0.01"
                      min="0"
                      max="4"
                      placeholder="3.75"
                      value={formData.gpa}
                      onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="applicationDate">Application Date</Label>
                    <Input
                      id="applicationDate"
                      type="date"
                      value={formData.applicationDate}
                      onChange={(e) => setFormData({ ...formData, applicationDate: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      placeholder="United States"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="documentsSubmitted">Documents Status</Label>
                    <Select
                      value={formData.documentsSubmitted}
                      onValueChange={(value) => setFormData({ ...formData, documentsSubmitted: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Complete">Complete</SelectItem>
                        <SelectItem value="Incomplete">Incomplete</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="paymentMethod">Payment Method</Label>
                    <Select
                      value={formData.paymentMethod}
                      onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Credit Card">Credit Card</SelectItem>
                        <SelectItem value="Wire Transfer">Wire Transfer</SelectItem>
                        <SelectItem value="Check">Check</SelectItem>
                        <SelectItem value="Financial Aid">Financial Aid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Target className="w-4 h-4 mr-2" />
                        Analyze Application
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Results Panel */}
            <div className="space-y-6">
              {result ? (
                <>
                  <Card className={`border-2 ${getRiskColor(result.risk_level)}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          {getRiskIcon(result.risk_level)}
                          {result.risk_level}
                        </CardTitle>
                        <Badge variant="outline" className="text-lg px-4 py-1">
                          {result.fraud_probability.toFixed(1)}% Risk Score
                        </Badge>
                      </div>
                      <CardDescription>
                        Model Confidence: {result.confidence.toFixed(1)}%
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Alert>
                        <AlertDescription>
                          <strong>Recommendation:</strong> {result.recommendation}
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Risk Factors</CardTitle>
                      <CardDescription>Key factors identified in the analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {result.risk_factors.map((factor, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{factor}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Model Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-primary">25%</div>
                          <div className="text-xs text-muted-foreground">Improvement</div>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-primary">20%</div>
                          <div className="text-xs text-muted-foreground">Reduction</div>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-primary">500+</div>
                          <div className="text-xs text-muted-foreground">Monthly</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="h-full flex items-center justify-center">
                  <CardContent className="text-center py-12">
                    <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Analyze</h3>
                    <p className="text-muted-foreground">
                      Enter application details on the left to get started
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentRiskModel;
