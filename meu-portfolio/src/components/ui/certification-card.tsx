import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CertificationCardProps {
  title: string;
  issuer: string;
  tags: string[];
  status: "finalizado" | "em estudo";
  date?: string;
  dateLabel?: string;
  progress?: number;
  imageSrc?: string;
  imageAlt?: string;
}

export function CertificationCard({
  title,
  issuer,
  tags,
  status,
  date,
  dateLabel,
  progress,
  imageSrc,
  imageAlt,
}: CertificationCardProps) {
  return (
    <Card
      as="article"
      className={cn(
        "space-y-4 p-6 bg-transparent",
        status === "em estudo" ? "border-slate-600" : "border-white/10",
      )}
    >
      {imageSrc ? (
        <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-3xl border border-white/10 bg-black/20">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-contain"
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-1">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-500">
          {issuer}
        </p>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {date ? (
          <p className="text-sm text-gray-300">
            {dateLabel ?? "Concluído em"} {date}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      {progress !== undefined ? (
        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-300">Em estudo</div>
          <ProgressBar value={progress} label="" />
        </div>
      ) : null}
    </Card>
  );
}
