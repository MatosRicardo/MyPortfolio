import {
  AboutSection,
  CertificationsSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/sections";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function PortfolioHomepage() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent text-white">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
