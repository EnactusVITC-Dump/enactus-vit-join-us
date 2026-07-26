import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

/** Enactus VITC wordmark: yellow arrow glyph + name. */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-3", className)}>
      <svg viewBox="0 0 40 40" className="size-8 shrink-0" aria-hidden="true">
        <path d="M4 4 L26 12 L14 18 Z" fill="var(--primary)" />
        <path d="M14 18 L26 12 L20 32 Z" fill="var(--primary)" opacity="0.55" />
      </svg>
      <span className="leading-none">
        <span
          className={cn(
            "block text-xl font-bold tracking-tight",
            tone === "light" ? "text-ink-foreground" : "text-foreground",
          )}
        >
          enactus
        </span>
        <span className="block text-[10px] font-semibold tracking-[0.35em] text-muted-foreground">
          VITC
        </span>
      </span>
    </Link>
  );
}
