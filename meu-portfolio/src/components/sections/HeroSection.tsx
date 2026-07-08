import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden bg-transparent px-4 md:px-0">
      <section
        id="home"
        className="relative container mx-auto flex max-w-3xl flex-col items-center py-12 text-center md:py-24 lg:py-32"
      >
        <h1 className="mb-6 text-2xl font-bold tracking-[0.08em] text-white sm:text-3xl md:text-5xl">
          Olá, sou o <span className="text-orange-500">Ricardo Matos</span>
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
            className="border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400"
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
            className="border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400"
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
  );
}
