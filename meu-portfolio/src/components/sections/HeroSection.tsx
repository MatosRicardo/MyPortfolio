import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, FolderOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <main className="relative overflow-hidden bg-transparent px-6">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute right-0 top-12 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" />
      </div>

      <section
        id="home"
        aria-labelledby="hero-title"
        className="container mx-auto grid max-w-6xl scroll-mt-16 items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.35fr_0.85fr] lg:gap-16"
      >
        <div className="min-w-0">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Full Stack <span className="mx-1 text-white/30">/</span> Cloud AWS
          </p>
          <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ricardo Matos<span className="text-emerald-400">.</span>
          </h1>
          <p className="mt-5 max-w-xl text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Desenvolvimento web e
            <span className="block text-emerald-400">soluções na nuvem.</span>
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
            Atuo como estagiário de Engenharia de Software no{" "}
            <span className="font-medium text-white">Itaú</span>, desenvolvendo
            aplicações com Angular, Python e AWS. Transformo necessidades do
            negócio em interfaces, APIs e automações.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[400px]:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-xl bg-emerald-400 px-6 text-base font-semibold text-emerald-950 hover:bg-emerald-300 focus-visible:ring-emerald-400"
              asChild
            >
              <Link href="#projects">
                <FolderOpen aria-hidden="true" />
                Ver projetos
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-white/20 bg-white/5 px-6 text-base text-white hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-emerald-300 focus-visible:ring-emerald-400"
              asChild
            >
              <a href="/curriculo.pdf" download>
                <Download aria-hidden="true" />
                Baixar currículo
              </a>
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap gap-6 text-sm text-gray-300">
            <a
              href="https://github.com/MatosRicardo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm transition-colors hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ricardomatos-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm transition-colors hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>

          <Link
            href="#certifications"
            className="mt-6 inline-flex max-w-full items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 py-3 pl-3 pr-5 transition-colors hover:border-emerald-400/50 hover:bg-emerald-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
          >
            <Image
              src="/cloud_practitioner.png"
              alt=""
              width={52}
              height={52}
              className="shrink-0"
            />
            <span className="min-w-0">
              <span className="block text-sm font-medium text-emerald-400">Certificação AWS conquistada</span>
              <span className="mt-1 block text-sm text-white">AWS Certified Cloud Practitioner</span>
            </span>
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[380px]">
          <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-emerald-500/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-3 -right-3 left-6 top-6 rounded-[2rem] border border-emerald-500/25" aria-hidden="true" />
          <div className="relative aspect-[4/4.3] overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src="/perfilv2.jpeg"
                alt="Retrato de Ricardo Matos, desenvolvedor Full Stack"
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 408px) 360px, calc(100vw - 48px)"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
