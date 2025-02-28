import Image from "next/image";

export default function SobreMim() {
  return (
    <section id="about" className="container mx-auto px-6 py-12 mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-400">
        Sobre mim
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-15">
        <p className="text-justify leading-relaxed">
          Sou Ricardo Matos, desenvolvedor Full Stack apaixonado por tecnologia,
          inovação. Atualmente, estou cursando o 3º semestre de Ciência da
          Computação e sou formado em Análise e Desenvolvimento de Sistemas
          (ADS). Concluí o curso do Instituto PROA e estou aprimorando meus
          conhecimentos em cloud computing na Escola da Nuvem. Minha última
          experiência foi como Analista de Suporte Técnico Júnior na Foundever,
          onde desenvolvi habilidades em atendimento técnico e suporte a
          hardware e software. Tenho experiência em React, Next.js, Node.js,
          MongoDB e MySQL, além de trabalhar com tecnologias como Java, Spring
          Boot, HTML, CSS, JS, TS, Tailwind, Python e AWS.
          <br />
          <br />
          Além do mundo da tecnologia, gosto de praticar esportes, ir ao cinema
          e curtir momentos ao ar livre em parques e museus. Acredito que
          equilibrar aprendizado, trabalho e lazer é essencial para criatividade
          e produtividade.
        </p>
        <div className="relative h-[260px] w-[260px] md:h-[320px] md:w-[320px] overflow-hidden rounded-xl border-4 shadow-lg mx-auto border-green-400">
          <Image
            src="/imgSobre.jpg"
            alt="Foto de Ricardo Matos"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
