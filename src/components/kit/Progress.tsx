import { cn } from "@/lib/utils";

/** Thin yellow progress bar with animated fill. */
export function Progress({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <div className={cn("h-1 w-full overflow-hidden rounded-full bg-ink/10", className)}>
      <div
        className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}

export function StepHeader({
  step,
  total,
  title,
  subtitle,
}: {
  step: number;
  total: number;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-6">
        <span className="eyebrow">
          Step {step} of {total}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {Math.round((step / total) * 100)}% complete
        </span>
      </div>
      <Progress className="mt-4" value={(step / total) * 100} />
      <h1 className="display mt-10 text-5xl sm:text-6xl lg:text-7xl">{title}</h1>
      {subtitle ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
