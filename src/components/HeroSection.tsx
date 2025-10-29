import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, FileText, Mail, ExternalLink, Sparkles, Briefcase } from "lucide-react";
import headshotImage from "@/assets/shaneeza-new-headshot.jpg";
const HeroSection = () => {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setParallaxOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const socialLinks = [{
    name: "LinkedIn",
    url: "https://linkedin.com/in/shasnani",
    icon: Linkedin,
    label: "Connect with me professionally"
  }, {
    name: "Resume",
    url: "/Resume_Hasnani.pdf",
    icon: FileText,
    label: "Download my resume"
  }];
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
  return <section className="min-h-[85vh] flex items-center justify-center hero-gradient relative overflow-hidden pt-24 pb-12">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Headshot with parallax */}
          <div className="flex justify-center mb-6">
            <div 
              className="relative parallax-element"
              style={{
                transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`
              }}
            >
              <div className="absolute -inset-2 bg-gradient-accent rounded-full opacity-30 blur-md animate-pulse" />
              <img 
                src={headshotImage} 
                alt="Shaneeza Hasnani" 
                className="relative w-48 h-48 object-cover rounded-full shadow-elegant hover-lift" 
                loading="eager"
                width="192"
                height="192"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Hey! I am{" "}
              <span className="text-primary">Shaneeza Hasnani</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
              A Certified Fraud Examiner (CFE) and an Aspiring Data Scientist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map(link => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" download={link.name === "Resume" ? "Shaneeza_Hasnani_Resume.pdf" : undefined} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card/50 border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift group" aria-label={link.label}>
                <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{link.name}</span>
              </a>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;