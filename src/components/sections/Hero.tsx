import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Briefcase, Globe, Infinity as InfinityIcon, Users } from "lucide-react";

import heroTeam from "@/assets/hero-team.jpg";
import { Counter } from "@/components/animations/Reveal";
import { Button } from "@/components/kit/Button";

const statIcons = [Globe, Briefcase, InfinityIcon, Users];

const stats = [
  { value: 2026, suffix: "", label: "Nationals", literal: "2026" },
  { value: 5, suffix: "+", label: "Projects" },
  { value: 0, suffix: "", label: "Impact", literal: "∞" },
  { value: 1, suffix: "", label: "Family" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <img
        src={heroTeam}
        alt="Enactus VIT Chennai members celebrating together"
        width={1600}
        height={1104}
        className="absolute inset-y-0 right-0 h-full w-full object-cover object-[70%_center] opacity-55 lg:w-[62%]"
      />
      <div
        className="absolute inset-0 bg-ink/70 lg:bg-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 left-0 hidden w-[70%] bg-ink lg:block"
        style={{ maskImage: "linear-gradient(to right, black 55%, transparent 100%)" }}
        aria-hidden="true"
      />

      <svg
        className="absolute right-8 top-28 hidden size-64 text-primary/60 xl:block"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <path d="M20 10 L90 10 L90 80" stroke="currentColor" strokeWidth="1.5" />
        <path d="M70 60 L90 80 L70 92" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="section-x relative pb-20 pt-24 lg:pb-28 lg:pt-32">
        <div className="max-w-2xl">
          <motion.h1
            className="display text-[3.25rem] leading-[0.88] sm:text-7xl lg:text-[5.75rem]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="block">Real impact.</span>
            <span className="block text-primary">Together.</span>
            <span className="mt-2 inline-block marker-yellow">With Enactus.</span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-md text-base leading-relaxed text-ink-foreground/75 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            Recruitment 2026 is open. Join a team of student changemakers using entrepreneurship to
            build a better, more sustainable world.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease }}
          >
            <Button asChild size="lg">
              <Link to="/apply">
                Join the team <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <a href="/#departments">Explore departments</a>
            </Button>
          </motion.div>
        </div>

        <motion.dl
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-foreground/12 bg-ink-foreground/10 lg:ml-auto lg:mt-24 lg:w-[62%] lg:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
        >
          {stats.map((s, i) => {
            const Icon = statIcons[i];
            return (
              <div key={s.label} className="bg-ink px-6 py-8 text-center">
                <Icon className="mx-auto size-6 text-primary" />
                <dd className="display mt-4 text-4xl">
                  {s.literal ? s.literal : <Counter value={s.value} suffix={s.suffix} />}
                </dd>
                <dt className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-foreground/55">
                  {s.label}
                </dt>
              </div>
            );
          })}
        </motion.dl>
      </div>
    </section>
  );
}
