import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "@/components/layout/PageIntro";
import { CtaBand } from "@/components/sections/CtaBand";
import { DepartmentsSection } from "@/components/sections/DepartmentsSection";

const title = "Departments — Enactus VIT Chennai Recruitment";
const description =
  "Tech & Web Development, Creative, Finance, Operations and MNS. See what each Enactus VIT Chennai department does before you pick your two preferences.";

export const Route = createFileRoute("/departments")({
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
  component: DepartmentsPage,
});

function DepartmentsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our departments"
        title="Five departments. One shared goal."
        description="Each department owns a distinct part of how a venture gets built. Read what members actually do, then pick the two that fit you best."
      />
      <DepartmentsSection detailed />
      <CtaBand />
    </>
  );
}
