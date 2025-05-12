import Image from "next/image";

export default function SobreMim() {
  return (
    <section id="about" className="container mx-auto px-6 py-12 mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-orange-600">
        Sobre mim
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-15">
        <p className="text-justify leading-relaxed">
          Olá, sou o Ricardo Matos, desenvolvedor Full Stack apaixonado por
          tecnologia e inovação. Atualmente, estou cursando o 3º semestre de
          Ciência da Computação e sou formado em Análise e Desenvolvimento de
          Sistemas (ADS). Concluí o curso do Instituto PROA no segundo semestre
          de 2024 e sigo aprimorando meus conhecimentos. Atualmente, sou
          estagiário no Itaú, atuando no squad de automação de cloud, focado na
          linha de frente do front-end com Angular e desenvolvimento de testes
          unitários, além de atuar com Python e Cloud.
          <br />
          <br />
          Além do mundo da tecnologia, gosto de praticar esportes, ir ao cinema
          e curtir momentos ao ar livre. Acredito que equilibrar aprendizado,
          trabalho e lazer é essencial para a criatividade e produtividade.
          <br />
          <br />
          Estou sempre em busca de novas oportunidades para expandir meus
          conhecimentos. Sinta-se à vontade para conhecer meus projetos e, caso
          queira entrar em contato, estou aberto para novos desafios e
          oportunidades.
        </p>

        <div className="relative h-[260px] w-[260px] md:h-[320px] md:w-[320px] overflow-hidden rounded-xl border-4 shadow-lg mx-auto border-white">
          <Image
            src="/perfil_futuro.jpg"
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
