import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Target, TrendingUp, Database, BarChart3, Shield, Users, Clock, CheckCircle, Code, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const StudentRiskShowcase = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const keyMetrics = [
    { label: "Monthly Classifications", value: "200k+", icon: Users, color: "text-blue-500" },
    { label: "Enhanced Accuracy", value: "+25%", icon: Target, color: "text-green-500" },
    { label: "Annual Reduction", value: "20%", icon: TrendingUp, color: "text-orange-500" },
    { label: "Datasets Analyzed", value: "500+/mo", icon: Database, color: "text-purple-500" },
    { label: "Review Time Saved", value: "15%", icon: Clock, color: "text-cyan-500" },
    { label: "Model Accuracy", value: "92%", icon: Shield, color: "text-red-500" },
  ];

  const modelFeatures = [
    { feature: "Email Domain Validation", importance: 95, model: "Random Forest" },
    { feature: "GPA-Program Consistency", importance: 88, model: "Logistic Regression" },
    { feature: "Document Completion", importance: 82, model: "Random Forest" },
    { feature: "Geographic Risk Score", importance: 78, model: "Logistic Regression" },
    { feature: "Payment Pattern Analysis", importance: 75, model: "Random Forest" },
    { feature: "Application Timing", importance: 68, model: "Logistic Regression" },
  ];

  const technologies = [
    { name: "Python", usage: "Model Development", icon: Code },
    { name: "Random Forest", usage: "Primary Classifier", icon: Target },
    { name: "Logistic Regression", usage: "Secondary Model", icon: BarChart3 },
    { name: "SQL", usage: "Data Analysis", icon: Database },
    { name: "Power BI", usage: "Dashboard Automation", icon: TrendingUp },
    { name: "Scikit-learn", usage: "ML Framework", icon: Zap },
  ];

  const pipeline = [
    { step: 1, name: "Data Ingestion", description: "Extract 500+ payment datasets monthly via SQL" },
    { step: 2, name: "Feature Engineering", description: "Transform raw data into model-ready features" },
    { step: 3, name: "Ensemble Prediction", description: "Random Forest + Logistic Regression scoring" },
    { step: 4, name: "Risk Classification", description: "Automated scoring pipeline categorization" },
    { step: 5, name: "Dashboard Update", description: "Real-time Power BI visualization" },
    { step: 6, name: "Team Notification", description: "Alerts to admissions, compliance, IT teams" },
  ];

  const results = [
    { metric: "False Positive Rate", before: "4.2%", after: "0.8%", improvement: "81%" },
    { metric: "Processing Time", before: "12 hrs", after: "2 hrs", improvement: "83%" },
    { metric: "Manual Reviews", before: "450/mo", after: "270/mo", improvement: "40%" },
    { metric: "Detection Rate", before: "67%", after: "92%", improvement: "37%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-24">
        <Button
          variant="ghost"
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Student Application Risk Assessment</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade ML system using Random Forest and Logistic Regression ensemble models
              to classify 200k+ high-risk applications monthly with 25% enhanced accuracy
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-2">Random Forest</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Logistic Regression</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Python</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">SQL</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Power BI</Badge>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <Card key={metric.label}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-8 h-8 ${metric.color}`} />
                      <div className="text-3xl font-bold">{metric.value}</div>
                    </div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Tabbed Content */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="models">Model Architecture</TabsTrigger>
              <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                  <CardDescription>Automated anomaly detection system for educational institutions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Problem Statement
                    </h3>
                    <p className="text-muted-foreground">
                      Educational institutions needed to efficiently process and identify potentially fraudulent 
                      applications from massive volumes while maintaining compliance and reducing manual review time. 
                      Traditional rule-based systems were generating high false positive rates and consuming significant 
                      staff resources.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      Solution Approach
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Engineered anomaly detection models in Python using Random Forest and Logistic Regression</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Developed automated scoring pipelines processing 200k+ applications monthly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Analyzed 500+ payment datasets monthly using SQL and Python for pattern recognition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Designed and automated Power BI dashboards for real-time monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Delivered prescriptive recommendations to admissions, compliance, and IT teams</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Technology Stack</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {technologies.map((tech) => {
                        const Icon = tech.icon;
                        return (
                          <div key={tech.name} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                            <Icon className="w-5 h-5 text-primary" />
                            <div>
                              <div className="font-medium">{tech.name}</div>
                              <div className="text-sm text-muted-foreground">{tech.usage}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="models" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ensemble Learning Architecture</CardTitle>
                  <CardDescription>Random Forest + Logistic Regression combined scoring approach</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Feature Importance Rankings</h3>
                    <div className="space-y-4">
                      {modelFeatures.map((item) => (
                        <div key={item.feature}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="font-medium">{item.feature}</span>
                              <Badge variant="outline" className="text-xs">{item.model}</Badge>
                            </div>
                            <span className="text-sm text-muted-foreground">{item.importance}%</span>
                          </div>
                          <Progress value={item.importance} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="text-lg">Random Forest</CardTitle>
                        <CardDescription>Primary Classifier</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>100 decision trees ensemble</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Handles non-linear patterns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Feature importance ranking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Robust to outliers</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="text-lg">Logistic Regression</CardTitle>
                        <CardDescription>Secondary Model</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Interpretable coefficients</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Probability calibration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Fast inference time</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Linear relationship analysis</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pipeline" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Automated Scoring Pipeline</CardTitle>
                  <CardDescription>End-to-end workflow for processing 200k+ applications monthly</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {pipeline.map((stage, index) => (
                      <div key={stage.step} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          {stage.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{stage.name}</h3>
                          <p className="text-sm text-muted-foreground">{stage.description}</p>
                        </div>
                        {index < pipeline.length - 1 && (
                          <div className="flex-shrink-0 w-px h-12 bg-border ml-5 mt-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Power BI Dashboard Integration</CardTitle>
                  <CardDescription>Real-time monitoring and reporting capabilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2">Dashboard Features</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Real-time risk score visualization</li>
                        <li>• Daily classification volume trends</li>
                        <li>• Geographic risk heat maps</li>
                        <li>• Model performance metrics</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2">Automated Reports</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Weekly summary to compliance team</li>
                        <li>• Monthly KPI reports to leadership</li>
                        <li>• Alert notifications for critical cases</li>
                        <li>• Audit trail documentation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="impact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Measurable Business Impact</CardTitle>
                  <CardDescription>Quantified improvements across key performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {results.map((result) => (
                        <div key={result.metric} className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-3">{result.metric}</h4>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-muted-foreground">{result.before}</div>
                              <div className="text-xs text-muted-foreground">Before</div>
                            </div>
                            <TrendingUp className="w-6 h-6 text-green-500" />
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{result.after}</div>
                              <div className="text-xs text-muted-foreground">After</div>
                            </div>
                          </div>
                          <div className="text-center">
                            <Badge variant="secondary" className="text-green-600">
                              {result.improvement} Improvement
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4">Key Achievements</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Enhanced fraud detection accuracy by 25%</span>
                        </div>
                        <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Reduced suspicious applications by 20% annually</span>
                        </div>
                        <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Streamlined review time by 15% via automation</span>
                        </div>
                        <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Successfully classified 200k+ transactions monthly</span>
                        </div>
                        <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Analyzed 500+ payment datasets monthly</span>
                        </div>
                        <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Delivered prescriptive recommendations to 3 teams</span>
                        </div>
                      </div>
                    </div>

                    <Card className="bg-muted border-0">
                      <CardContent className="pt-6">
                        <div className="text-center space-y-2">
                          <p className="text-lg font-semibold">System Uptime & Reliability</p>
                          <div className="flex items-center justify-center gap-4">
                            <div>
                              <div className="text-3xl font-bold text-primary">99.8%</div>
                              <div className="text-sm text-muted-foreground">Uptime</div>
                            </div>
                            <div className="h-12 w-px bg-border" />
                            <div>
                              <div className="text-3xl font-bold text-primary">&lt;2s</div>
                              <div className="text-sm text-muted-foreground">Avg Response</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentRiskShowcase;
