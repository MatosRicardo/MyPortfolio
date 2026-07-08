import { Github, Linkedin, Mail, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent px-6 pb-16 pt-24"
    >
      <h1 className="mb-12 text-center text-4xl font-bold text-orange-600">
        Contatos
      </h1>
      <section className="container relative z-10 flex flex-col items-center justify-center gap-10 px-6 md:flex-row">
        <div className="flex w-full max-w-[500px] flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-10 shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-sm">
          <h2 className="mb-4 text-3xl font-bold text-orange-600">
            Vamos Conversar!
          </h2>
          <p className="mb-6 text-lg text-white">
            Entre em contato comigo para colaborar em projetos incríveis ou para
            bater um papo sobre tecnologia.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="mailto:ricardoribeirodematos@gmail.com"
              className="flex items-center gap-2 text-lg text-white transition-colors duration-300 hover:text-orange-400"
            >
              <Mail className="h-6 w-6" /> ricardoribeirodematos@gmail.com
            </Link>
            <Link
              href="https://wa.me/5511985036906"
              className="flex items-center gap-2 text-lg text-white transition-colors duration-300 hover:text-orange-400"
            >
              <MessageCircleIcon className="h-6 w-6" /> WhatsApp
            </Link>
            <Link
              href="https://linkedin.com/in/ricardomatos-developer"
              target="_blank"
              className="flex items-center gap-2 text-lg text-white transition-colors duration-300 hover:text-orange-400"
            >
              <Linkedin className="h-6 w-6" /> LinkedIn
            </Link>
            <Link
              href="https://github.com/MatosRicardo"
              target="_blank"
              className="flex items-center gap-2 text-lg text-white transition-colors duration-300 hover:text-orange-400"
            >
              <Github className="h-6 w-6" /> GitHub
            </Link>
          </div>
        </div>
        <Image
          src="/gif1.gif"
          alt="GIF animado"
          width={450}
          height={450}
          className="object-contain"
        />
      </section>
    </section>
  );
}
