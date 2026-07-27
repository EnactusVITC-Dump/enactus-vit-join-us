
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/kit/Button";

export function CtaBand() {
  return (
    <section className="bg-primary">
      <div className="section-x py-20 lg:py-24">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <h2 className="display max-w-xl text-5xl text-primary-foreground sm:text-6xl lg:text-7xl">
                Be the change. Join Enactus VITC.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
                Applications for the 2026 cohort close on July 24. It takes about ten minutes.
              </p>
            </div>
            <Button asChild size="lg" variant="ink">
              <a href="/#departments">
                Start your application <ArrowUpRight />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
