import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SobreMim from "@/app/SobreMim/page";
import Projetos from "@/app/Projetos/page";
import Habilidades from "@/app/habilidades/page";
import Contato from "@/app/contato/page";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-10 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container mx-auto flex h-13 items-center justify-between px-5 md:px-10">
          <div className="text-lg md:text-xl font-bold">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              RicardoMatos.dev
            </Link>
          </div>
          <nav className="hidden md:flex gap-4 md:gap-6">
            <Link
              href="#home"
              className="relative text-xs md:text-sm font-medium transition-colors hover:text-orange-600"
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
            className="hidden md:flex text-black hover:text-orange-600 hover:border-orange-600"
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

      <main className="flex flex-col justify-center items-center -mt-5 px-4 md:px-0 bg-[url('/fundo5.jpg')] bg-cover bg-center bg-no-repeat">
        <section
          id="home"
          className="container py-12 md:py-24 lg:py-32 flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Olá, sou o <span className="text-orange-600">Ricardo Ribeiro</span>
          </h1>
          <div className="relative h-[180px] sm:h-[250px] md:h-[300px] w-[180px] sm:w-[250px] md:w-[300px] overflow-hidden rounded-full border-4 border-orange-600 mb-6">
            <Image
              src="/imgSobre.jpg"
              alt="Ricardo Matos"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-lg sm:text-2xl md:text-3xl font-bold mb-6">
            <span className="text-orange-600">Desenvolvedor</span> Full-Stack
            <br />
            Software Engineer Itaú
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
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
            className="flex text-black hover:text-orange-600 hover:border-orange-600 md:hidden mt-6"
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
