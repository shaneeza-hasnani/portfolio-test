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
  return <div className="animate-fade-in space-y-6">
      {/* Content */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
          Hi, I'm{" "}
          <span className="text-primary">Shaneeza Hasnani</span>
        </h1>
        <p className="text-lg text-muted-foreground md:text-xl">Certified Fraud Examiner | Aspiring Data Scientist</p>
      </div>

      {/* Image */}
      <div className="flex justify-center lg:justify-start">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-accent rounded-2xl opacity-15 blur-md" />
          <img src={headshotImage} alt="Shaneeza Hasnani, CFE - Certified Fraud Examiner specializing in fraud analytics and AI-powered risk modeling" className="relative w-64 h-64 lg:w-72 lg:h-72 object-cover rounded-2xl shadow-medium" loading="lazy" width="288" height="288" />
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-3">
        {socialLinks.map(link => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" download={link.name === "Resume" ? "Shaneeza_Hasnani_Resume.pdf" : undefined} className="flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group" aria-label={link.label}>
            <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>)}
      </div>
    </div>;
};
export default HeroSection;