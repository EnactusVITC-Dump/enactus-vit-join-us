import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime, t as Slot } from "../_libs/radix-ui__react-slot+react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold uppercase tracking-[0.12em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0",
			ink: "bg-ink text-ink-foreground hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0",
			outline: "border border-ink/20 bg-transparent text-foreground hover:border-ink hover:-translate-y-0.5",
			outlineLight: "border border-ink-foreground/25 bg-transparent text-ink-foreground hover:border-primary hover:text-primary",
			ghost: "text-foreground hover:bg-accent"
		},
		size: {
			sm: "h-10 rounded-md px-4 text-[11px]",
			md: "h-12 rounded-lg px-6 text-xs",
			lg: "h-14 rounded-lg px-8 text-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { cn as n, Button as t };
