import Image from "next/image";

const highlights = [
  "Desenvolvimento Full Stack com foco em experiência e performance",
  "Experiência prática em automação, APIs e integrações em nuvem",
  "Constante evolução em tecnologias modernas e boas práticas",
];

const trajectory = [
  {
    period: "mai de 2025 - o momento",
    title: "Software Engineer Intern · Itaú Unibanco",
    description:
      "Atuo como estagiario no desenvolvimento de interfaces modernas com React, Next.js e Angular, além de criar e manter APIs e lambdas com Node.js e Python. Também trabalho com AWS, Terraform, testes e boas práticas de qualidade de software.",
  },
  {
    period: "jun de 2024 - dez de 2024",
    title: "Bootcamp · Instituto PROA",
    description:
      "Participei de uma formação prática voltada para desenvolvimento full stack, com foco em construção de soluções reais, trabalho em equipe e aplicação de tecnologias modernas.",
  },
];

export default function SobreMim() {
  return (
    <section id="about" className="bg-[#060606] px-6 py-24 sm:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            Sobre mim
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-lg leading-8 text-gray-300">
              Sou Ricardo Matos, desenvolvedor Full Stack com forte interesse em
              tecnologia, inovação e criação de produtos que geram impacto real.
              Atualmente, curso Ciência da Computação e já acumulei experiência
              prática em ambientes corporativos com foco em automação, cloud e
              desenvolvimento de interfaces modernas.
            </p>
            <p className="text-lg leading-8 text-gray-300">
              Atuo na implementação de soluções com Angular, Python, AWS e boas
              práticas de desenvolvimento, sempre buscando entregar código
              limpo, escalável e alinhado às necessidades do negócio.
            </p>

            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-orange-500">
                  +2 anos
                </p>
                <p className="text-sm text-gray-400">estudo e prática</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-orange-500">
                  Full Stack
                </p>
                <p className="text-sm text-gray-400">front e back</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-orange-500">Cloud</p>
                <p className="text-sm text-gray-400">AWS & automação</p>
              </div>
            </div>

            <ul className="space-y-3 text-gray-300">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[380px]">
            <div className="absolute inset-0 rounded-[2rem] bg-orange-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-orange-500/10">
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
