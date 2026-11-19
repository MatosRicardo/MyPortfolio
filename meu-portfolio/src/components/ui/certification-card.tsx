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
  description?: string;
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
  description,
  progress,
  imageSrc,
  imageAlt,
}: CertificationCardProps) {
  return (
    <Card
      as="article"
      className={cn(
        "flex flex-1 flex-col items-center gap-5 bg-black/20 p-6 text-center sm:p-8",
        status === "em estudo" ? "border-sky-400/25" : "border-emerald-500/25",
      )}
    >
      <span
        className={cn(
          "rounded-full border px-3 py-1 text-sm font-medium",
          status === "em estudo"
            ? "border-sky-400/30 bg-sky-400/10 text-sky-300"
            : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
        )}
      >
        {status === "em estudo" ? "Estudos em andamento" : "Certificação conquistada"}
      </span>
      {imageSrc ? (
        <div className="relative mx-auto h-44 w-44 sm:h-48 sm:w-48">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 640px) 176px, 192px"
            className="object-contain"
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
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
      {description ? (
        <p className="max-w-md text-base leading-7 text-gray-300">{description}</p>
      ) : null}
      <div className="mt-auto flex flex-wrap justify-center gap-2">
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
