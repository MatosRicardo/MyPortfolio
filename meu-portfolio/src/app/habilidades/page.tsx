import NextjsOriginal from "devicons-react/lib/icons/NextjsOriginal";
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import { AngularOriginal } from "devicons-react";
import JavaOriginalWordmark from "devicons-react/lib/icons/JavaOriginalWordmark";
import SpringOriginal from "devicons-react/lib/icons/SpringOriginal";
import MongodbOriginal from "devicons-react/lib/icons/MongodbOriginal";
import MysqlOriginalWordmark from "devicons-react/lib/icons/MysqlOriginalWordmark";
import AmazonwebservicesOriginalWordmark from "devicons-react/lib/icons/AmazonwebservicesOriginalWordmark";
import TailwindcssOriginal from "devicons-react/lib/icons/TailwindcssOriginal";
import PythonOriginal from "devicons-react/lib/icons/PythonOriginal";
import TypescriptOriginal from "devicons-react/lib/icons/TypescriptOriginal";
import JavascriptOriginal from "devicons-react/lib/icons/JavascriptOriginal";

const technologies = [
  { Icon: JavascriptOriginal, label: "JavaScript" },
  { Icon: TypescriptOriginal, label: "TypeScript" },
  { Icon: AngularOriginal, label: "Angular" },
  { Icon: ReactOriginal, label: "React.js" },
  { Icon: NextjsOriginal, label: "Next.js" },
  { Icon: TailwindcssOriginal, label: "Tailwind" },
  { Icon: PythonOriginal, label: "Python" },
  { Icon: JavaOriginalWordmark, label: "Java" },
  { Icon: SpringOriginal, label: "Spring Boot" },
  { Icon: MongodbOriginal, label: "MongoDB" },
  { Icon: MysqlOriginalWordmark, label: "MySQL" },
  { Icon: AmazonwebservicesOriginalWordmark, label: "AWS" },
];

export default function Habilidades() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            Tecnologias
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ferramentas com as quais trabalho
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-orange-500/40"
            >
              <Icon size={72} className="mb-4 text-white" />
              <p className="text-sm font-medium text-gray-200 sm:text-base">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
