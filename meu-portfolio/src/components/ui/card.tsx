import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Card({
  children,
  className,
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={cn(
        "overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(255,255,255,0.04)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </Component>
  );
}
