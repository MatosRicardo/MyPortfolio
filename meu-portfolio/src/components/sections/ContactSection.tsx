import { Github, Linkedin, Mail, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent px-6 pb-16 pt-24"
    >
      <SectionHeader
        eyebrow="Contatos"
        title="Vamos conversar?"
        description="Entre em contato para colaborar em projetos, parcerias ou oportunidades profissionais."
      />
      <div className="container relative z-10 flex flex-col items-center justify-center gap-10 px-6 md:flex-row">
        <Card className="w-full max-w-[500px] p-10">
          <div className="flex flex-col gap-6">
            <p className="text-lg text-white">
              Entre em contato comigo para colaborar em projetos incríveis ou
              para bater um papo sobre tecnologia.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="mailto:ricardoribeirodematos@gmail.com"
                className="flex items-center gap-2 text-lg text-white transition-colors duration-300 hover:text-emerald-300"
                aria-label="Enviar e-mail para Ricardo Matos"
              >
                <Mail className="h-6 w-6" aria-hidden="true" />
                ricardoribeirodematos@gmail.com
              </Link>
              <Link
                href="https://wa.me/5511985036906"
                className="flex items-center gap-2 text-lg text-white transition-colors duration-300 hover:text-emerald-300"
                aria-label="Enviar mensagem no WhatsApp"
              >
                <MessageCircleIcon className="h-6 w-6" aria-hidden="true" />
                WhatsApp
              </Link>
              <Link
                href="https://linkedin.com/in/ricardomatos-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg text-white transition-colors duration-300 hover:text-emerald-300"
                aria-label="Visitar perfil do LinkedIn"
              >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/MatosRicardo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg text-white transition-colors duration-300 hover:text-emerald-300"
                aria-label="Visitar perfil do GitHub"
              >
                <Github className="h-6 w-6" aria-hidden="true" />
                GitHub
              </Link>
            </div>
          </div>
        </Card>
        <Image
          src="/gif1.gif"
          alt="GIF de contato animado"
          width={450}
          height={450}
          className="object-contain"
        />
      </div>
    </section>
  );
}
