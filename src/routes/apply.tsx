import { createFileRoute } from "@tanstack/react-router";

import { ApplyFlow } from "@/components/form/ApplyFlow";

const title = "Apply — Enactus VIT Chennai Recruitment 2026";
const description =
  "Start your Enactus VIT Chennai application: choose two department preferences, answer department-specific questions and share your work.";

export const Route = createFileRoute("/apply")({
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
  component: ApplyPage,
});

function ApplyPage() {
  return <ApplyFlow />;
}
