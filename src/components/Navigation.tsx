import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Briefcase, Code, BookOpen, Shield, FolderKanban } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "about", label: "About Me", icon: User },
    { id: "experience", label: "Work Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "skills", label: "Skills", icon: Code },
    { id: "education", label: "Education", icon: BookOpen },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 120; // a bit more offset so highlight matches what you see

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-heading font-bold text-xl flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-primary font-extrabold text-base">Shaneeza Hasnani, CFE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center gap-2 px-1.5 py-1 text-sm font-medium tracking-wide transition-colors
                    ${isActive ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                  {/* underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full transition-opacity
                      ${isActive ? "bg-primary opacity-100" : "bg-primary/40 opacity-0 group-hover:opacity-100"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* CTA Button & Theme Toggle - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-5 py-2 font-semibold shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all"
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 w-full px-3 py-3 rounded-md text-sm font-semibold transition-colors
                      ${isActive ? "text-primary bg-primary/5" : "text-foreground/80 hover:text-primary hover:bg-muted/30"}`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-3 mt-4 border-t border-border flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>

              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
