import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Crown,
  Globe,
  HeartHandshake,
  Rocket,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/kit/Button";
import { Section } from "@/components/kit/Card";
import { whyJoin } from "@/data/departments";

const icons: Record<string, LucideIcon> = {
  Rocket,
  Crown,
  Globe,
  Users,
  TrendingUp,
  HeartHandshake,
};

export function WhyJoinSection() {
  return (
    <Section tone="ink" id="why-join">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal>
          <span className="eyebrow text-ink-foreground/60">Why join Enactus?</span>
          <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
            More than a club.
            <br />
            <span className="text-primary">It&apos;s a journey.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-foreground/70">
            Gain real-world experience, build your skills, make lifelong connections and leave
            behind something that lasts.
          </p>
          <Button asChild size="md" className="mt-10">
            <a href="/#departments">
              Apply now <ArrowUpRight />
            </a>
          </Button>
        </Reveal>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {whyJoin.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="group">
                  <Icon className="size-7 text-primary transition-transform duration-300 group-hover:-translate-y-1" />
                  <h3 className="display mt-5 text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-foreground/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
