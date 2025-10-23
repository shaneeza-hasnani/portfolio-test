import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Sector } from "recharts";
import { TrendingUp, Target, DollarSign, Shield } from "lucide-react";

const PerformanceCharts = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const fraudDetectionMetrics = [
    { month: 'Jan', accuracy: 95.2, precision: 89.1, recall: 91.5, falsePositives: 2.1 },
    { month: 'Feb', accuracy: 96.1, precision: 90.3, recall: 92.8, falsePositives: 1.9 },
    { month: 'Mar', accuracy: 97.5, precision: 92.7, recall: 94.2, falsePositives: 1.6 },
    { month: 'Apr', accuracy: 98.2, precision: 94.1, recall: 95.6, falsePositives: 1.3 },
    { month: 'May', accuracy: 98.9, precision: 95.8, recall: 96.9, falsePositives: 1.1 },
    { month: 'Jun', accuracy: 99.6, precision: 97.2, recall: 97.9, falsePositives: 0.8 }
  ];

  const costSavingsData = [
    { month: 'Jan', prevented: 45000, losses: 8000, net: 37000 },
    { month: 'Feb', prevented: 52000, losses: 6500, net: 45500 },
    { month: 'Mar', prevented: 68000, losses: 5200, net: 62800 },
    { month: 'Apr', prevented: 71000, losses: 4100, net: 66900 },
    { month: 'May', prevented: 89000, losses: 3500, net: 85500 },
    { month: 'Jun', prevented: 95000, losses: 2800, net: 92200 }
  ];

  const projectImpactData = [
    { name: 'Credit Card Fraud Detection', value: 35, color: '#3b82f6', gradient: 'from-blue-500 to-blue-600' },
    { name: 'Student Risk Assessment', value: 28, color: '#06b6d4', gradient: 'from-cyan-500 to-cyan-600' },
    { name: 'Wire Transfer Monitoring', value: 22, color: '#10b981', gradient: 'from-green-500 to-green-600' },
    { name: 'Real-time Dashboard', value: 15, color: '#f59e0b', gradient: 'from-orange-500 to-orange-600' }
  ];

  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;
    
    return (
      <g>
        <text x={cx} y={cy - 5} textAnchor="middle" className="fill-foreground text-base font-bold">
          {value}%
        </text>
        <text x={cx} y={cy + 15} textAnchor="middle" className="fill-muted-foreground text-xs">
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          className="drop-shadow-lg"
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 12}
          outerRadius={outerRadius + 16}
          fill={fill}
          opacity={0.3}
        />
      </g>
    );
  };

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const automationMetrics = [
    { process: 'Manual Review Time', before: 45, after: 12, improvement: 73 },
    { process: 'False Positive Rate', before: 8.5, after: 0.8, improvement: 91 },
    { process: 'Detection Speed', before: 24, after: 0.5, improvement: 98 },
    { process: 'Case Resolution', before: 72, after: 14, improvement: 81 }
  ];

  const formatCurrency = (value: number) => `$${(value / 1000).toFixed(0)}K`;
  const formatPercentage = (value: number) => `${value.toFixed(1)}%`;

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Performance <span className="text-primary">Analytics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data-driven insights showing the measurable impact of my fraud detection systems 
            and machine learning models across different projects.
          </p>
        </div>

        <div className="space-y-12">
          {/* Model Performance Trends */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Model Performance Evolution
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  6-month improvement in fraud detection accuracy and precision
                </p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={fraudDetectionMetrics}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[85, 100]} />
                    <Tooltip 
                      formatter={(value: number, name: string) => [formatPercentage(value), name]}
                      labelClassName="text-foreground"
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Line type="monotone" dataKey="accuracy" stroke="#3b82f6" strokeWidth={3} name="Accuracy" />
                    <Line type="monotone" dataKey="precision" stroke="#06b6d4" strokeWidth={2} name="Precision" />
                    <Line type="monotone" dataKey="recall" stroke="#10b981" strokeWidth={2} name="Recall" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Accuracy: 99.6%
                  </Badge>
                  <Badge variant="secondary" className="bg-cyan-100 text-cyan-700">
                    Precision: 97.2%
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Recall: 97.9%
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Cost Savings Analysis
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Financial impact of fraud prevention vs. losses prevented
                </p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={costSavingsData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={formatCurrency} />
                    <Tooltip 
                      formatter={(value: number, name: string) => [formatCurrency(value), name]}
                      labelClassName="text-foreground"
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="prevented" fill="#10b981" name="Fraud Prevented" />
                    <Bar dataKey="losses" fill="#f59e0b" name="Losses Avoided" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-center mt-4">
                  <div className="text-2xl font-bold text-primary">$500K+</div>
                  <div className="text-sm text-muted-foreground">Total Fraud Prevented</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Impact Distribution */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 bg-gradient-card shadow-soft overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Project Impact Distribution
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Hover over segments to explore project contributions
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <ResponsiveContainer width="100%" height={320}>
                    <PieChart>
                      <defs>
                        {projectImpactData.map((entry, index) => (
                          <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor={entry.color} stopOpacity={1} />
                            <stop offset="100%" stopColor={entry.color} stopOpacity={0.7} />
                          </linearGradient>
                        ))}
                      </defs>
                      <Pie
                        data={projectImpactData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                        onMouseLeave={onPieLeave}
                        activeIndex={activeIndex ?? undefined}
                        activeShape={renderActiveShape}
                        animationBegin={0}
                        animationDuration={800}
                        className="cursor-pointer transition-all"
                      >
                        {projectImpactData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={`url(#gradient-${index})`}
                            stroke="hsl(var(--background))"
                            strokeWidth={3}
                            className="transition-all duration-300 hover:opacity-90"
                          />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value: number) => [`${value}%`, 'Impact']}
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  
                  {/* Interactive Legend */}
                  <div className="w-full grid grid-cols-2 gap-3 mt-6">
                    {projectImpactData.map((entry, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer group
                          ${activeIndex === index 
                            ? 'bg-primary/10 scale-105 shadow-md' 
                            : 'hover:bg-muted/50 hover:scale-102'
                          }`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                      >
                        <div 
                          className={`w-4 h-4 rounded-full flex-shrink-0 transition-all duration-300 ${
                            activeIndex === index ? 'scale-125 shadow-lg' : ''
                          }`}
                          style={{ backgroundColor: entry.color }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium truncate group-hover:text-primary transition-colors">
                            {entry.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {entry.value}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Automation Improvements
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Before vs. After implementing ML automation systems
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {automationMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{metric.process}</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {metric.improvement}% improvement
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="text-center p-2 bg-red-50 rounded">
                          <div className="font-semibold text-red-700">Before</div>
                          <div className="text-red-600">
                            {metric.process.includes('Time') || metric.process.includes('Speed') 
                              ? `${metric.before}${metric.process.includes('Speed') ? 'h' : 'min'}`
                              : metric.process.includes('Rate') 
                                ? `${metric.before}%`
                                : `${metric.before}h`
                            }
                          </div>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded">
                          <div className="font-semibold text-green-700">After</div>
                          <div className="text-green-600">
                            {metric.process.includes('Time') || metric.process.includes('Speed')
                              ? `${metric.after}${metric.process.includes('Speed') ? 'min' : 'min'}`
                              : metric.process.includes('Rate')
                                ? `${metric.after}%`
                                : `${metric.after}h`
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Performance Indicators */}
          <Card className="border-0 bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle className="text-center">Key Performance Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.96%</div>
                  <div className="text-sm text-muted-foreground">Peak ML Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">0.8%</div>
                  <div className="text-sm text-muted-foreground">False Positive Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30s</div>
                  <div className="text-sm text-muted-foreground">Real-time Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">ML Models Deployed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PerformanceCharts;