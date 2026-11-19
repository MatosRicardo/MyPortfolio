import { Check, BookOpen } from "lucide-react";
import { CertificationCard } from "@/components/ui/certification-card";
import { SectionHeader } from "@/components/ui";

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-20 px-6 pb-24 pt-8 sm:pb-28">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Certificações AWS"
          title="Minha evolução na nuvem"
          description="Uma conquista consolidada e o próximo passo da minha jornada em desenvolvimento cloud."
        />

        <ol className="relative grid gap-8 md:grid-cols-2">
          <li className="relative flex flex-col gap-5">
            <div aria-hidden="true" className="absolute left-1/2 top-5 hidden h-px w-[calc(100%+2rem)] bg-gradient-to-r from-emerald-500/70 to-sky-400/50 md:block" />
            <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/50 bg-emerald-950 text-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.15)]">
              <Check className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Etapa concluída</span>
            </div>
            <CertificationCard
              title="AWS Certified Cloud Practitioner"
              issuer="Amazon Web Services"
              tags={["Cloud", "Fundamentos AWS", "Segurança"]}
              status="finalizado"
              date="novembro de 2026"
              description="Certificação conquistada em fundamentos de nuvem, serviços AWS, segurança e boas práticas."
              imageSrc="/cloud_practitioner.png"
              imageAlt="Badge oficial AWS Certified Cloud Practitioner — certificação conquistada"
            />
          </li>
          <li className="relative flex flex-col gap-5">
            <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/50 bg-sky-950 text-sky-300">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Próxima etapa em estudo</span>
            </div>
            <CertificationCard
              title="AWS Certified Developer – Associate"
              issuer="Amazon Web Services"
              tags={["Desenvolvimento", "Serverless", "AWS"]}
              status="em estudo"
              description="Preparação em andamento para a certificação, com foco no desenvolvimento, deploy e manutenção de aplicações na AWS."
              imageSrc="/develo_associate.png"
              imageAlt="Badge de referência AWS Certified Developer Associate — objetivo de estudo, certificação ainda não obtida"
            />
          </li>
        </ol>
      </div>
    </section>
  );
}
