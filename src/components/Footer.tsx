import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/shaneeza",
      icon: Github,
      label: "View my code"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/shasnani",
      icon: Linkedin,
      label: "Connect professionally"
    },
    {
      name: "Email",
      url: "mailto:hasnani.shaneeza@gmail.com",
      icon: Mail,
      label: "Send me an email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="font-bold text-2xl">
                <span className="text-primary">Shaneeza</span>
                <span className="text-muted-foreground">.</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Data Science & Fraud Analytics Specialist dedicated to building trustworthy, 
              impactful models that protect businesses and drive intelligent decision-making.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Washington, DC</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Shaneeza Hasnani. All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Available for opportunities
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;