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
        <section className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <HeroSection />
            <AboutSection />
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