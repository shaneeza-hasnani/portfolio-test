import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Education from "@/components/Education";
import PersonalAbout from "@/components/PersonalAbout";
import FraudSimulator from "@/components/FraudSimulator";
import PerformanceCharts from "@/components/PerformanceCharts";
import BlogSection from "@/components/BlogSection";
import SkillsSection from "@/components/SkillsSection";
import CaseStudyDownload from "@/components/CaseStudyDownload";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <MetricsSection />
        <ProjectsSection />
        <ProfessionalExperience />
        <Education />
        <PersonalAbout />
        <FraudSimulator />
        <PerformanceCharts />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
