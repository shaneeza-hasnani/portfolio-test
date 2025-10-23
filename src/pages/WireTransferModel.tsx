import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Loader2, CheckCircle, XCircle, AlertTriangle, Info, ArrowLeftRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface AnalysisResult {
  risk_level: "Low Risk" | "Medium Risk" | "High Risk" | "Critical Risk";
  confidence: number;
  anomaly_score: number;
  anomaly_indicators: string[];
  recommendation: string;
}

const WireTransferModel = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  
  const [formData, setFormData] = useState({
    senderName: "",
    senderAccount: "",
    receiverName: "",
    receiverAccount: "",
    amount: "",
    currency: "USD",
    originCountry: "",
    destinationCountry: "",
    transferDate: "",
    purpose: "",
    bank: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke("analyze-wire-transfer", {
        body: { transferData: formData }
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
        description: "Wire transfer has been analyzed successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to analyze wire transfer. Please try again.",
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
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                <ArrowLeftRight className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Wire Transfer Anomaly Detection</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered anomaly detection for international wire transfers using
              machine learning to identify suspicious patterns
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Badge variant="secondary" className="text-sm">Real-time Analysis</Badge>
              <Badge variant="secondary" className="text-sm">ML Detection</Badge>
              <Badge variant="secondary" className="text-sm">Compliance Ready</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card>
              <CardHeader>
                <CardTitle>Transfer Details</CardTitle>
                <CardDescription>
                  Enter wire transfer information for anomaly detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="senderName">Sender Name</Label>
                    <Input
                      id="senderName"
                      placeholder="John Smith"
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="senderAccount">Sender Account Number</Label>
                    <Input
                      id="senderAccount"
                      placeholder="1234567890"
                      value={formData.senderAccount}
                      onChange={(e) => setFormData({ ...formData, senderAccount: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="receiverName">Receiver Name</Label>
                    <Input
                      id="receiverName"
                      placeholder="Jane Doe"
                      value={formData.receiverName}
                      onChange={(e) => setFormData({ ...formData, receiverName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="receiverAccount">Receiver Account Number</Label>
                    <Input
                      id="receiverAccount"
                      placeholder="0987654321"
                      value={formData.receiverAccount}
                      onChange={(e) => setFormData({ ...formData, receiverAccount: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount</Label>
                      <Input
                        id="amount"
                        type="number"
                        step="0.01"
                        placeholder="10000.00"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Input
                        id="currency"
                        placeholder="USD"
                        value={formData.currency}
                        onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="originCountry">Origin Country</Label>
                    <Input
                      id="originCountry"
                      placeholder="United States"
                      value={formData.originCountry}
                      onChange={(e) => setFormData({ ...formData, originCountry: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destinationCountry">Destination Country</Label>
                    <Input
                      id="destinationCountry"
                      placeholder="United Kingdom"
                      value={formData.destinationCountry}
                      onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="transferDate">Transfer Date</Label>
                    <Input
                      id="transferDate"
                      type="date"
                      value={formData.transferDate}
                      onChange={(e) => setFormData({ ...formData, transferDate: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bank">Bank/Institution</Label>
                    <Input
                      id="bank"
                      placeholder="Chase Bank"
                      value={formData.bank}
                      onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="purpose">Transfer Purpose</Label>
                    <Textarea
                      id="purpose"
                      placeholder="Business payment for services"
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      required
                      rows={3}
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
                        <ArrowLeftRight className="w-4 h-4 mr-2" />
                        Analyze Transfer
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
                          {result.anomaly_score.toFixed(1)}% Anomaly Score
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
                      <CardTitle>Anomaly Indicators</CardTitle>
                      <CardDescription>Key factors identified in the analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {result.anomaly_indicators.map((indicator, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{indicator}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Detection Capabilities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-primary">Real-time</div>
                          <div className="text-xs text-muted-foreground">Analysis</div>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-primary">ML</div>
                          <div className="text-xs text-muted-foreground">Detection</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="h-full flex items-center justify-center">
                  <CardContent className="text-center py-12">
                    <ArrowLeftRight className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Analyze</h3>
                    <p className="text-muted-foreground">
                      Enter transfer details on the left to get started
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

export default WireTransferModel;
