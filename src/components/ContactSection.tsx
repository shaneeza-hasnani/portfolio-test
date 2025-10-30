import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I’ll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at hasnani.shaneeza@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:hasnani.shaneeza@gmail.com",
      description: "Best way to reach me",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/shasnani",
      description: "Professional network",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/shaneeza-hasnani",
      description: "Code repositories",
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+12109357217",
      description: "Call for urgent matters",
    },
  ];

  return (
    <section id="contact" className="py-12 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Let’s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether it’s collaborating on a project, exploring new ideas, or discussing data-driven fraud detection —
            I’d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-2 animate-slide-up">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Optional"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What’s this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or how I can help..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6 animate-scale-in">
            <Card className="border-none bg-transparent shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold">Get in Touch</CardTitle>
                <CardDescription>Multiple ways to connect</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card flex items-center gap-4 p-4 w-full hover-lift transition-all bg-white/70 backdrop-blur-md border border-border/40 rounded-lg hover:shadow-lg hover:scale-[1.02]"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-medium">{info.label}</span>
                      <span className="text-sm text-muted-foreground">{info.description}</span>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
