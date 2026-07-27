import { createFileRoute } from "@tanstack/react-router";

import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { DepartmentsSection } from "@/components/sections/DepartmentsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { WhyJoinSection } from "@/components/sections/WhyJoinSection";

const title = "Enactus VIT Chennai — Recruitment 2026";
const description =
  "Applications are open for the Enactus VIT Chennai 2026 cohort. Pick two departments, answer a few questions and join a team of student changemakers.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyJoinSection />
      <DepartmentsSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
