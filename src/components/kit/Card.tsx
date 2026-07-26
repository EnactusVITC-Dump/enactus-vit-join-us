import * as React from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  interactive,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-hairline bg-card p-8",
        interactive && "hover-lift hover:border-ink/25",
        className,
      )}
      {...props}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        tone === "light" && "text-ink-foreground",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow", tone === "light" && "text-ink-foreground/60")}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">{title}</h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg",
            tone === "light" && "text-ink-foreground/70",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
  tone = "cream",
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "cream" | "white" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 lg:py-32",
        tone === "white" && "bg-card",
        tone === "ink" && "bg-ink text-ink-foreground",
        className,
      )}
    >
      <div className="section-x">{children}</div>
    </section>
  );
}
