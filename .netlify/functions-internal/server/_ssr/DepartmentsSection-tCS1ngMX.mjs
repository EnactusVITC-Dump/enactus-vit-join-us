import { o as __toESM } from "../_runtime.mjs";
import { n as departments } from "./departments-CR7h14e2.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-slot+react.mjs";
import { n as cn, t as Button } from "./Button-BsENQvP7.mjs";
import { A as ArrowUpRight, C as Coins, d as PenTool, o as Settings, p as Megaphone, w as CodeXml } from "../_libs/lucide-react.mjs";
import { n as useReducedMotion, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DepartmentsSection-tCS1ngMX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Fade + slide-up reveal, triggered once when the element enters the viewport. */
function Reveal({ children, delay = 0, y = 24, className }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduced ? void 0 : {
			opacity: 0,
			y
		},
		whileInView: reduced ? void 0 : {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
/** Counts up to `value` when scrolled into view. */
function Counter({ value, suffix = "" }) {
	const ref = import_react.useRef(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const reduced = useReducedMotion();
	const [display, setDisplay] = import_react.useState(0);
	import_react.useEffect(() => {
		if (!inView) return;
		if (reduced) {
			setDisplay(value);
			return;
		}
		const duration = 1400;
		const start = performance.now();
		let frame = 0;
		const tick = (now) => {
			const t = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - t, 3);
			setDisplay(Math.round(value * eased));
			if (t < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [
		inView,
		value,
		reduced
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [display, suffix]
	});
}
function Card({ className, interactive, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-2xl border border-hairline bg-card p-8", interactive && "hover-lift hover:border-ink/25", className),
		...props
	});
}
function Section({ className, children, id, tone = "cream" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("py-24 lg:py-32", tone === "white" && "bg-card", tone === "ink" && "bg-ink text-ink-foreground", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "section-x",
			children
		})
	});
}
var departmentIcons = {
	tech: CodeXml,
	design: PenTool,
	finance: Coins,
	operations: Settings,
	mns: Megaphone
};
function DepartmentsSection({ detailed = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "departments",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "Our departments"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "display mt-5 text-5xl sm:text-6xl lg:text-7xl",
				children: [
					"Find your role.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Fuel the impact."
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-base leading-relaxed text-muted-foreground",
					children: "Five departments, one shared goal. Pick two preferences when you apply — you'll answer a short set of questions for each."
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: [departments.map((d, i) => {
				const Icon = departmentIcons[d.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						interactive: true,
						className: "group h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-12 items-center justify-center rounded-xl bg-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-primary-foreground" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display mt-6 text-2xl",
								children: d.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
								children: d.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground",
								children: d.description
							}),
							detailed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2.5 border-t border-hairline pt-6",
								children: d.responsibilities.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 bg-primary" }), r]
								}, r))
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 pt-6 border-t border-hairline mt-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `/apply/${d.id}`,
										children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
									})
								})
							})
						]
					})
				}, d.id);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: departments.length * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					interactive: true,
					className: "flex h-full flex-col justify-between bg-ink text-ink-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "display text-2xl text-primary",
						children: "Not sure yet?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-ink-foreground/70",
						children: "Pick the two that feel closest. The interview is a conversation — we help you land where you'll do your best work."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "mt-8 self-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/#faq",
							children: ["Got questions? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					})]
				})
			})]
		})]
	});
}
//#endregion
export { Section as a, Reveal as i, Counter as n, departmentIcons as o, DepartmentsSection as r, Card as t };
