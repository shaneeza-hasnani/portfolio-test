import { useEffect, useRef } from "react";
import TimelineExperience from "./TimelineExperience";

const ExperienceSection = () => {
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

  return <section ref={sectionRef} id="experience" className="py-16 md:py-24 bg-background section-fade-top section-fade-bottom">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            My Work <span className="text-primary">Experience</span>
          </h2>
          
        </div>
        <TimelineExperience />
      </div>
    </section>;
};
export default ExperienceSection;