import NextjsOriginal from "devicons-react/lib/icons/NextjsOriginal";
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import { NodejsOriginal } from "devicons-react";
import JavaOriginalWordmark from "devicons-react/lib/icons/JavaOriginalWordmark";
import SpringOriginal from "devicons-react/lib/icons/SpringOriginal";
import MongodbOriginal from "devicons-react/lib/icons/MongodbOriginal";
import MysqlOriginalWordmark from "devicons-react/lib/icons/MysqlOriginalWordmark";
import PostgresqlOriginalWordmark from "devicons-react/lib/icons/PostgresqlOriginalWordmark";
import TailwindcssOriginal from "devicons-react/lib/icons/TailwindcssOriginal";
import PythonOriginal from "devicons-react/lib/icons/PythonOriginal";
import TypescriptOriginal from "devicons-react/lib/icons/TypescriptOriginal";
import JavascriptOriginal from "devicons-react/lib/icons/JavascriptOriginal";

export default function Habilidades() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center h-screen mt-10"
    >
      <h1 className="text-4xl font-bold mb-6 text-center text-green-400">
        Tecnologias
      </h1>
      <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 place-items-center">
        {[
          { Icon: JavascriptOriginal, label: "JavaScript" },
          { Icon: TypescriptOriginal, label: "TypeScript" },
          { Icon: ReactOriginal, label: "React.js" },
          { Icon: NextjsOriginal, label: "Next.js" },
          { Icon: NodejsOriginal, label: "Node.js" },
          { Icon: TailwindcssOriginal, label: "Tailwind" },
          { Icon: PythonOriginal, label: "Python" },
          { Icon: JavaOriginalWordmark, label: "Java" },
          { Icon: SpringOriginal, label: "Spring Boot" },
          { Icon: MongodbOriginal, label: "MongoDB" },
          { Icon: MysqlOriginalWordmark, label: "MySQL" },
          { Icon: PostgresqlOriginalWordmark, label: "PostgreSQL" },
        ].map(({ Icon, label }, index) => (
          <div key={index} className="flex flex-col items-center">
            <Icon size={80} className="sm:size-100" />
            <p className="text-white text-xs sm:text-sm mt-2">{label}</p>
          </div>
        ))}
      </main>
    </section>
  );
}
