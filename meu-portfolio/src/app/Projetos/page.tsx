import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define the type for a project
type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
};

// Sample project data
const projects: Project[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring real-time inventory updates and secure payment processing.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform.example.com",
  },
  {
    id: "project2",
    title: "Task Management App",
    description:
      "A React-based task management application with drag-and-drop functionality and real-time collaboration features.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager.example.com",
  },
  {
    id: "project3",
    title: "Weather Forecast Dashboard",
    description:
      "An interactive weather dashboard that provides real-time forecasts and historical weather data visualization.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
  },
  {
    id: "project4",
    title: "Fitness Tracking Mobile App",
    description:
      "A React Native mobile app for tracking workouts, nutrition, and progress with integration to wearable devices.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    githubUrl: "https://github.com/yourusername/fitness-tracker",
  },
  {
    id: "project5",
    title: "AI-powered Chatbot",
    description:
      "An AI chatbot built with natural language processing capabilities, designed to assist customers with product inquiries.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    githubUrl: "https://github.com/yourusername/ai-chatbot",
    liveUrl: "https://ai-chatbot.example.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
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
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="group relative hover:text-green-400 hover:border-green-400"
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
                      className="group relative hover:text-green-400 hover:border-green-400"
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
