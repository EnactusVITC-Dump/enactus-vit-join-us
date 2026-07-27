import { cn } from "@/lib/utils";

/** Dark hero band used at the top of secondary pages. */
export function PageIntro({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-ink text-ink-foreground", className)}>
      <svg
        className="absolute -right-10 top-10 hidden size-72 text-primary/25 lg:block"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <path d="M10 10 L90 10 L90 90" stroke="currentColor" strokeWidth="1.5" />
        <path d="M35 35 L75 35 L75 75" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div className="section-x relative py-24 lg:py-32">
        <span className="eyebrow text-ink-foreground/60">{eyebrow}</span>
        <h1 className="display mt-6 max-w-3xl text-5xl sm:text-6xl lg:text-[4.75rem]">{title}</h1>
        {description ? (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
