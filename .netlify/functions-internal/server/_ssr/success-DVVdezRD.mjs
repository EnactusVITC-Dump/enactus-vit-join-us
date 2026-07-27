import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-slot+react.mjs";
import { t as Button } from "./Button-BsENQvP7.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Check, M as ArrowLeft, h as Mail } from "../_libs/lucide-react.mjs";
import { n as useReducedMotion } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/success-DVVdezRD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COLORS = [
	"var(--primary)",
	"var(--ink)",
	"var(--muted-foreground)"
];
/** Lightweight DOM confetti burst — no canvas, no gradients. Client-only. */
function Confetti({ pieces = 60 }) {
	const reduced = useReducedMotion();
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	const shapes = (0, import_react.useMemo)(() => Array.from({ length: pieces }, (_, i) => ({
		id: i,
		left: Math.random() * 100,
		delay: Math.random() * .6,
		duration: 2.6 + Math.random() * 1.8,
		size: 6 + Math.random() * 8,
		rotate: Math.random() * 360,
		color: COLORS[i % COLORS.length],
		round: i % 4 === 0
	})), [pieces]);
	if (reduced || !mounted) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": "true",
		children: shapes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: s.round ? "absolute rounded-full" : "absolute",
			style: {
				left: `${s.left}%`,
				width: s.size,
				height: s.round ? s.size : s.size * .4,
				backgroundColor: s.color
			},
			initial: {
				y: -40,
				opacity: 0,
				rotate: 0
			},
			animate: {
				y: "85vh",
				opacity: [
					0,
					1,
					1,
					0
				],
				rotate: s.rotate
			},
			transition: {
				duration: s.duration,
				delay: s.delay,
				ease: "easeIn"
			}
		}, s.id))
	});
}
var timeline = [
	{
		id: "applications",
		title: "Applications",
		date: "Jul 20 — Jul 24",
		description: "Fill the form, pick two departments and tell us what you want to build."
	},
	{
		id: "shortlisting",
		title: "Shortlisting",
		date: "Jul 25",
		description: "We read every answer. Shortlists go out over email and WhatsApp."
	},
	{
		id: "interviews",
		title: "Interviews",
		date: "Jul 28 — Jul 30",
		description: "A conversation, not an exam. Department leads meet you in person."
	},
	{
		id: "selections",
		title: "Selections",
		date: "Jul 31",
		description: "Final results announced along with your department allocation."
	},
	{
		id: "orientation",
		title: "Orientation",
		date: "Aug 05",
		description: "Meet the team, get your project brief and start week one."
	}
];
function SuccessPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-x max-w-3xl py-24 text-center lg:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "mx-auto flex size-20 items-center justify-center rounded-full bg-primary",
					initial: {
						scale: .6,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					transition: {
						duration: .6,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "size-9 text-primary-foreground",
						strokeWidth: 3
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					className: "display mt-10 text-5xl sm:text-6xl lg:text-7xl",
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .15,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: "Application submitted."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .28,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: "Thank you for applying to Enactus VIT Chennai. We read every single answer — expect an update from us within a few days."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-4 text-left sm:grid-cols-3",
					children: timeline.slice(1, 4).map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "rounded-2xl border border-hairline bg-card p-6 shadow-soft",
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .4 + i * .08,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display mt-3 text-2xl",
							children: step.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: step.description
						})]
					}, step.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-wrap justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), " Return home"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:enactusvitc@gmail.com",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}), " Email the team"]
						})
					})]
				})
			]
		})]
	});
}
//#endregion
export { SuccessPage as component };
