import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 sm:py-28">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projetos"
          title="Projetos selecionados"
          description="Uma seleção de projetos que demonstra habilidades em frontend, backend e experiência de usuário."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} as="article" className="group">
              <div className="relative h-56 overflow-hidden rounded-t-[1.75rem] border-b border-white/10 bg-black/5 transition duration-300 group-hover:brightness-90">
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
                    <Badge key={tag}>{tag}</Badge>
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
                    className="border-white/15 bg-white/5 text-white hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-300"
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir repositório do projeto ${project.title} no GitHub`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  {project.liveUrl ? (
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/15 bg-white/5 text-white hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-300"
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visitar projeto ${project.title}`}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visitar
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
