import Image from "next/image";

export default function SobreMim() {
  return (
    <section id="about" className="container mx-auto px-6 py-12 mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-orange-600">
        Sobre mim
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-15">
        <p className="text-justify leading-relaxed">
          Olá, sou Ricardo Matos, desenvolvedor Full Stack com foco em Front-end
          e entusiasta de tecnologia e inovação. Atualmente, curso o 3º semestre
          de Ciência da Computação e sou formado em Análise e Desenvolvimento de
          Sistemas (ADS). Concluí o Instituto PROA em 2024 e sigo em constante
          aprimoramento técnico.
          <br />
          <br />
          Atuo como estagiário no Itaú, integrando o squad de automação em
          cloud, com foco no desenvolvimento de interfaces utilizando Angular,
          implementação de testes unitários e integração com serviços em nuvem.
          Também possuo experiência com Python e AWS, participando de projetos
          voltados à automação e integração de sistemas.
          <br />
          <br />
          Tenho interesse em desenvolver soluções escaláveis, com boas práticas
          de código e impacto real no negócio. Estou sempre em busca de novos
          desafios e oportunidades para evoluir como desenvolvedor. Sinta-se à
          vontade para explorar meus projetos e entrar em contato.
        </p>

        <div className="relative h-[260px] w-[260px] md:h-[320px] md:w-[320px] overflow-hidden rounded-xl border-4 shadow-lg mx-auto border-white">
          <Image
            src="/perfil_futuro.jpeg"
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
