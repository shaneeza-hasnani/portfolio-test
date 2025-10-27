import { useState, useEffect } from "react";
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
  const {
    toast
  } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      const {
        data,
        error
      } = await supabase.functions.invoke("analyze-fraud", {
        body: {
          transactionData: formData
        }
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
        description: "Transaction has been analyzed successfully"
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
      case "Low":
        return "text-green-600 bg-green-50 border-green-200";
      case "Medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "High":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "Critical":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-muted-foreground";
    }
  };
  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "Low":
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case "Medium":
        return <Info className="w-6 h-6 text-yellow-600" />;
      case "High":
        return <AlertTriangle className="w-6 h-6 text-orange-600" />;
      case "Critical":
        return <XCircle className="w-6 h-6 text-red-600" />;
      default:
        return null;
    }
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-24">
        <Button variant="ghost" onClick={() => {
        navigate("/");
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      }} className="mb-6">
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
            

            {/* Results Panel */}
            
          </div>
        </div>
      </div>

      <Footer />
    </div>;
};
export default FraudModel;