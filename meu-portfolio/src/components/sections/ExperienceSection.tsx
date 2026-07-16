import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui";
import { trajectoryItems } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="trajectory" className="px-6 pb-20 pt-24 sm:pt-28">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Trajetória"
          title="Meu caminho até aqui"
          description="Experiências profissionais e formações que moldaram minha carreira."
        />

        <div className="space-y-6">
          {trajectoryItems.map((item) => (
            <Card key={item.period} as="article" className="p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {item.period}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-base leading-7 text-gray-300">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
