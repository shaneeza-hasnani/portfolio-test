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
  return <div className="space-y-8 animate-fade-in">
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
    </div>;
};
export default HeroSection;