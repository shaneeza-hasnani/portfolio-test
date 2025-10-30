const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto flex justify-center">
        <div className="card max-w-3xl text-center px-10 py-8">
          <h2 className="text-2xl font-semibold text-[hsl(var(--primary))] mb-4">About Me</h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            As a Certified Fraud Examiner and Data Analyst, I live at the intersection of data science and digital
            defense — transforming anomalies into insights and models into shields.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
