import headshotImage from "@/assets/shaneeza-new-headshot.jpg";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            This is <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-start animate-scale-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 blur-lg" />
                <img src={headshotImage} alt="Shaneeza Hasnani - Certified Fraud Examiner and Aspiring Data Scientist" className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-medium hover-lift" loading="lazy" width="384" height="384" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a <span className="text-primary font-semibold">Certified Fraud Examiner</span> and graduate student in Business Analytics and AI at American University, I live at the intersection of data science and digital defense—where every anomaly tells a story and every model is a shield. At EduGuide, I design intelligent systems that detect fraud in real time and anticipate risk before it strikes, translating complex data into strategic action through machine learning and predictive analytics. Whether I'm building AI-powered tools, mentoring future analysts, or decoding the latest trends in fraud prevention, my work is driven by a singular mission: to turn patterns into protection and insights into impact.
              </p>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;