import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    id: "project1",
    title: "Kathon",
    description:
      "A Kathon é uma plataforma inovadora que conecta estudantes de escolas públicas a hackathons promovidos por empresas, incentivando a colaboração, aprendizado e desenvolvimento de soluções criativas. O projeto foi desenvolvido utilizando React no front-end para uma interface dinâmica e interativa, Java e Spring Boot no back-end para garantir robustez e escalabilidade, e MySQL como banco de dados para armazenamento eficiente das informações. ",
    imageUrl: "/kathon.png",
    githubUrl: "https://github.com/Demoday-Kathon/FrontEnd-Kathon",
    liveUrl: "https://kathon.tech",
  },
  {
    id: "project2",
    title: "Proteção Peluda",
    description:
      "A Proteção Peluda é uma landing page desenvolvida com HTML, CSS e Figma, focada em promover a conscientização e adoção responsável de animais de estimação. O projeto apresenta um design amigável e intuitivo, planejado no Figma, garantindo uma experiência visual agradável. A estrutura em HTML organiza as seções informativas, enquanto o CSS proporciona um layout responsivo e estilizado, destacando imagens, textos e botões interativos. A página inclui informações sobre adoção, lar temporario, perdi meu pet e loja, incentivando a proteção e o bem-estar dos animais.",
    imageUrl: "/Protecao.png",
    githubUrl: "https://github.com/MatosRicardo/protecao_peluda",
    liveUrl: "https://projeto-protecao-peluda.vercel.app",
  },
  {
    id: "project3",
    title: "CRUD",
    description:
      "Desenvolvi um CRUD de cadastro de empresas utilizando React com Tailwind CSS para a interface, proporcionando um design moderno e responsivo. No back-end, criei uma API REST com Node.js e Express, armazenando os dados temporariamente em memória, sem a utilização de um banco de dados. ",
    imageUrl: "/CRUD.png",
    githubUrl: "https://github.com/MatosRicardo/CRUD",
  },
  {
    id: "project4",
    title: "Jogo da Velha",
    description:
      "Um pequeno jogo da velha desenvolvido em React, onde você pode se divertir jogando com um amigo. Este projeto foi criado com base no curso do Maximilian Schwarzmüller na Udemy, trazendo uma experiência interativa e dinâmica.",
    imageUrl: "/jogo.png",
    githubUrl: "https://github.com/MatosRicardo/JogoDaVelhaReact",
  },
  {
    id: "project5",
    title: "Mind7",
    description:
      "A Mind7 é uma plataforma de assistência psicológica criada com HTML, CSS, JavaScript e Figma. O design intuitivo foi planejado no Figma, enquanto o JavaScript adiciona interatividade. A página oferece informações sobre profissionais, agendamentos e conteúdos sobre saúde mental.",
    imageUrl: "/Mind7.png",
    githubUrl: "https://github.com/MatosRicardo/Mind7",
    liveUrl: "https://mind7.vercel.app",
  },
  {
    id: "project6",
    title: "Sistema Escolar",
    description:
      "Uma API REST desenvolvida em Java com Spring Boot para gerenciar o cadastro de alunos e aulas. Criada durante o curso no Instituto PROA, essa API permite realizar operações de criação, leitura, atualização e exclusão (CRUD), garantindo uma estrutura eficiente e escalável. O banco de dados MySQL foi utilizado para armazenar e organizar as informações de forma segura e otimizada.",
    imageUrl: "/sistemaEscolar.png",
    githubUrl: "https://github.com/MatosRicardo/Springboot_SistemaEscolar",
  },
  {
    id: "project7",
    title: "EM BREVE...",
    description: "A foto é um spoiler do projeto que está por vir!",
    imageUrl: "/spoilerv2.jpg",
    githubUrl: "https://github.com/MatosRicardo",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white mt-30">
      <main id="projects" className="container mx-auto py-12 px-4 ">
        <h1 className="text-4xl font-bold mb-12 text-center text-green-400">
          Meus Projetos
        </h1>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold text-green-400">
                  {project.title}
                </h2>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="text-black group relative hover:text-green-400 hover:border-green-400"
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                      <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </Link>
                  </Button>
                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="text-black group relative hover:text-green-400 hover:border-green-400"
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                        <span className="absolute inset-0 bg-green-400/20 rounded-md filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
