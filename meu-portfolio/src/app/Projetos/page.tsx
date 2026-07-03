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
  tags: string[];
};

const projects: Project[] = [
  {
    id: "project1",
    title: "Kathon",
    description:
      "Plataforma voltada para conectar estudantes a hackathons e oportunidades reais de aprendizado e networking com empresas.",
    imageUrl: "/kathon.png",
    githubUrl: "https://github.com/Demoday-Kathon/FrontEnd-Kathon",
    tags: ["React", "Spring Boot", "MySQL"],
  },
  {
    id: "project2",
    title: "Proteção Peluda",
    description:
      "Landing page responsiva e visualmente cuidada para promover adoção responsável e conscientização sobre animais.",
    imageUrl: "/Protecao.png",
    githubUrl: "https://github.com/MatosRicardo/protecao_peluda",
    liveUrl: "https://projeto-protecao-peluda.vercel.app",
    tags: ["HTML", "CSS", "Figma"],
  },
  {
    id: "project3",
    title: "CRUD",
    description:
      "Sistema de cadastro de empresas com interface moderna, foco em usabilidade e experiência de gerenciamento simples.",
    imageUrl: "/CRUD.png",
    githubUrl: "https://github.com/MatosRicardo/CRUD",
    tags: ["React", "Tailwind", "Express"],
  },
  {
    id: "project4",
    title: "Jogo da Velha",
    description:
      "Pequeno projeto interativo desenvolvido com React, com foco em lógica e experiência divertida para o usuário.",
    imageUrl: "/jogo.png",
    githubUrl: "https://github.com/MatosRicardo/JogoDaVelhaReact",
    tags: ["React", "JavaScript"],
  },
  {
    id: "project5",
    title: "Mind7",
    description:
      "Projeto de landing page voltado à saúde mental, com interface intuitiva e conteúdo bem estruturado para o público.",
    imageUrl: "/Mind7.png",
    githubUrl: "https://github.com/MatosRicardo/Mind7",
    liveUrl: "https://mind7.vercel.app",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "project6",
    title: "Sistema Escolar",
    description:
      "API REST para gestão de alunos e aulas, criada com foco em organização, escalabilidade e boas práticas de backend.",
    imageUrl: "/sistemaEscolar.png",
    githubUrl: "https://github.com/MatosRicardo/Springboot_SistemaEscolar",
    tags: ["Java", "Spring Boot", "MySQL"],
  },
  {
    id: "project7",
    title: "Em breve",
    description:
      "Novo projeto em desenvolvimento, com foco em inovação e experiência digital ainda mais completa.",
    imageUrl: "/spoiler.png",
    githubUrl: "https://github.com/MatosRicardo/Fintech_Klyra",
    tags: ["Em construção"],
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="px-6 py-24 sm:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            Projetos
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Algumas soluções que desenvolvi
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm leading-7 text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/15 bg-white/5 text-white hover:border-orange-500 hover:text-orange-400"
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/15 bg-white/5 text-white hover:border-orange-500 hover:text-orange-400"
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visitar
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
