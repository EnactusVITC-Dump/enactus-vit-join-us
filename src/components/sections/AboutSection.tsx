import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Leaf, Rocket, Users } from "lucide-react";

import aboutCrowd from "@/assets/about-crowd.jpg";
import aboutWork from "@/assets/about-work.jpg";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/kit/Button";
import { Section } from "@/components/kit/Card";

const pillars = [
  { icon: Rocket, title: "Entrepreneurship", copy: "Ventures, not charity." },
  { icon: Leaf, title: "Sustainability", copy: "Impact that outlives us." },
  { icon: Users, title: "Collaboration", copy: "Five departments, one team." },
];

const values = [
  { label: "Mission", copy: "Build entrepreneurial ventures that create measurable social impact." },
  { label: "Vision", copy: "A campus where every student turns intent into action." },
  { label: "Community", copy: "Mentorship, honesty and people who stay long after the project ends." },
  { label: "Values", copy: "Ownership, curiosity, integrity and follow-through." },
];

export function AboutSection() {
  return (
    <Section tone="white" id="about">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <span className="eyebrow">About Enactus VITC</span>
          <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">We are Enactus VITC</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            We&apos;re a community of doers and thinkers solving real-world problems through
            entrepreneurial action — from ideation and prototyping to running ventures in the field.
          </p>

          <dl className="mt-10 grid gap-8 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <p.icon className="size-6 text-primary" />
                <dt className="mt-4 text-sm font-semibold">{p.title}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{p.copy}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.label} className="border-l-2 border-primary pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">{v.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
              </div>
            ))}
          </div>

        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -right-4 -top-6 size-28 bg-primary" aria-hidden="true" />
            <img
              src={aboutCrowd}
              alt="Enactus VIT Chennai members with a chapter banner"
              width={1200}
              height={1200}
              loading="lazy"
              className="relative ml-auto w-[82%] rounded-2xl object-cover shadow-lift"
            />
            <img
              src={aboutWork}
              alt="Members working together on a project"
              width={900}
              height={1100}
              loading="lazy"
              className="relative -mt-24 w-[52%] rounded-2xl border-8 border-card object-cover shadow-lift"
            />
            <div className="absolute bottom-6 right-0 size-20 border-2 border-primary" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
