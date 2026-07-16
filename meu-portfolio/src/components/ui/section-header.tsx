import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("mb-12 text-center", className)}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-300">
          {description}
        </p>
      ) : null}
    </header>
  );
}
