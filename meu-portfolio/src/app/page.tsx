import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioHomepage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-10 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/" className=" hover:text-green-400 relative group">
              RicardoMatos.dev
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-green-400 relative group"
            >
              Sobre
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
              href="#skills"
              className="text-sm font-medium transition-colors hover:text-green-400 relative group"
            >
              Skills
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

          {/* ADICIONAR BAIXAR CURRICULO */}

          {/* <Button
            variant="outline"
            size="sm"
            className="hidden md:flex hover:text-green-400 hover:border-green-400 group relative"
          >
            <FileText className="mr-2 h-4 w-4" />
            Resume
            <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-green-400"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button> */}
        </div>
      </header>
      <main className="flex justify-center items-center">
        <section
          id="home"
          className="container py-12 md:py-24 lg:py-32 flex flex-col items-center"
        >
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
              Olá, sou o <span className="text-green-400">Ricardo Ribeiro</span>
            </h1>

            <div className="relative h-[250px] w-[250px] md:h-[300px] md:w-[300px] overflow-hidden rounded-full border-4 mb-8">
              <Image
                src="/capa.jpg"
                alt="Your Name"
                fill
                className="object-cover"
                priority
              />
            </div>

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

            <p className="text-gray-300 md:text-xl mb-6">
              Sou um desenvolvedor Full Stack com conhecimento em React.js no
              front-end e Java no back-end. Busco constantemente aprimorar
              minhas habilidades e expandir minha rede profissional.
            </p>

            {/* <div className="flex gap-4">
              <Button
                asChild
                className="group relative bg-green-600 hover:bg-green-700"
              >
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                  <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="group relative hover:text-green-400 hover:border-green-400"
              >
                <Link href="#projects">
                  View Projects
                  <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </Button>
            </div> */}
          </div>
        </section>
      </main>
      {/* <footer className="border-t border-gray-800 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} YourName. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
