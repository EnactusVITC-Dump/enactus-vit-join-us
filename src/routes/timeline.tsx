import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "@/components/layout/PageIntro";
import { CtaBand } from "@/components/sections/CtaBand";
import { TimelineSection } from "@/components/sections/TimelineSection";

const title = "Recruitment Timeline — Enactus VIT Chennai";
const description =
  "Key dates for Enactus VIT Chennai recruitment 2026: applications, shortlisting, interviews, selections and orientation.";

export const Route = createFileRoute("/timeline")({
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
  component: TimelinePage,
});

function TimelinePage() {
  return (
    <>
      <PageIntro
        eyebrow="Recruitment timeline"
        title="Five steps from application to orientation."
        description="Everything happens within two weeks. Watch your email and WhatsApp after each stage."
      />
      <TimelineSection />
      <CtaBand />
    </>
  );
}
