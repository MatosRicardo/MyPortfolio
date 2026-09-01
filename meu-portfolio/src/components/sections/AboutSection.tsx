import Image from "next/image";
import { highlights } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui";
import { StatCard } from "@/components/ui/stat-card";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 sm:py-28">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Sobre mim"
          title="Um pouco do meu perfil"
          description="Desenvolvedor Full Stack com experiência em projetos web, cloud e interfaces modernas."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-lg leading-8 text-gray-300">
              Sou Ricardo, desenvolvedor Full Stack com forte interesse em
              tecnologia, inovação e criação de produtos que geram impacto real.
              Atualmente, curso Ciência da Computação (6° semestre) e já
              acumulei experiência prática em ambientes corporativos com foco em
              cloud e desenvolvimento de interfaces modernas.
            </p>
            <p className="text-lg leading-8 text-gray-300">
              Atuo na implementação de soluções com Angular, Python e AWS e boas
              práticas de desenvolvimento, sempre buscando entregar código
              limpo, escalável e alinhado às necessidades do negócio.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <StatCard
                label="Experiência"
                value="+2 anos"
                description="Estudo e prática em front e back"
              />
              <StatCard
                label="Especialidade"
                value="Full Stack"
                description="Projetos em React, Next.js, Node.js e Java"
              />
              <StatCard
                label="Cloud"
                value="AWS"
                description="Uso de serviços serverless e infra como código"
              />
            </div>

            <ul className="space-y-3 text-gray-300">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500/90 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[380px]">
            <div className="absolute inset-0 rounded-[2rem] bg-emerald-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-500/15 bg-black/20 p-2 shadow-[0_0_60px_rgba(16,185,129,0.12)] backdrop-blur-sm">
              <Image
                src="/imgSobre.jpeg"
                alt="Foto de Ricardo Matos"
                width={500}
                height={600}
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
