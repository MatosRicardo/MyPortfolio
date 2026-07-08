import SobreMim from "@/app/SobreMim/page";
import Projetos from "@/app/Projetos/page";
import Habilidades from "@/app/habilidades/page";
import Contato from "@/app/contato/page";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent text-white">
      <SiteHeader />
      <HeroSection />
      <SobreMim />
      <Habilidades />
      <ExperienceSection />
      <Projetos />
      <Contato />
      <SiteFooter />
    </div>
  );
}
