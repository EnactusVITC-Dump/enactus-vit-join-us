import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, Check, Mail } from "lucide-react";

import { Confetti } from "@/components/animations/Confetti";
import { Button } from "@/components/kit/Button";
import { timeline } from "@/data/timeline";

const title = "Application Submitted — Enactus VIT Chennai";
const description =
  "Your Enactus VIT Chennai recruitment application has been submitted. Here's what happens next.";

export const Route = createFileRoute("/success")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  return (
    <div className="relative overflow-hidden">
      <Confetti />
      <div className="section-x max-w-3xl py-24 text-center lg:py-32">
        <motion.div
          className="mx-auto flex size-20 items-center justify-center rounded-full bg-primary"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Check className="size-9 text-primary-foreground" strokeWidth={3} />
        </motion.div>

        <motion.h1
          className="display mt-10 text-5xl sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Application submitted.
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          Thank you for applying to Enactus VIT Chennai. We read every single answer — expect an
          update from us within a few days.
        </motion.p>

        <div className="mt-14 grid gap-4 text-left sm:grid-cols-3">
          {timeline.slice(1, 4).map((step, i) => (
            <motion.div
              key={step.id}
              className="rounded-2xl border border-hairline bg-card p-6 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="display mt-3 text-2xl">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/">
              <ArrowLeft /> Return home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="mailto:enactusvitc@gmail.com">
              <Mail /> Email the team
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
