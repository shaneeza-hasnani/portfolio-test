import { useState, useEffect } from "react";
import { Linkedin, FileText } from "lucide-react";
import headshotImage from "@/assets/shaneeza-new-headshot.jpg";

const HeroSection = () => {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      setParallaxOffset({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/shasnani",
      icon: Linkedin,
      label: "Connect with me professionally",
    },
    {
      name: "Resume",
      url: "/Resume_Hasnani.pdf",
      icon: FileText,
      label: "Download my resume",
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-transparent relative overflow-hidden pt-12 md:pt-16 pb-8 transition-colors duration-700">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          {/* Headshot */}
          <div className="flex justify-center mb-4">
            <div
              className="relative parallax-element"
              style={{
                transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
              }}
            >
              <div className="absolute -inset-2 bg-gradient-accent rounded-full opacity-25 blur-md animate-pulse" />
              <img
                src={headshotImage}
                alt="Shaneeza Hasnani"
                className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg hover-lift"
                loading="eager"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Hey! I’m <span className="text-primary">Shaneeza Hasnani</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
              Certified Fraud Examiner (CFE) • Fraud Data Analyst • Graduate Student in Business Analytics & AI
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                download={link.name === "Resume" ? "Shaneeza_Hasnani_Resume.pdf" : undefined}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/40 hover:bg-primary hover:text-primary-foreground shadow-sm transition-all duration-300 hover-lift group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
