import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/apply-CT_F7XRp.js
var $$splitComponentImporter = () => import("./apply-DO-7iQCa.mjs");
var title = "Apply — Enactus VIT Chennai Recruitment 2026";
var description = "Start your Enactus VIT Chennai application: choose two department preferences, answer department-specific questions and share your work.";
var applySearchSchema = objectType({ first: stringType().optional() });
var Route = createFileRoute("/apply")({
	validateSearch: (search) => applySearchSchema.parse(search),
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
