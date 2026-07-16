import * as React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  description: string;
  className?: string;
}

export function StatCard({
  label,
  value,
  description,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-5 text-left",
        className,
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
        {label}
      </p>
      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-gray-300">{description}</p>
    </div>
  );
}
