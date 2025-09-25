import TimelineExperience from "./TimelineExperience";

const ProfessionalExperience = () => {
  return (
    <section id="experience" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven track record in fraud detection and data analytics, delivering measurable results across financial crime prevention and risk assessment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <TimelineExperience />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;