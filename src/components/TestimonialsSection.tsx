import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Risk Manager",
      company: "FinTech Solutions Inc.",
      content: "Shaneeza's fraud detection models saved our company over $500K in the first year alone. Her ability to translate complex data into actionable insights is exceptional.",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Director of Analytics",
      company: "Guidehouse",
      content: "Working with Shaneeza was outstanding. Her technical presentations to senior leadership were clear, compelling, and led to immediate adoption of her solutions.",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 3,
      name: "James Rodriguez",
      role: "Lead Investigator",
      company: "NY State Attorney General",
      content: "Shaneeza's statistical analysis provided crucial evidence for our fraud prosecutions. Her attention to detail and accuracy helped us recover significant funds.",
      rating: 5,
      avatar: "JR"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            What <span className="text-primary">Others Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from colleagues and supervisors about the impact of my work in fraud detection and data analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="border-0 bg-gradient-card shadow-soft hover-lift relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary ml-auto opacity-20" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;