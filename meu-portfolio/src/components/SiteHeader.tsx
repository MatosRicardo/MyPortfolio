import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/45">
      <div className="container mx-auto flex h-13 items-center justify-between px-5 md:px-10">
        <div className="text-lg font-bold tracking-[0.2em] text-white md:text-xl">
          <Link href="/" className="transition-colors hover:text-emerald-500">
            RicardoMatos.dev
          </Link>
        </div>

        <nav className="hidden gap-4 md:flex md:gap-6">
          <Link
            href="#home"
            className="relative text-xs font-medium text-gray-300 transition-all duration-300 hover:text-emerald-500 md:text-sm"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="relative text-xs font-medium text-gray-300 transition-all duration-300 hover:text-emerald-500 md:text-sm"
          >
            Sobre
          </Link>
          <Link
            href="#trajectory"
            className="relative text-xs font-medium text-gray-300 transition-all duration-300 hover:text-emerald-500 md:text-sm"
          >
            Trajetória
          </Link>
          <Link
            href="#skills"
            className="relative text-xs font-medium text-gray-300 transition-all duration-300 hover:text-emerald-500 md:text-sm"
          >
            Tecnologias
          </Link>
          <Link
            href="#projects"
            className="relative text-xs font-medium text-gray-300 transition-all duration-300 hover:text-emerald-500 md:text-sm"
          >
            Projetos
          </Link>
          <Link
            href="#contact"
            className="relative text-xs font-medium text-gray-300 transition-all duration-300 hover:text-emerald-500 md:text-sm"
          >
            Contatos
          </Link>
        </nav>

        <Button
          variant="outline"
          size="sm"
          className="hidden border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-300 md:flex"
          asChild
        >
          <Link href="/curriculo.pdf" download target="_blank">
            <FileText className="mr-2 h-4 w-4" />
            Baixar CV
          </Link>
        </Button>
      </div>
    </header>
  );
}
