const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="w-16 h-1 bg-[hsl(var(--primary))] mx-auto mb-6 rounded-full"></div>
        <p className="text-lg leading-relaxed text-foreground/90 italic">
          “As a Certified Fraud Examiner and Data Analyst, I bridge analytics with integrity — transforming anomalies
          into insights and data into digital defense.”
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
