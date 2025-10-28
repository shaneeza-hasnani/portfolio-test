import { Button } from "@/components/ui/button";
import { Linkedin, FileText, Mail, ExternalLink, Sparkles, Briefcase } from "lucide-react";
import headshotImage from "@/assets/shaneeza-new-headshot.jpg";
const HeroSection = () => {
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
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary animate-pulse" />
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-accent animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full bg-melon animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-8 animate-fade-in flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <Sparkles className="w-4 h-4" />
                <span className="font-semibold">Available for opportunities</span>
              </div>
              
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-primary">Shaneeza Hasnani</span>
          </h1>
          <div className="space-y-2">
            <p className="text-xl text-muted-foreground md:text-2xl font-semibold">Certified Fraud Examiner | Aspiring Data Scientist</p>
            
          </div>
              
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(link => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" download={link.name === "Resume" ? "Shaneeza_Hasnani_Resume.pdf" : undefined} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift group" aria-label={link.label}>
                  <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              
              
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 blur-lg" />
              <img src={headshotImage} alt="Shaneeza Hasnani, CFE - Certified Fraud Examiner specializing in fraud analytics and AI-powered risk modeling" className="relative w-72 h-72 lg:w-[420px] lg:h-[420px] object-cover rounded-3xl shadow-medium hover-lift" loading="lazy" width="420" height="420" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;