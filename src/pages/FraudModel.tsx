import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ShieldCheck, AlertTriangle, ArrowLeft, Loader2, CheckCircle, XCircle, Info } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface AnalysisResult {
  fraud_risk: "Low" | "Medium" | "High" | "Critical";
  confidence: number;
  fraud_probability: number;
  reasoning: string[];
  recommendation: string;
}

const FraudModel = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  
  const [formData, setFormData] = useState({
    amount: "",
    merchant: "",
    category: "Retail",
    time: "",
    location: "",
    cardLast4: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke("analyze-fraud", {
        body: { transactionData: formData }
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
        description: "Transaction has been analyzed successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to analyze transaction. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "text-green-600 bg-green-50 border-green-200";
      case "Medium": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "High": return "text-orange-600 bg-orange-50 border-orange-200";
      case "Critical": return "text-red-600 bg-red-50 border-red-200";
      default: return "text-muted-foreground";
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "Low": return <CheckCircle className="w-6 h-6 text-green-600" />;
      case "Medium": return <Info className="w-6 h-6 text-yellow-600" />;
      case "High": return <AlertTriangle className="w-6 h-6 text-orange-600" />;
      case "Critical": return <XCircle className="w-6 h-6 text-red-600" />;
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
              <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Credit Card Fraud Detection Model</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced ML-powered fraud detection system using Random Forest and Decision Tree classifiers
              with 99.96% accuracy
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Badge variant="secondary" className="text-sm">99.96% Accuracy</Badge>
              <Badge variant="secondary" className="text-sm">97.25% Recall</Badge>
              <Badge variant="secondary" className="text-sm">&lt;0.02% False Positives</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card>
              <CardHeader>
                <CardTitle>Transaction Details</CardTitle>
                <CardDescription>
                  Enter transaction information to analyze for potential fraud
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Transaction Amount ($)</Label>
                    <Input
                      id="amount"
                      type="number"
                      step="0.01"
                      placeholder="125.50"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="merchant">Merchant Name</Label>
                    <Input
                      id="merchant"
                      placeholder="Amazon.com"
                      value={formData.merchant}
                      onChange={(e) => setFormData({ ...formData, merchant: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Merchant Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Retail">Retail</SelectItem>
                        <SelectItem value="Dining">Dining</SelectItem>
                        <SelectItem value="Gas">Gas Station</SelectItem>
                        <SelectItem value="Grocery">Grocery</SelectItem>
                        <SelectItem value="Online">Online Shopping</SelectItem>
                        <SelectItem value="Travel">Travel</SelectItem>
                        <SelectItem value="Entertainment">Entertainment</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Transaction Time</Label>
                    <Input
                      id="time"
                      type="datetime-local"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="New York, NY"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardLast4">Card Last 4 Digits</Label>
                    <Input
                      id="cardLast4"
                      placeholder="1234"
                      maxLength={4}
                      value={formData.cardLast4}
                      onChange={(e) => setFormData({ ...formData, cardLast4: e.target.value })}
                      required
                    />
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
                        <ShieldCheck className="w-4 h-4 mr-2" />
                        Analyze Transaction
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
                  <Card className={`border-2 ${getRiskColor(result.fraud_risk)}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          {getRiskIcon(result.fraud_risk)}
                          Fraud Risk: {result.fraud_risk}
                        </CardTitle>
                        <Badge variant="outline" className="text-lg px-4 py-1">
                          {result.fraud_probability.toFixed(1)}% Fraud Probability
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
                      <CardTitle>Analysis Details</CardTitle>
                      <CardDescription>Key factors considered by the model</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {result.reasoning.map((reason, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{reason}</span>
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
                          <div className="text-2xl font-bold text-primary">99.96%</div>
                          <div className="text-xs text-muted-foreground">Accuracy</div>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-primary">97.25%</div>
                          <div className="text-xs text-muted-foreground">Recall</div>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-primary">&lt;0.02%</div>
                          <div className="text-xs text-muted-foreground">False Positives</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="h-full flex items-center justify-center">
                  <CardContent className="text-center py-12">
                    <ShieldCheck className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Analyze</h3>
                    <p className="text-muted-foreground">
                      Enter transaction details on the left to get started
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

export default FraudModel;
