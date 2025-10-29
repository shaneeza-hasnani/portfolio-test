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
  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let start: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  const scrollToProjects = () => smoothScroll('projects');
  const scrollToContact = () => smoothScroll('contact');
  return <section className="min-h-[85vh] flex items-center justify-center hero-gradient relative overflow-hidden pt-24 pb-12">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Headshot */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-accent rounded-full opacity-30 blur-md" />
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