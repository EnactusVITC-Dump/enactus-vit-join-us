import { o as __toESM } from "../_runtime.mjs";
import { r as whyJoin } from "./departments-CR7h14e2.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-slot+react.mjs";
import { n as cn, t as Button } from "./Button-BsENQvP7.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowUpRight, O as Briefcase, S as Crown, _ as Leaf, a as TrendingUp, b as HeartHandshake, c as Plus, r as Users, s as Rocket, x as Globe, y as Infinity$1 } from "../_libs/lucide-react.mjs";
import { i as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as Section, i as Reveal, n as Counter, r as DepartmentsSection } from "./DepartmentsSection-tCS1ngMX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-avWe5nQR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var about_crowd_default = "/assets/about-crowd-tIR50D5Z.jpg";
var about_work_default = "/assets/about-work-YCD8SfDT.jpg";
var pillars = [
	{
		icon: Rocket,
		title: "Entrepreneurship",
		copy: "Ventures, not charity."
	},
	{
		icon: Leaf,
		title: "Sustainability",
		copy: "Impact that outlives us."
	},
	{
		icon: Users,
		title: "Collaboration",
		copy: "Five departments, one team."
	}
];
var values = [
	{
		label: "Mission",
		copy: "Build entrepreneurial ventures that create measurable social impact."
	},
	{
		label: "Vision",
		copy: "A campus where every student turns intent into action."
	},
	{
		label: "Community",
		copy: "Mentorship, honesty and people who stay long after the project ends."
	},
	{
		label: "Values",
		copy: "Ownership, curiosity, integrity and follow-through."
	}
];
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "white",
		id: "about",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-16 lg:grid-cols-2 lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "About Enactus VITC"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display mt-5 text-5xl sm:text-6xl lg:text-7xl",
					children: "We are Enactus VITC"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: "We're a community of doers and thinkers solving real-world problems through entrepreneurial action — from ideation and prototyping to running ventures in the field."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-10 grid gap-8 sm:grid-cols-3",
					children: pillars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "size-6 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "mt-4 text-sm font-semibold",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm text-muted-foreground",
							children: p.copy
						})
					] }, p.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2",
					children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-l-2 border-primary pl-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.18em]",
							children: v.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: v.copy
						})]
					}, v.label))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -right-4 -top-6 size-28 bg-primary",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: about_crowd_default,
							alt: "Enactus VIT Chennai members with a chapter banner",
							width: 1200,
							height: 1200,
							loading: "lazy",
							className: "relative ml-auto w-[82%] rounded-2xl object-cover shadow-lift"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: about_work_default,
							alt: "Members working together on a project",
							width: 900,
							height: 1100,
							loading: "lazy",
							className: "relative -mt-24 w-[52%] rounded-2xl border-8 border-card object-cover shadow-lift"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-6 right-0 size-20 border-2 border-primary",
							"aria-hidden": "true"
						})
					]
				})
			})]
		})
	});
}
function CtaBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "section-x py-20 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display max-w-xl text-5xl text-primary-foreground sm:text-6xl lg:text-7xl",
					children: "Be the change. Join Enactus VITC."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75",
					children: "Applications for the 2026 cohort close on July 24. It takes about ten minutes."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					variant: "ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/#departments",
						children: ["Start your application ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				})]
			}) })
		})
	});
}
var faqs = [
	{
		question: "Who can apply?",
		answer: "Any current VIT Chennai student, from any year and any branch. We recruit for intent and curiosity, not for a CGPA cutoff."
	},
	{
		question: "Is prior experience required?",
		answer: "No. Most of our members learned their craft inside Enactus. Show us how you think and how you follow through — we will teach the rest."
	},
	{
		question: "How much time does it take every week?",
		answer: "Plan for four to six hours a week, with heavier weeks around field visits, competitions and launches. Academics come first, always."
	},
	{
		question: "Can I choose more than one department?",
		answer: "You pick two — a first and a second preference. You will answer a short set of questions for each, and you are finally allocated to one."
	},
	{
		question: "What happens after I submit the application?",
		answer: "You get a confirmation on screen and over email. Shortlisted applicants are invited to an interview with the department leads."
	},
	{
		question: "Do I need a resume or portfolio?",
		answer: "A resume link helps but is optional. If you have GitHub, Behance, a portfolio site or even a rough side project, share it — work speaks louder than words."
	}
];
function FaqSection() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "faq",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "FAQs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display mt-5 text-5xl sm:text-6xl lg:text-7xl",
					children: [
						"Questions?",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Answered."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 max-w-xs text-base leading-relaxed text-muted-foreground",
					children: [
						"Still stuck? Write to us at",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:enactusvitc@gmail.com",
							className: "font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4",
							children: "enactusvitc@gmail.com"
						}),
						"."
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: faqs.map((faq, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .04,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("rounded-2xl border bg-card transition-colors duration-300", isOpen ? "border-ink/25 shadow-soft" : "border-hairline"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpen(isOpen ? null : i),
								className: "flex w-full items-center justify-between gap-6 px-6 py-5 text-left",
								"aria-expanded": isOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold sm:text-base",
									children: faq.question
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: cn("size-4 text-primary-foreground transition-transform duration-300", isOpen && "rotate-45") })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								initial: false,
								children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										height: 0,
										opacity: 0
									},
									animate: {
										height: "auto",
										opacity: 1
									},
									exit: {
										height: 0,
										opacity: 0
									},
									transition: {
										duration: .35,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "px-6 pb-6 text-sm leading-relaxed text-muted-foreground",
										children: faq.answer
									})
								}, "content") : null
							})]
						})
					}, faq.question);
				})
			})]
		})
	});
}
var hero_team_default = "/assets/hero-team-QLKCtbjy.jpg";
var statIcons = [
	Globe,
	Briefcase,
	Infinity$1,
	Users
];
var stats = [
	{
		value: 2026,
		suffix: "",
		label: "Nationals",
		literal: "2026"
	},
	{
		value: 5,
		suffix: "+",
		label: "Projects"
	},
	{
		value: 0,
		suffix: "",
		label: "Impact",
		literal: "∞"
	},
	{
		value: 1,
		suffix: "",
		label: "Family"
	}
];
var ease = [
	.22,
	1,
	.36,
	1
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-ink text-ink-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_team_default,
				alt: "Enactus VIT Chennai members celebrating together",
				width: 1600,
				height: 1104,
				className: "absolute inset-y-0 right-0 h-full w-full object-cover object-[70%_center] opacity-55 lg:w-[62%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-ink/70 lg:bg-transparent",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-y-0 left-0 hidden w-[70%] bg-ink lg:block",
				style: { maskImage: "linear-gradient(to right, black 55%, transparent 100%)" },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute right-8 top-28 hidden size-64 text-primary/60 xl:block",
				viewBox: "0 0 100 100",
				fill: "none",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 10 L90 10 L90 80",
					stroke: "currentColor",
					strokeWidth: "1.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M70 60 L90 80 L70 92",
					stroke: "currentColor",
					strokeWidth: "1.5"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-x relative pb-20 pt-24 lg:pb-28 lg:pt-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							className: "display text-[3.25rem] leading-[0.88] sm:text-7xl lg:text-[5.75rem]",
							initial: {
								opacity: 0,
								y: 28
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								ease
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: "Real impact."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-primary",
									children: "Together."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 inline-block marker-yellow",
									children: "With Enactus."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "mt-8 max-w-md text-base leading-relaxed text-ink-foreground/75 sm:text-lg",
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								delay: .15,
								ease
							},
							children: "Recruitment 2026 is open. Join a team of student changemakers using entrepreneurship to build a better, more sustainable world."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "mt-10 flex flex-wrap items-center gap-4",
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								delay: .28,
								ease
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/apply",
									children: ["Join the team ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outlineLight",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#departments",
									children: "Explore departments"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.dl, {
					className: "mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-foreground/12 bg-ink-foreground/10 lg:ml-auto lg:mt-24 lg:w-[62%] lg:grid-cols-4",
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						delay: .4,
						ease
					},
					children: stats.map((s, i) => {
						const Icon = statIcons[i];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-ink px-6 py-8 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mx-auto size-6 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "display mt-4 text-4xl",
									children: s.literal ? s.literal : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										value: s.value,
										suffix: s.suffix
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-foreground/55",
									children: s.label
								})
							]
						}, s.label);
					})
				})]
			})
		]
	});
}
var icons = {
	Rocket,
	Crown,
	Globe,
	Users,
	TrendingUp,
	HeartHandshake
};
function WhyJoinSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "ink",
		id: "why-join",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-ink-foreground/60",
					children: "Why join Enactus?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display mt-5 text-5xl sm:text-6xl lg:text-7xl",
					children: [
						"More than a club.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "It's a journey."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-md text-base leading-relaxed text-ink-foreground/70",
					children: "Gain real-world experience, build your skills, make lifelong connections and leave behind something that lasts."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "md",
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/#departments",
						children: ["Apply now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-x-10 gap-y-12 sm:grid-cols-2",
				children: whyJoin.map((item, i) => {
					const Icon = icons[item.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-7 text-primary transition-transform duration-300 group-hover:-translate-y-1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display mt-5 text-2xl",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink-foreground/65",
									children: item.description
								})
							]
						})
					}, item.title);
				})
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyJoinSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DepartmentsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Home as component };
