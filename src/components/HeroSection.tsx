import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, Mail, ExternalLink, Sparkles } from "lucide-react";
import headshotImage from "@/assets/shaneeza-new-headshot.jpg";

const HeroSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/shaneeza",
      icon: Github,
      label: "View my code and projects"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/shasnani",
      icon: Linkedin,
      label: "Connect with me professionally"
    },
    {
      name: "Resume",
      url: "/resume.pdf",
      icon: FileText,
      label: "Download my resume"
    }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-accent animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-melon animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Sparkles className="w-4 h-4" />
                <span>Available for opportunities</span>
              </div>
              
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-primary">
              Shaneeza Hasnani
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mt-2 block">
              CFE & Fraud Data Analyst {"->"} Data Scientist
            </span>
          </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                <span className="text-lg opacity-90">
                  I build machine learning systems that detect financial fraud, protect businesses, and turn complex data into clear insights that drive decisions.
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-hover transition-all duration-300"
              >
                See My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToContact}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Let's Talk
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift group"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 blur-lg" />
              <img
                src={headshotImage}
                alt="Shaneeza Hasnani - CFE & Fraud Data Analyst"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-medium hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;