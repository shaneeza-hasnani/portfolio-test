import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, CheckCircle, XCircle, Calculator, RefreshCw } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface TransactionData {
  amount: number;
  merchant: string;
  location: string;
  time: string;
  cardType: string;
  previousTransactions: number;
}

const FraudSimulator = () => {
  const [transaction, setTransaction] = useState<TransactionData>({
    amount: 150,
    merchant: "Online Store",
    location: "New York, NY",
    time: "22:30",
    cardType: "credit",
    previousTransactions: 3
  });
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    fraudScore: number;
    riskLevel: 'low' | 'medium' | 'high';
    factors: string[];
    recommendation: string;
  } | null>(null);

  const calculateFraudScore = () => {
    setIsAnalyzing(true);
    
    // Simulate ML model processing delay
    setTimeout(() => {
      let score = 0;
      const factors = [];
      
      // Amount-based scoring
      if (transaction.amount > 500) {
        score += 25;
        factors.push("High transaction amount");
      } else if (transaction.amount > 200) {
        score += 15;
        factors.push("Moderate transaction amount");
      }
      
      // Time-based scoring
      const hour = parseInt(transaction.time.split(':')[0]);
      if (hour >= 22 || hour <= 5) {
        score += 20;
        factors.push("Unusual transaction time");
      }
      
      // Location-based scoring
      if (transaction.location.includes("International") || transaction.location.includes("Unknown")) {
        score += 30;
        factors.push("High-risk location");
      }
      
      // Merchant-based scoring
      if (transaction.merchant.includes("Online") || transaction.merchant.includes("Digital")) {
        score += 10;
        factors.push("Online/digital merchant");
      }
      
      // Transaction frequency
      if (transaction.previousTransactions > 5) {
        score += 15;
        factors.push("High transaction frequency");
      } else if (transaction.previousTransactions === 0) {
        score += 25;
        factors.push("First-time transaction");
      }
      
      // Card type
      if (transaction.cardType === "debit") {
        score += 5;
        factors.push("Debit card usage");
      }
      
      // Determine risk level
      let riskLevel: 'low' | 'medium' | 'high';
      let recommendation: string;
      
      if (score <= 20) {
        riskLevel = 'low';
        recommendation = "Transaction approved - Normal risk profile";
      } else if (score <= 50) {
        riskLevel = 'medium';
        recommendation = "Additional verification recommended";
      } else {
        riskLevel = 'high';
        recommendation = "Transaction blocked - High fraud risk detected";
      }
      
      setResult({
        fraudScore: Math.min(score, 100),
        riskLevel,
        factors,
        recommendation
      });
      
      setIsAnalyzing(false);
    }, 2000);
  };

  const resetSimulator = () => {
    setResult(null);
    setTransaction({
      amount: 150,
      merchant: "Online Store",
      location: "New York, NY",
      time: "22:30",
      cardType: "credit",
      previousTransactions: 3
    });
  };

  const getRiskColor = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
    }
  };

  const getRiskIcon = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'medium': return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'high': return <XCircle className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section id="fraud-simulator" className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Interactive <span className="text-primary">Fraud Detection</span> Simulator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience how my machine learning models analyze transactions in real-time. 
            Adjust parameters and see instant fraud risk assessments.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <Card className="border-0 bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Transaction Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={transaction.amount}
                    onChange={(e) => setTransaction({...transaction, amount: Number(e.target.value)})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="previousTransactions">Previous Transactions (24h)</Label>
                  <Input
                    id="previousTransactions"
                    type="number"
                    value={transaction.previousTransactions}
                    onChange={(e) => setTransaction({...transaction, previousTransactions: Number(e.target.value)})}
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="merchant">Merchant Type</Label>
                <Select
                  value={transaction.merchant}
                  onValueChange={(value) => setTransaction({...transaction, merchant: value})}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Online Store">Online Store</SelectItem>
                    <SelectItem value="Gas Station">Gas Station</SelectItem>
                    <SelectItem value="Restaurant">Restaurant</SelectItem>
                    <SelectItem value="ATM">ATM</SelectItem>
                    <SelectItem value="Digital Service">Digital Service</SelectItem>
                    <SelectItem value="International Vendor">International Vendor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="location">Transaction Location</Label>
                <Select
                  value={transaction.location}
                  onValueChange={(value) => setTransaction({...transaction, location: value})}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="New York, NY">New York, NY</SelectItem>
                    <SelectItem value="Los Angeles, CA">Los Angeles, CA</SelectItem>
                    <SelectItem value="Chicago, IL">Chicago, IL</SelectItem>
                    <SelectItem value="International - Europe">International - Europe</SelectItem>
                    <SelectItem value="International - Asia">International - Asia</SelectItem>
                    <SelectItem value="Unknown Location">Unknown Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="time">Transaction Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={transaction.time}
                    onChange={(e) => setTransaction({...transaction, time: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="cardType">Card Type</Label>
                  <Select
                    value={transaction.cardType}
                    onValueChange={(value) => setTransaction({...transaction, cardType: value})}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credit">Credit Card</SelectItem>
                      <SelectItem value="debit">Debit Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={calculateFraudScore} 
                  disabled={isAnalyzing}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Calculator className="w-4 h-4 mr-2" />
                      Analyze Transaction
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={resetSimulator}>
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card className="border-0 bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                Fraud Risk Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!result && !isAnalyzing && (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Click "Analyze Transaction" to see fraud risk assessment</p>
                  </div>
                </div>
              )}

              {isAnalyzing && (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center space-y-4">
                    <RefreshCw className="w-12 h-12 mx-auto text-primary animate-spin" />
                    <div>
                      <p className="font-medium">Processing transaction...</p>
                      <p className="text-sm text-muted-foreground">Running ML fraud detection model</p>
                    </div>
                    <Progress value={67} className="w-48 mx-auto" />
                  </div>
                </div>
              )}

              {result && (
                <div className="space-y-6 animate-fade-in">
                  {/* Fraud Score */}
                  <div className="text-center">
                    <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-muted/50 mb-4">
                      <div className="text-3xl font-bold text-primary">
                        {result.fraudScore}%
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Fraud Risk Score</h3>
                  </div>

                  {/* Risk Level */}
                  <div className="text-center">
                    <Badge className={`${getRiskColor(result.riskLevel)} px-4 py-2 text-sm font-medium`}>
                      <span className="flex items-center gap-2">
                        {getRiskIcon(result.riskLevel)}
                        {result.riskLevel.toUpperCase()} RISK
                      </span>
                    </Badge>
                  </div>

                  {/* Recommendation */}
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Recommendation</h4>
                    <p className="text-sm text-muted-foreground">{result.recommendation}</p>
                  </div>

                  {/* Risk Factors */}
                  <div>
                    <h4 className="font-semibold mb-3">Risk Factors Detected</h4>
                    <div className="space-y-2">
                      {result.factors.map((factor, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span>{factor}</span>
                        </div>
                      ))}
                      {result.factors.length === 0 && (
                        <p className="text-sm text-muted-foreground italic">No significant risk factors detected</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Technical Details */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Feature Engineering</h4>
                  <p className="text-sm text-muted-foreground">
                    Extract key features from transaction data including amount, time, location, and merchant patterns.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">ML Model Scoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Apply trained Random Forest and Decision Tree models to calculate fraud probability scores.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Risk Assessment</h4>
                  <p className="text-sm text-muted-foreground">
                    Generate actionable recommendations based on risk threshold and business rules.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FraudSimulator;