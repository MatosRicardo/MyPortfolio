import { trajectoryItems } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="trajectory" className="px-6 pb-20 pt-24 sm:pt-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            Trajetória
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Meu caminho até aqui
          </h2>
        </div>

        <div className="space-y-6">
          {trajectoryItems.map((item) => (
            <div
              key={item.period}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(255,255,255,0.04)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {item.period}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-base leading-7 text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
