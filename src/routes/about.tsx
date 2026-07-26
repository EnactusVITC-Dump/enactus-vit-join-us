import { createFileRoute } from "@tanstack/react-router";

import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { WhyJoinSection } from "@/components/sections/WhyJoinSection";
import { PageIntro } from "@/components/layout/PageIntro";

const title = "About Enactus VIT Chennai";
const description =
  "Our mission, vision, values and the community behind Enactus VIT Chennai — a student-run chapter turning entrepreneurial action into social impact.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About us"
        title="A community of doers and thinkers."
        description="We build ventures, not one-off events. Every project starts with a real person, a real problem and a plan to make it sustainable."
      />
      <AboutSection />
      <WhyJoinSection />
      <CtaBand />
    </>
  );
}
