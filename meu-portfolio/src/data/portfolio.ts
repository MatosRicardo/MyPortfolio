import type { LucideIcon } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
};

export const highlights = [
  "Desenvolvimento Full Stack com foco em experiência e performance",
  "Experiência prática em automação, APIs e integrações em nuvem",
  "Constante evolução em tecnologias modernas e boas práticas",
];

export const trajectoryItems = [
  {
    period: "mai de 2025 - o momento",
    title: "Estágio em Software Engineer Intern · Itaú Unibanco",
    description:
      "Desenvolvimento de aplicações web modernas e responsivas utilizando Angular, React e Next.js, além da criação e manutenção de APIs e funções serverless com Python, Java e Node.js. Experiência na construção de componentes reutilizáveis com TypeScript e Angular Material, integração de aplicações por meio de APIs REST e implementação de soluções em AWS, utilizando serviços como Lambda, S3, DynamoDB e API Gateway, além de infraestrutura como código com Terraform. Atuação com versionamento em Git, participação em code reviews, desenvolvimento de testes unitários, refatoração de código e aplicação contínua de boas práticas para garantir qualidade, escalabilidade e eficiência no desenvolvimento de software.",
  },
  {
    period: "jun de 2024 - dez de 2024",
    title: "Bootcamp · Instituto PROA",
    description:
      "No Instituto PROA, aprendi fundamentos de programação em Java, desenvolvimento de APIs com Spring Boot e uso de MySQL para bancos de dados. Além disso, adquiri conhecimentos em React, JavaScript, HTML, CSS, Tailwind e Bootstrap. Também desenvolvi habilidades em Figma para design de interfaces, trabalho em equipe, comunicação e resolução de problemas",
  },
];

export const projects: Project[] = [
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
];

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    label: "ricardoribeirodematos@gmail.com",
    href: "mailto:ricardoribeirodematos@gmail.com",
    icon: undefined as unknown as LucideIcon,
  },
];
