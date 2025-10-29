import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <section ref={sectionRef} id="about" className="py-8 md:py-16 -mt-12 bg-background section-fade-top section-fade-bottom">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 scroll-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed">
            As a <span className="text-primary font-semibold">Certified Fraud Examiner</span> and graduate student in Business Analytics and AI at American University, I live at the intersection of data science and digital defense—where every anomaly tells a story and every model is a shield. At EduGuide, I design intelligent systems that detect fraud in real time and anticipate risk before it strikes, translating complex data into strategic action through machine learning and predictive analytics. Whether I'm building AI-powered tools, mentoring future analysts, or decoding the latest trends in fraud prevention, my work is driven by a singular mission: to turn patterns into protection and insights into impact.
          </p>
        </div>
      </div>
    </section>;
};
export default AboutSection;