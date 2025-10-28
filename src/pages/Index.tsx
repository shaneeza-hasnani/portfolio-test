import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import FraudSimulator from "@/components/FraudSimulator";
import PerformanceCharts from "@/components/PerformanceCharts";
import BlogSection from "@/components/BlogSection";
import SkillsSection from "@/components/SkillsSection";
import AwardsSection from "@/components/AwardsSection";
import CaseStudyDownload from "@/components/CaseStudyDownload";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="min-h-[85vh] flex items-center justify-center hero-gradient relative overflow-hidden pt-24 pb-12">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary animate-pulse" />
            <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-accent animate-pulse delay-1000" />
            <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full bg-melon animate-pulse delay-500" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start max-w-7xl mx-auto">
              <HeroSection />
              <div className="space-y-8">
                <div className="flex justify-center lg:justify-end animate-scale-in">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 blur-lg" />
                    <img src="/src/assets/shaneeza-new-headshot.jpg" alt="Shaneeza Hasnani, CFE - Certified Fraud Examiner specializing in fraud analytics and AI-powered risk modeling" className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-medium hover-lift" loading="lazy" width="384" height="384" />
                  </div>
                </div>
                <AboutSection />
              </div>
            </div>
          </div>
        </section>
        <SkillsSection />
        <ProjectsSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
};
export default Index;