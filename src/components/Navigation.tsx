import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Briefcase, Code, BookOpen, Shield, FolderKanban } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About Me", icon: User },
    { id: "experience", label: "Work Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "skills", label: "Skills", icon: Code },
    { id: "education", label: "Education", icon: BookOpen },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-heading font-bold text-lg flex items-center gap-2 text-primary">
            <Shield className="w-5 h-5" />
            <span>Shaneeza Hasnani, CFE</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "bg-white/70 text-primary shadow-sm backdrop-blur-sm"
                        : "text-muted-foreground hover:text-primary hover:bg-white/40"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* CTA + Theme toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              className="cta-button bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-white hover:text-white transition-all duration-300"
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/40 space-y-2 bg-background/95 backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 w-full px-3 py-3 rounded-lg text-sm font-medium transition-all
                    ${
                      isActive
                        ? "bg-white/70 text-primary shadow-sm backdrop-blur-sm"
                        : "text-muted-foreground hover:text-primary hover:bg-white/40"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-border/40 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Let’s Connect
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
