import { Github, Linkedin, Mail, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Contato() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen pt-24 pb-16 bg-black"
    >
      <h1 className="text-4xl font-bold mb-12 text-center text-orange-600">
        Contatos
      </h1>
      <section className="container flex flex-col md:flex-row items-center justify-center gap-10 px-6">
        <div className="bg-[#0a0a0a] p-10 rounded-2xl shadow-lg w-full max-w-[500px] flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Vamos Conversar!
          </h2>
          <p className="text-white text-lg mb-6">
            Entre em contato comigo para colaborar em projetos incríveis ou para
            bater um papo sobre tecnologia.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="mailto:ricardoribeirodematos@gmail.com"
              className="flex items-center gap-2 text-white hover:text-orange-600 text-lg"
            >
              <Mail className="w-6 h-6" /> ricardoribeirodematos@gmail.com
            </Link>
            <Link
              href="https://wa.me/5511985036906"
              className="flex items-center gap-2 text-white hover:text-orange-600 text-lg"
            >
              <MessageCircleIcon className="w-6 h-6" /> WhatsApp
            </Link>
            <Link
              href="https://linkedin.com/in/ricardomatos-developer"
              target="_blank"
              className="flex items-center gap-2 text-white hover:text-orange-600 text-lg"
            >
              <Linkedin className="w-6 h-6" /> LinkedIn
            </Link>
            <Link
              href="https://github.com/MatosRicardo"
              target="_blank"
              className="flex items-center gap-2 text-white hover:text-orange-600 text-lg"
            >
              <Github className="w-6 h-6" /> GitHub
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
