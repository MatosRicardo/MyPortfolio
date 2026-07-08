import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SobreMim from "@/app/SobreMim/page";
import Projetos from "@/app/Projetos/page";
import Habilidades from "@/app/habilidades/page";
import Contato from "@/app/contato/page";

const trajectoryItems = [
  {
    period: "mai de 2025 - o momento",
    title: "Estágio em Software Engineer Intern · Itaú Unibanco",
    description:
      "Desenvolvimento de aplicações web modernas e responsivas utilizando Angular, React e Next.js, além da criação e manutenção de APIs e funções serverless com Node.js e Python. Experiência na construção de componentes reutilizáveis com TypeScript e Angular Material, integração de aplicações por meio de APIs REST e implementação de soluções em AWS, utilizando serviços como Lambda, S3, DynamoDB e API Gateway, além de infraestrutura como código com Terraform. Atuação com versionamento em Git, participação em code reviews, desenvolvimento de testes unitários, refatoração de código e aplicação contínua de boas práticas para garantir qualidade, escalabilidade e eficiência no desenvolvimento de software.",
  },
  {
    period: "jun de 2024 - dez de 2024",
    title: "Bootcamp · Instituto PROA",
    description:
      "No Instituto PROA, aprendi fundamentos de programação em Java, desenvolvimento de APIs com Spring Boot e uso de MySQL para bancos de dados. Além disso, adquiri conhecimentos em React, JavaScript, HTML, CSS, Tailwind e Bootstrap. Também desenvolvi habilidades em Figma para design de interfaces, trabalho em equipe, comunicação e resolução de problemas",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent text-white">
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/45">
        <div className="container mx-auto flex h-13 items-center justify-between px-5 md:px-10">
          <div className="text-lg font-bold tracking-[0.2em] text-white md:text-xl">
            <Link href="/" className="transition-colors hover:text-orange-500">
              RicardoMatos.dev
            </Link>
          </div>
          <nav className="hidden gap-4 md:flex md:gap-6">
            <Link
              href="#home"
              className="relative text-xs font-medium text-gray-300 transition-all duration-300 hover:text-orange-500 md:text-sm"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="relative text-xs md:text-sm font-medium transition-colors hover:text-orange-600"
            >
              Sobre
            </Link>
            <Link
              href="#trajectory"
              className="relative text-xs md:text-sm font-medium transition-colors hover:text-orange-600"
            >
              Trajetória
            </Link>
            <Link
              href="#skills"
              className="relative text-xs md:text-sm font-medium transition-colors hover:text-orange-600"
            >
              Tecnologias
            </Link>
            <Link
              href="#projects"
              className="relative text-xs md:text-sm font-medium transition-colors hover:text-orange-600"
            >
              Projetos
            </Link>
            <Link
              href="#contact"
              className="relative text-xs md:text-sm font-medium transition-colors hover:text-orange-600"
            >
              Contatos
            </Link>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="hidden border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400 md:flex"
            asChild
          >
            <Link
              href="/Ricardo Matos - Desenvolvedor Full-Stack.pdf"
              download
              target="_blank"
            >
              <FileText className="mr-2 h-4 w-4" />
              Baixar CV
            </Link>
          </Button>
        </div>
      </header>

      <main className="relative flex flex-col items-center justify-center overflow-hidden bg-transparent px-4 md:px-0">
        <section
          id="home"
          className="relative container mx-auto flex max-w-3xl flex-col items-center py-12 text-center md:py-24 lg:py-32"
        >
          <h1 className="mb-6 text-2xl font-bold tracking-[0.08em] text-white sm:text-3xl md:text-5xl">
            Olá, sou o <span className="text-orange-500">Ricardo</span>
          </h1>
          <div className="relative mb-6 h-[180px] w-[180px] overflow-hidden rounded-full border-4 border-orange-500/40 shadow-[0_0_60px_rgba(249,115,22,0.2)] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px]">
            <Image
              src="/perfil_futuro.jpeg"
              alt="Ricardo Matos"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="mb-6 text-lg font-bold text-white sm:text-2xl md:text-3xl">
            <span className="text-orange-500">Desenvolvedor</span> Full-Stack
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="text-black hover:text-orange-600 hover:border-orange-600"
              asChild
            >
              <Link
                href="https://github.com/MatosRicardo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-black hover:text-orange-600 hover:border-orange-600"
              asChild
            >
              <Link
                href="https://linkedin.com/in/ricardomatos-developer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="mt-6 flex border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400 md:hidden"
            asChild
          >
            <Link href="/curriculo.pdf" download target="_blank">
              <FileText className="mr-2 h-4 w-4" />
              Baixar CV
            </Link>
          </Button>
        </section>
      </main>

      <SobreMim />
      <Habilidades />
      <section id="trajectory" className="px-6 pt-24 pb-20 sm:pt-28">
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
      <Projetos />
      <Contato />
      <footer className="border-t border-gray-800 py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Ricardo Matos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
