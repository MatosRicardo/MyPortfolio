import { CertificationCard } from "@/components/ui/certification-card";
import { SectionHeader } from "@/components/ui";

export function CertificationsSection() {
  return (
    <section id="certifications" className="px-6 py-24 sm:py-28">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Certificações"
          title="Certificações relevantes"
          description="Certificados técnicos que reforçam conhecimento em cloud, IA e desenvolvimento."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <CertificationCard
            title="GitHub Foundations"
            issuer="GitHub"
            tags={["Git", "GitHub", "Colaboração"]}
            status="finalizado"
            date="janeiro 2025"
            imageSrc="/github_fundation.png"
            imageAlt="Certificado GitHub Foundations"
          />

          <CertificationCard
            title="AWS Certified AI Practitioner"
            issuer="AWS"
            tags={["AI", "Machine Learning", "Cloud"]}
            status="finalizado"
            date="agosto 2026"
            dateLabel="Prova agendada"
            imageSrc="/Ia_practitioner.png"
            imageAlt="Certificado AWS AI Practitioner"
          />

          <CertificationCard
            title="AWS Certified Cloud Practitioner"
            issuer="AWS"
            tags={["Cloud", "Infraestrutura", "AWS"]}
            status="finalizado"
            date="setembro 2026"
            dateLabel="Prova agendada"
            imageSrc="/cloud_practitioner.png"
            imageAlt="Certificado AWS Cloud Practitioner"
          />

          <CertificationCard
            title="AWS Certified Developer – Associate"
            issuer="AWS"
            tags={["Cloud", "Developer", "AWS"]}
            status="em estudo"
            progress={70}
            imageSrc="/develo_associate.png"
            imageAlt="Certificado AWS Developer Associate"
          />
        </div>
      </div>
    </section>
  );
}
