import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SobreMim from "../sobremim/page";
import Projetos from "../projetos/page";
import Habilidades from "../habilidades/page";
import Contato from "../contato/page";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-10 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-13 items-center justify-between ml-5">
          <div className="font-bold text-xl">
            <Link href="./" className=" hover:text-green-400 relative group">
              RicardoMatos.dev
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-green-400 relative group"
            >
              Home
              <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-green-400 relative group"
            >
              Sobre
              <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>

            <Link
              href="#skills"
              className="text-sm font-medium transition-colors hover:text-green-400 relative group"
            >
              Tecnologias
              <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-green-400 relative group"
            >
              Projetos
              <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-green-400 relative group"
            >
              Contatos
              <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex text-black hover:text-green-400 hover:border-green-400 group relative"
            asChild
          >
            <Link href="/curriculo.pdf" download target="_blank">
              <FileText className="mr-2 h-4 w-4" />
              Baixar CV
              <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex justify-center items-center -mt-5 bg-[url('/fundo.jpg')] bg-cover bg-center bg-no-repeat">
        <section
          id="home"
          className="container py-12 md:py-24 lg:py-32 flex flex-col items-center"
        >
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
              Olá, sou o <span className="text-green-400">Ricardo Ribeiro</span>
            </h1>

            <div className="relative h-[250px] w-[250px] md:h-[300px] md:w-[300px] overflow-hidden rounded-full border-4 mb-8 border-green-400">
              <Image
                src="/perfil.jpg"
                alt="Your Name"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6">
              <span className="text-green-400">Desenvolvedor</span> Full-Stack
            </p>

            <div className="flex gap-4 mb-8">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group relative"
              >
                <Link
                  href="https://github.com/MatosRicardo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-black hover:text-green-400 hover:border-green-400"
                >
                  <Github className="mr-2 h-5 w-5 " />
                  GitHub
                  <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group relative"
              >
                <Link
                  href="https://linkedin.com/in/ricardomatos-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-black hover:text-green-400 hover:border-green-400"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                  <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="flex text-black hover:text-green-400 hover:border-green-400 group relative md:hidden"
              asChild
            >
              <Link href="/curriculo.pdf" download target="_blank">
                <FileText className="mr-2 h-4 w-4" />
                Baixar CV
                <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            </Button>
          </div>
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
