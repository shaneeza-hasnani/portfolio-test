import TimelineExperience from "./TimelineExperience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            My Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of building fraud detection solutions and driving measurable impact
          </p>
        </div>
        <TimelineExperience />
      </div>
    </section>
  );
};

export default ExperienceSection;
