
import { ArrowUpRight, Code2, Coins, Megaphone, PenTool, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/kit/Button";
import { Card, Section } from "@/components/kit/Card";
import { departments, type DepartmentId } from "@/data/departments";

export const departmentIcons: Record<DepartmentId, LucideIcon> = {
  tech: Code2,
  creative: PenTool,
  finance: Coins,
  operations: Settings,
  mns: Megaphone,
};

export function DepartmentsSection({ detailed = false }: { detailed?: boolean }) {
  return (
    <Section id="departments">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <span className="eyebrow">Our departments</span>
          <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
            Find your role.
            <br />
            Fuel the impact.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            Five departments, one shared goal. Pick two preferences when you apply — you&apos;ll
            answer a short set of questions for each.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((d, i) => {
          const Icon = departmentIcons[d.id];
          return (
            <Reveal key={d.id} delay={i * 0.06}>
              <Card interactive className="group h-full">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary">
                  <Icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="display mt-6 text-2xl">{d.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {d.tagline}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                {detailed ? (
                  <ul className="mt-6 space-y-2.5 border-t border-hairline pt-6">
                    {d.responsibilities.map((r) => (
                      <li key={r} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 bg-primary" />
                        {r}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-6 pt-6 border-t border-hairline mt-auto">
                  <Button asChild size="sm" className="w-full">
                    <a href={`/apply/${d.id}`}>
                      Apply Now <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              </Card>
            </Reveal>
          );
        })}

        <Reveal delay={departments.length * 0.06}>
          <Card interactive className="flex h-full flex-col justify-between bg-ink text-ink-foreground">
            <div>
              <h3 className="display text-2xl text-primary">Not sure yet?</h3>
              <p className="mt-5 text-sm leading-relaxed text-ink-foreground/70">
                Pick the two that feel closest. The interview is a conversation — we help you land
                where you&apos;ll do your best work.
              </p>
            </div>
            <Button asChild size="sm" className="mt-8 self-start">
              <a href="/#faq">
                Got questions? <ArrowUpRight />
              </a>
            </Button>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
