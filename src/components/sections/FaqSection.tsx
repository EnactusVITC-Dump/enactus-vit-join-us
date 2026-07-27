import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/kit/Card";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <span className="eyebrow">FAQs</span>
          <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
            Questions?
            <br />
            Answered.
          </h2>
          <p className="mt-6 max-w-xs text-base leading-relaxed text-muted-foreground">
            Still stuck? Write to us at{" "}
            <a href="mailto:enactusvitc@gmail.com" className="font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4">
              enactusvitc@gmail.com
            </a>
            .
          </p>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.04}>
                <div
                  className={cn(
                    "rounded-2xl border bg-card transition-colors duration-300",
                    isOpen ? "border-ink/25 shadow-soft" : "border-hairline",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold sm:text-base">{faq.question}</span>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Plus
                        className={cn(
                          "size-4 text-primary-foreground transition-transform duration-300",
                          isOpen && "rotate-45",
                        )}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
