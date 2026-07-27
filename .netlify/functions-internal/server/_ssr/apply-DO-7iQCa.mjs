import { o as __toESM } from "../_runtime.mjs";
import { n as departments, t as departmentMap } from "./departments-CR7h14e2.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-slot+react.mjs";
import { n as cn, t as Button } from "./Button-BsENQvP7.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./apply-CT_F7XRp.mjs";
import { D as Check, E as ChevronDown, M as ArrowLeft, i as Upload, j as ArrowRight, k as Ban, u as Pencil } from "../_libs/lucide-react.mjs";
import { i as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { o as departmentIcons, t as Card } from "./DepartmentsSection-tCS1ngMX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/apply-DO-7iQCa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Read-only tabs showing which preference round is active. */
function DepartmentTabs({ first, second, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-3",
		children: [{
			id: first,
			slot: "First preference"
		}, {
			id: second,
			slot: "Second preference"
		}].map(({ id, slot }) => {
			const dept = departmentMap[id];
			const Icon = departmentIcons[id];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-3 rounded-full border px-5 py-2.5 transition-colors duration-300", active === id ? "border-ink bg-primary" : "border-hairline bg-card text-muted-foreground"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-[0.14em]",
						children: dept.shortName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-[10px] uppercase tracking-[0.14em] opacity-60 sm:inline",
						children: slot
					})
				]
			}, id);
		})
	});
}
function PreferenceColumn({ slotLabel, helper, selected, disabledId, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow",
			children: slotLabel
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted-foreground",
			children: helper
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-3",
			children: departments.map((d) => {
				const Icon = departmentIcons[d.id];
				const active = selected === d.id;
				const disabled = disabledId === d.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled,
					onClick: () => onSelect(d.id),
					className: cn("flex w-full items-center gap-4 rounded-2xl border bg-card px-5 py-4 text-left transition-all duration-300", active ? "border-ink shadow-lift" : "border-hairline hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-soft", disabled && "cursor-not-allowed opacity-35 hover:translate-y-0 hover:shadow-none"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("flex size-10 shrink-0 items-center justify-center rounded-xl", active ? "bg-primary" : "bg-muted"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-semibold",
								children: d.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-xs text-muted-foreground",
								children: d.tagline
							})]
						}),
						active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-6 items-center justify-center rounded-full bg-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-ink-foreground" })
						}) : null
					]
				}, d.id);
			})
		})
	] });
}
function PreferenceStep({ first, second, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-2 lg:gap-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreferenceColumn, {
			slotLabel: "First preference",
			helper: "The department you most want to work in.",
			selected: first,
			onSelect: (id) => onSelect("first", id)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreferenceColumn, {
			slotLabel: "Second preference",
			helper: "A different department — your backup allocation.",
			selected: second,
			disabledId: first,
			onSelect: (id) => onSelect("second", id)
		})]
	});
}
/** Personal details, asked once for everyone. */
var personalQuestions = [
	{
		id: "fullName",
		label: "Full name",
		type: "text",
		placeholder: "Your name",
		required: true
	},
	{
		id: "email",
		label: "Email ID",
		type: "text",
		placeholder: "you@vitstudent.ac.in",
		required: true
	},
	{
		id: "phone",
		label: "Phone number",
		type: "text",
		placeholder: "10 digit number",
		required: true
	},
	{
		id: "registration",
		label: "Registration number",
		type: "text",
		placeholder: "24BCE1234",
		required: true
	},
	{
		id: "year",
		label: "Academic year",
		type: "select",
		options: [
			"First year",
			"Second year",
			"Third year",
			"Fourth year"
		],
		required: true
	},
	{
		id: "branch",
		label: "Branch",
		type: "text",
		placeholder: "e.g. CSE, Mechanical",
		required: true
	},
	{
		id: "motivation",
		label: "Why do you want to join Enactus VITC?",
		type: "textarea",
		placeholder: "Two or three honest sentences are enough.",
		required: true
	},
	{
		id: "availability",
		label: "Weekly availability",
		type: "radio",
		options: [
			"Under 4 hours",
			"4 — 6 hours",
			"6 — 10 hours",
			"More than 10 hours"
		],
		required: true
	}
];
/** Common closing questions, asked once after the department rounds. */
var projectQuestions = [
	{
		id: "github",
		label: "GitHub profile",
		type: "link",
		placeholder: "https://github.com/username"
	},
	{
		id: "linkedin",
		label: "LinkedIn profile",
		type: "link",
		placeholder: "https://linkedin.com/in/username"
	},
	{
		id: "portfolio",
		label: "Portfolio / website",
		type: "link",
		placeholder: "https://yourwork.com"
	},
	{
		id: "bestProject",
		label: "Your best project so far",
		type: "text",
		placeholder: "Project name",
		required: true
	},
	{
		id: "projectDescription",
		label: "Describe that project",
		type: "textarea",
		placeholder: "What was the problem, what did you build, and what happened after?",
		required: true
	}
];
var departmentQuestions = {
	tech: [
		{
			id: "tech_stack",
			label: "Which technologies are you comfortable with?",
			type: "checkbox",
			options: [
				"HTML / CSS",
				"JavaScript",
				"React / Next.js",
				"Node.js",
				"Python",
				"Databases",
				"UI libraries",
				"Git"
			],
			required: true
		},
		{
			id: "tech_level",
			label: "How would you describe your current level?",
			type: "radio",
			options: [
				"Just starting out",
				"Built a few small projects",
				"Comfortable shipping features",
				"Can own a full product"
			],
			required: true
		},
		{
			id: "tech_build",
			label: "Describe something you have built end to end",
			type: "textarea",
			placeholder: "What it does, what you chose to use, and what broke along the way.",
			required: true
		},
		{
			id: "tech_repo",
			label: "Link to code you are proud of",
			type: "link",
			placeholder: "https://github.com/username/project"
		},
		{
			id: "tech_idea",
			label: "One digital tool that would make our field projects easier",
			type: "textarea",
			placeholder: "Be specific — who uses it and what changes for them?",
			required: true
		}
	],
	design: [
		{
			id: "design_skills",
			label: "Where do you do your best work?",
			type: "checkbox",
			options: [
				"Graphic design",
				"Video editing",
				"Photography",
				"Illustration",
				"Motion graphics",
				"Copywriting",
				"Social content"
			],
			required: true
		},
		{
			id: "design_tools",
			label: "Primary tool",
			type: "select",
			options: [
				"Figma",
				"Adobe Photoshop",
				"Illustrator",
				"Premiere Pro / After Effects",
				"Canva",
				"DaVinci Resolve",
				"Other"
			],
			required: true
		},
		{
			id: "design_portfolio",
			label: "Portfolio, Behance or Drive link",
			type: "link",
			placeholder: "https://behance.net/username"
		},
		{
			id: "design_story",
			label: "Pitch a 30 second film about a social venture",
			type: "textarea",
			placeholder: "Opening shot, the turn, the closing line.",
			required: true
		},
		{
			id: "design_critique",
			label: "A campaign you admire, and why it worked",
			type: "textarea",
			placeholder: "Brand, idea, and the craft decision that carried it."
		}
	],
	finance: [
		{
			id: "fin_skills",
			label: "Where are your financial skills strongest?",
			type: "checkbox",
			options: [
				"Budgeting & allocation",
				"Expense tracking & auditing",
				"Financial modeling & planning",
				"Sponsorship negotiation support",
				"Excel / Google Sheets formulas",
				"Accounting principles"
			],
			required: true
		},
		{
			id: "fin_experience",
			label: "Have you managed event or project finances before?",
			type: "radio",
			options: [
				"Managed finances for a school/college club or event",
				"Managed personal freelance/project budgets",
				"No previous experience, but very interested to learn"
			],
			required: true
		},
		{
			id: "fin_budget_scenario",
			label: "A social project needs a ₹25,000 budget, but you only have ₹15,000 allocated. How do you approach this?",
			type: "textarea",
			placeholder: "Where would you look to cut costs, optimize resources, or find alternative support?",
			required: true
		},
		{
			id: "fin_tools",
			label: "Which tools do you use for tracking data or budgets?",
			type: "checkbox",
			options: [
				"Microsoft Excel",
				"Google Sheets",
				"Tally",
				"Notion databases",
				"Pen & paper / physical ledgers"
			],
			required: true
		}
	],
	operations: [
		{
			id: "ops_experience",
			label: "Where have you organised something before?",
			type: "checkbox",
			options: [
				"School / college events",
				"Clubs and chapters",
				"Sports teams",
				"NGO or volunteering",
				"Fests",
				"Nowhere yet"
			],
			required: true
		},
		{
			id: "ops_style",
			label: "How do you keep a plan on track?",
			type: "radio",
			options: [
				"Detailed trackers",
				"Daily check-ins",
				"Clear owners per task",
				"All of the above"
			],
			required: true
		},
		{
			id: "ops_crisis",
			label: "A field visit falls apart 12 hours before. What do you do?",
			type: "textarea",
			placeholder: "Walk us through the first three calls you make.",
			required: true
		},
		{
			id: "ops_scale",
			label: "One process at Enactus VITC you would systemise first",
			type: "textarea",
			required: true
		}
	],
	mns: [
		{
			id: "mns_focus",
			label: "What are you strongest at?",
			type: "checkbox",
			options: [
				"Cold outreach",
				"Sponsorship pitching",
				"Partnerships",
				"Social media",
				"PR and media",
				"Alumni relations"
			],
			required: true
		},
		{
			id: "mns_confidence",
			label: "Comfort with talking to strangers on a call",
			type: "radio",
			options: [
				"Still nervous",
				"Getting there",
				"Very comfortable"
			],
			required: true
		},
		{
			id: "mns_pitch",
			label: "Pitch Enactus VITC to a sponsor in 80 words",
			type: "textarea",
			placeholder: "Assume they have never heard of us.",
			required: true
		},
		{
			id: "mns_brands",
			label: "Three brands you would approach this year, and why",
			type: "textarea",
			required: true
		}
	]
};
function formatValue(answers, q) {
	const v = answers[q.id];
	if (Array.isArray(v)) return v.length ? v.join(", ") : "—";
	return v && v.trim() ? v : "—";
}
function ReviewBlock({ title, questions, answers, onEdit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-hairline bg-card p-6 shadow-soft sm:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "display text-2xl",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				variant: "outline",
				onClick: onEdit,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {}), " Edit"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "mt-6 space-y-5",
			children: questions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-hairline pt-5 first:border-0 first:pt-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
					children: q.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-2 whitespace-pre-wrap text-sm leading-relaxed",
					children: formatValue(answers, q)
				})]
			}, q.id))
		})]
	});
}
function ReviewStep({ first, second, answers, onEdit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-card p-6 shadow-soft sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "display text-2xl",
						children: "Department preferences"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => onEdit(0),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {}), " Edit"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2",
					children: [{
						slot: "First preference",
						id: first
					}, {
						slot: "Second preference",
						id: second
					}].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-muted p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
							children: p.slot
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display mt-2 text-2xl",
							children: departmentMap[p.id].name
						})]
					}, p.slot))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewBlock, {
				title: "Personal details",
				questions: personalQuestions,
				answers,
				onEdit: () => onEdit(1)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewBlock, {
				title: `${departmentMap[first].shortName} answers`,
				questions: departmentQuestions[first],
				answers,
				onEdit: () => onEdit(2)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewBlock, {
				title: `${departmentMap[second].shortName} answers`,
				questions: departmentQuestions[second],
				answers,
				onEdit: () => onEdit(3)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewBlock, {
				title: "Projects & links",
				questions: projectQuestions,
				answers,
				onEdit: () => onEdit(4)
			})
		]
	});
}
/** Thin yellow progress bar with animated fill. */
function Progress({ value, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-1 w-full overflow-hidden rounded-full bg-ink/10", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full bg-primary transition-[width] duration-500 ease-out",
			style: { width: `${Math.min(Math.max(value, 0), 100)}%` }
		})
	});
}
function StepHeader({ step, total, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow",
				children: [
					"Step ",
					step,
					" of ",
					total
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
				children: [Math.round(step / total * 100), "% complete"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
			className: "mt-4",
			value: step / total * 100
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "display mt-10 text-5xl sm:text-6xl lg:text-7xl",
			children: title
		}),
		subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-xl text-base leading-relaxed text-muted-foreground",
			children: subtitle
		}) : null
	] });
}
var fieldBase = "w-full rounded-xl border border-hairline bg-card px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 shadow-soft transition-all duration-200 focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-primary/60";
function FieldShell({ label, help, required, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-xs font-semibold uppercase tracking-[0.14em] text-foreground",
				children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1 text-primary",
					children: "*"
				}) : null]
			}),
			children,
			help ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: help
			}) : null,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium text-destructive",
				children: error
			}) : null
		]
	});
}
function TextInput({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn(fieldBase, className),
		...props
	});
}
function TextArea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		rows: 5,
		className: cn(fieldBase, "resize-none leading-relaxed", className),
		...props
	});
}
function Select({ options, placeholder = "Select an option", className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			className: cn(fieldBase, "appearance-none pr-11", className),
			...props,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: placeholder
			}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o,
				children: o
			}, o))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" })]
	});
}
function RadioGroup({ options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: options.map((o) => {
			const active = value === o;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onChange(o),
				className: cn("flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-all duration-200", active ? "border-ink bg-card shadow-soft" : "border-hairline bg-card/60 hover:border-ink/30"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("flex size-4 shrink-0 items-center justify-center rounded-full border", active ? "border-ink bg-primary" : "border-ink/30"),
					children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-ink" }) : null
				}), o]
			}, o);
		})
	});
}
function CheckboxGroup({ options, value, onChange }) {
	const toggle = (o) => onChange(value.includes(o) ? value.filter((v) => v !== o) : [...value, o]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-3",
		children: options.map((o) => {
			const active = value.includes(o);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => toggle(o),
				className: cn("flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all duration-200", active ? "border-ink bg-primary text-primary-foreground" : "border-hairline bg-card hover:border-ink/30"),
				children: [active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : null, o]
			}, o);
		})
	});
}
function FileUpload({ fileName, onFile }) {
	const inputRef = import_react.useRef(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => inputRef.current?.click(),
		className: "flex w-full items-center justify-between gap-4 rounded-xl border border-dashed border-ink/25 bg-card px-4 py-5 text-left text-sm transition-colors hover:border-ink/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-9 items-center justify-center rounded-lg bg-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4 text-primary-foreground" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: fileName ? "font-medium" : "text-muted-foreground",
				children: fileName || "Click to upload your resume"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
			children: fileName ? "Replace" : "Browse"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		ref: inputRef,
		type: "file",
		accept: ".pdf,.doc,.docx",
		className: "hidden",
		onChange: (e) => {
			const file = e.target.files?.[0];
			if (file) onFile(file.name);
		}
	})] });
}
function isAnswered(q, value) {
	if (!q.required) return true;
	if (Array.isArray(value)) return value.length > 0;
	return Boolean(value && value.trim().length > 0);
}
function missingIds(questions, answers) {
	return questions.filter((q) => !isAnswered(q, answers[q.id])).map((q) => q.id);
}
function QuestionField({ question, value, onChange, error }) {
	const text = typeof value === "string" ? value : "";
	const list = Array.isArray(value) ? value : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldShell, {
		label: question.label,
		help: question.help,
		required: question.required,
		error,
		children: [
			question.type === "text" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				value: text,
				placeholder: question.placeholder,
				onChange: (e) => onChange(e.target.value)
			}) : null,
			question.type === "link" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				type: "url",
				inputMode: "url",
				value: text,
				placeholder: question.placeholder,
				onChange: (e) => onChange(e.target.value)
			}) : null,
			question.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
				value: text,
				placeholder: question.placeholder,
				onChange: (e) => onChange(e.target.value)
			}) : null,
			question.type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
				options: question.options ?? [],
				value: text,
				onChange: (e) => onChange(e.target.value)
			}) : null,
			question.type === "radio" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
				options: question.options ?? [],
				value: text,
				onChange
			}) : null,
			question.type === "checkbox" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxGroup, {
				options: question.options ?? [],
				value: list,
				onChange
			}) : null,
			question.type === "file" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUpload, {
				fileName: text,
				onFile: onChange
			}) : null
		]
	});
}
/** Renders any question array — used for personal, department and project steps. */
function QuestionRenderer({ questions, answers, onChange, errors = [] }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-8",
		children: questions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl border border-hairline bg-card p-6 shadow-soft sm:p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionField, {
				question: q,
				value: answers[q.id],
				onChange: (v) => onChange(q.id, v),
				error: errors.includes(q.id) ? "This one is required." : void 0
			})
		}, q.id))
	});
}
var STORAGE_KEY = "enactus-vitc-application-v2";
var empty = {
	first: null,
	second: null,
	appliedDepartments: [],
	answers: {}
};
/**
* Application draft state, persisted to localStorage.
*/
function useApplication() {
	const [state, setState] = (0, import_react.useState)(empty);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) setState({
				...empty,
				...JSON.parse(raw)
			});
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
		} catch {}
	}, [state, hydrated]);
	return {
		state,
		hydrated,
		setAnswer: (0, import_react.useCallback)((id, value) => {
			setState((prev) => ({
				...prev,
				answers: {
					...prev.answers,
					[id]: value
				}
			}));
		}, []),
		setPreference: (0, import_react.useCallback)((slot, value) => {
			setState((prev) => {
				const next = {
					...prev,
					[slot]: value
				};
				if (slot === "first" && next.second === value) next.second = null;
				return next;
			});
		}, []),
		markDepartmentApplied: (0, import_react.useCallback)((id) => {
			setState((prev) => {
				if (prev.appliedDepartments.includes(id)) return prev;
				return {
					...prev,
					appliedDepartments: [...prev.appliedDepartments, id]
				};
			});
		}, []),
		reset: (0, import_react.useCallback)(() => {
			setState((prev) => ({
				...empty,
				appliedDepartments: prev.appliedDepartments
			}));
			try {
				const raw = localStorage.getItem(STORAGE_KEY);
				if (raw) {
					const parsed = JSON.parse(raw);
					localStorage.setItem(STORAGE_KEY, JSON.stringify({
						...empty,
						appliedDepartments: parsed.appliedDepartments
					}));
				}
			} catch {}
		}, [])
	};
}
var TOTAL_STEPS = 6;
var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyVMAQoqN9Mlc5dhofS_fAvvg7uJfbR-97z31HWygDjRAszmRejDTPjuvyQRPfSmUBDuw/exec";
function ApplyFlow({ defaultFirst }) {
	const navigate = useNavigate();
	const { state, hydrated, setAnswer, setPreference, markDepartmentApplied, reset } = useApplication();
	const [step, setStep] = (0, import_react.useState)(0);
	const [errors, setErrors] = (0, import_react.useState)([]);
	const [emailError, setEmailError] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)(false);
	const { first, second, answers } = state;
	(0, import_react.useEffect)(() => {
		if (defaultFirst && !state.first && hydrated) setPreference("first", defaultFirst);
	}, [
		defaultFirst,
		state.first,
		setPreference,
		hydrated
	]);
	const activeQuestions = (0, import_react.useMemo)(() => {
		if (step === 1) return personalQuestions;
		if (step === 2 && first) return departmentQuestions[first];
		if (step === 3 && second) return departmentQuestions[second];
		if (step === 4) return projectQuestions;
		return [];
	}, [
		step,
		first,
		second
	]);
	const meta = (0, import_react.useMemo)(() => {
		switch (step) {
			case 0: return {
				title: "Choose your path.",
				subtitle: "Pick two departments. Your second preference has to be different from the first."
			};
			case 1: return {
				title: "Tell us about you.",
				subtitle: "The basics, so we know who we're reading."
			};
			case 2: return {
				title: `${first ? departmentMap[first].shortName : ""} round.`,
				subtitle: "Questions for your first preference."
			};
			case 3: return {
				title: `${second ? departmentMap[second].shortName : ""} round.`,
				subtitle: "Questions for your second preference."
			};
			case 4: return {
				title: "Show your work.",
				subtitle: "Links, and the project you're proudest of."
			};
			default: return {
				title: "Review & submit.",
				subtitle: "Check everything once. You can still edit any section."
			};
		}
	}, [
		step,
		first,
		second
	]);
	const goTo = (0, import_react.useCallback)((next) => {
		setErrors([]);
		setEmailError(false);
		setStep(next);
		if (typeof window !== "undefined") window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, []);
	const handleNext = () => {
		if (step === 0) {
			if (!first || !second) {
				setErrors(["preferences"]);
				return;
			}
			goTo(1);
			return;
		}
		const missing = missingIds(activeQuestions, answers);
		if (missing.length) {
			setErrors(missing);
			if (typeof window !== "undefined") window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			return;
		}
		if (step === 1) {
			const email = answers["email"];
			if (typeof email === "string" && !email.endsWith("@vitstudent.ac.in")) {
				setEmailError(true);
				if (typeof window !== "undefined") window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
				return;
			}
		}
		goTo(step + 1);
	};
	const handleSubmit = async () => {
		setSubmitting(true);
		setSubmitError(false);
		try {
			const result = await (await fetch(APPS_SCRIPT_URL, {
				method: "POST",
				headers: { "Content-Type": "text/plain;charset=utf-8" },
				body: JSON.stringify({
					first,
					second,
					answers
				})
			})).json();
			if (result.status !== "success") throw new Error(result.message || "Submission failed");
			if (first) markDepartmentApplied(first);
			if (second) markDepartmentApplied(second);
			reset();
			navigate({ to: "/success" });
		} catch (err) {
			console.error("Application submission failed:", err);
			setSubmitError(true);
			setSubmitting(false);
		}
	};
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-screen" });
	if (state.appliedDepartments.length >= 2) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] flex-col items-center justify-center p-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "max-w-md items-center justify-center flex flex-col p-8 bg-card border border-hairline shadow-soft rounded-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-14 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "size-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-2xl mb-3",
					children: "Application Limit Reached"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground text-sm leading-relaxed mb-8",
					children: [
						"You can only apply to a maximum of 2 departments. You have already submitted applications for",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: state.appliedDepartments.map((d) => departmentMap[d].name).join(" and ")
						}),
						". We look forward to reviewing them!"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "md",
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2" }), " Back to Home"]
					})
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "section-x max-w-4xl py-16 lg:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHeader, {
				step: step + 1,
				total: TOTAL_STEPS,
				title: meta.title,
				subtitle: meta.subtitle
			}),
			first && second && step >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DepartmentTabs, {
					first,
					second,
					active: step === 3 ? second : first
				})
			}) : null,
			errors.includes("preferences") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 rounded-xl border border-destructive/30 bg-destructive/5 px-5 py-4 text-sm font-medium text-destructive",
				children: "Select both a first and a second preference to continue."
			}) : null,
			emailError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 rounded-xl border border-destructive/30 bg-destructive/5 px-5 py-4 text-sm font-medium text-destructive",
				children: "Please use a valid @vitstudent.ac.in email address."
			}) : null,
			submitError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 rounded-xl border border-destructive/30 bg-destructive/5 px-5 py-4 text-sm font-medium text-destructive",
				children: "Something went wrong submitting your application. Please check your connection and try again."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 18
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -12
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
						children: [
							step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreferenceStep, {
								first,
								second,
								onSelect: setPreference
							}) : null,
							step >= 1 && step <= 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionRenderer, {
								questions: activeQuestions,
								answers,
								onChange: setAnswer,
								errors
							}) : null,
							step === 5 && first && second ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewStep, {
								first,
								second,
								answers,
								onEdit: goTo
							}) : null
						]
					}, step)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "md",
					onClick: () => goTo(Math.max(step - 1, 0)),
					disabled: step === 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), " Back"]
				}), step < TOTAL_STEPS - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "lg",
					onClick: handleNext,
					children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "lg",
					variant: "ink",
					onClick: handleSubmit,
					disabled: submitting,
					children: [
						submitting ? "Submitting…" : "Submit application",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {})
					]
				})]
			})
		]
	});
}
function ApplyPage() {
	const { first } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyFlow, { defaultFirst: first });
}
//#endregion
export { ApplyPage as component };
