import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "@/components/layout/PageIntro";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { faqs } from "@/data/faqs";

const title = "FAQs — Enactus VIT Chennai Recruitment";
const description =
  "Eligibility, time commitment, department preferences and what happens after you apply — answers to the most common Enactus VIT Chennai recruitment questions.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [],
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQs"
        title="Everything you wanted to ask."
        description="If something still isn't clear, email us — we reply to every question during recruitment."
      />
      <FaqSection />
      <CtaBand />
    </>
  );
}
