import NavPills from "@/components/navigation/NavPills";
import HeroSection from "@/components/sections/HeroSection";
import SummarySection from "@/components/sections/SummarySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import LearningSection from "@/components/sections/LearningSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg text-primary">
      {/* Pinned 3-Pill Left Navigation */}
      <NavPills />

      {/* Main Page Flow */}
      <div className="flex flex-col w-full">
        <HeroSection />
        <SummarySection />
        <ProjectsSection />
        <ExperienceSection />
        <LearningSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
