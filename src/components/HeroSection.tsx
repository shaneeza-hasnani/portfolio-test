import { useState, useEffect } from "react";
import { Linkedin, FileText } from "lucide-react";
import headshotImage from "@/assets/shaneeza-new-headshot.jpg";

const HeroSection = () => {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10; // subtle movement
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
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
    },
    {
      name: "Resume",
      url: "/Resume_Hasnani.pdf",
      icon: FileText,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center py-16 relative z-10">
      {/* Profile Image */}
      <div
        className="relative mb-8"
        style={{
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
        }}
      >
        <div className="absolute -inset-3 bg-gradient-accent rounded-full opacity-25 blur-md" />
        <img
          src={headshotImage}
          alt="Shaneeza Hasnani"
          className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md"
        />
      </div>

      {/* Text */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
        Hey there! I am <span className="text-primary">Shaneeza Hasnani</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mt-3 font-medium">
        Certified Fraud Examiner (CFE) • Fraud Data Analyst • Graduate Student in Business Analytics & AI
      </p>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mt-8">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/70 backdrop-blur-md border border-border/40 text-foreground hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:scale-[1.02]"
          >
            <link.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
