import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden bg-transparent px-4 md:px-0">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-10 top-1/3 h-[220px] w-[220px] rounded-full bg-white/10 blur-3xl" />
      </div>
      <section
        id="home"
        className="relative container mx-auto flex max-w-3xl flex-col items-center py-12 text-center md:py-24 lg:py-32"
      >
        <h1 className="mb-6 text-2xl font-bold tracking-[0.08em] text-white sm:text-3xl md:text-5xl">
          Olá, sou o <span className="text-emerald-500">Ricardo Matos</span>
        </h1>
        <div className="relative mb-6 inline-flex overflow-hidden rounded-full border-4 border-emerald-500/40 shadow-[0_0_80px_rgba(16,185,129,0.24)] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] h-[180px] w-[180px]">
          <div className="absolute inset-x-0 bottom-0 mx-auto h-24 w-24 rounded-full bg-emerald-500/10 blur-3xl" />
          <Image
            src="/perfilv2.jpeg"
            alt="Ricardo Matos"
            fill
            sizes="(max-width: 768px) 180px, (max-width: 1024px) 250px, 300px"
            className="object-cover"
            priority
          />
        </div>
        <p className="mb-6 text-lg font-bold text-white sm:text-2xl md:text-3xl">
          <span className="text-emerald-500">Desenvolvedor</span> Full-Stack
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="border-white/15 bg-white/10 text-white transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/15 hover:text-emerald-300"
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
            className="border-white/15 bg-white/10 text-white transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/15 hover:text-emerald-300"
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
          className="mt-6 flex border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-300 md:hidden"
          asChild
        >
          <Link href="/curriculo.pdf" download target="_blank">
            <FileText className="mr-2 h-4 w-4" />
            Baixar CV
          </Link>
        </Button>
      </section>
    </main>
  );
}
