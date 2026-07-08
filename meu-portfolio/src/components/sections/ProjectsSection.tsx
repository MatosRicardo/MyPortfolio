import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 sm:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            Projetos
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40"
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
                    className="border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400"
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
                      className="border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400"
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
