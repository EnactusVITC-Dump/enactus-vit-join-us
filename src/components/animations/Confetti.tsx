import { motion, useReducedMotion } from "motion/react";
import { useMemo } from "react";

const COLORS = ["var(--primary)", "var(--ink)", "var(--muted-foreground)"];

/** Lightweight DOM confetti burst — no canvas, no gradients. */
export function Confetti({ pieces = 60 }: { pieces?: number }) {
  const reduced = useReducedMotion();
  const shapes = useMemo(
    () =>
      Array.from({ length: pieces }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.6,
        duration: 2.6 + Math.random() * 1.8,
        size: 6 + Math.random() * 8,
        rotate: Math.random() * 360,
        color: COLORS[i % COLORS.length],
        round: i % 4 === 0,
      })),
    [pieces],
  );

  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {shapes.map((s) => (
        <motion.span
          key={s.id}
          className={s.round ? "absolute rounded-full" : "absolute"}
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.round ? s.size : s.size * 0.4,
            backgroundColor: s.color,
          }}
          initial={{ y: -40, opacity: 0, rotate: 0 }}
          animate={{ y: "85vh", opacity: [0, 1, 1, 0], rotate: s.rotate }}
          transition={{ duration: s.duration, delay: s.delay, ease: "easeIn" }}
        />
      ))}
    </div>
  );
}
