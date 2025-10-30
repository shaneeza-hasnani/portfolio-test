import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp, Shield, Database, Brain } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Fraud Detection: From Rule-Based to AI-Powered Systems",
      excerpt: "Exploring how machine learning has revolutionized fraud detection, from traditional rule-based approaches to sophisticated AI models that adapt in real-time.",
      date: "2024-03-15",
      readTime: "6 min read",
      category: "Fraud Detection",
      tags: ["Machine Learning", "Fraud Detection", "AI"],
      icon: Shield,
      featured: true
    },
    {
      id: 2,
      title: "Feature Engineering Best Practices for Financial Data",
      excerpt: "A deep dive into effective feature engineering techniques specifically for financial and fraud detection datasets, including time-based features and anomaly indicators.",
      date: "2024-02-28",
      readTime: "8 min read",
      category: "Data Science",
      tags: ["Feature Engineering", "Financial Data", "Best Practices"],
      icon: Database
    },
    {
      id: 3,
      title: "Interpreting Black Box Models in Financial Crime Prevention",
      excerpt: "Making complex machine learning models explainable to compliance teams and stakeholders without sacrificing model performance.",
      date: "2024-02-10",
      readTime: "5 min read",
      category: "Model Interpretability",
      tags: ["Explainable AI", "Compliance", "Model Interpretation"],
      icon: Brain
    },
    {
      id: 4,
      title: "Building Robust Fraud Detection Pipelines: Lessons from Production",
      excerpt: "Real-world insights on deploying and maintaining fraud detection systems in production environments, including monitoring and continuous improvement strategies.",
      date: "2024-01-20",
      readTime: "10 min read",
      category: "MLOps",
      tags: ["MLOps", "Production", "Pipeline Design"],
      icon: TrendingUp
    }
  ];

  const categories = ["All", "Fraud Detection", "Data Science", "Model Interpretability", "MLOps"];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-12 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Insights & <span className="text-primary">Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge, lessons learned, and practical insights from the intersection 
            of data science and financial crime prevention.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" 
                ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                : "hover:bg-primary hover:text-primary-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card 
            key={post.id} 
            className="mb-12 border-0 shadow-medium hover-lift animate-slide-up bg-white/70 backdrop-blur-md border border-border/40"
          >
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl leading-tight hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="p-8 rounded-2xl bg-primary/10">
                  <post.icon className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card 
              key={post.id} 
              className="project-card cursor-pointer group animate-slide-up bg-white/70 backdrop-blur-md border border-border/40 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <post.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{post.tags.length - 2}
                    </Badge>
                  )}
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Posts */}
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;