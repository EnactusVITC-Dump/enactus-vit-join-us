import { Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/kit/Button";
import { Section } from "@/components/kit/Card";
import { timeline } from "@/data/timeline";

export function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 45%"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const progress = useSpring(raw, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <Section tone="white" id="timeline">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <span className="eyebrow">Recruitment timeline</span>
          <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
            Your journey starts here.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Button asChild size="md">
            <Link to="/apply">
              Apply now <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>
      </div>

      <div ref={ref} className="relative mt-20">
        <div className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-hairline lg:block" />
        <motion.div
          className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] origin-left bg-primary lg:block"
          style={{ scaleX: progress }}
        />
        <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-hairline lg:hidden" />
        <motion.div
          className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px origin-top bg-primary lg:hidden"
          style={{ scaleY: progress }}
        />

        <ol className="relative grid gap-12 lg:grid-cols-5 lg:gap-6">
          {timeline.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.08}>
              <li className="relative pl-16 lg:pl-0">
                <span className="absolute left-0 top-0 flex size-12 items-center justify-center rounded-full border border-hairline bg-card text-sm font-semibold shadow-soft lg:relative">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-0 text-2xl lg:mt-8">{step.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/0">
                  <span className="text-foreground/60">{step.date}</span>
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
