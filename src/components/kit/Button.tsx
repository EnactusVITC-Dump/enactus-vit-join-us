import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold uppercase tracking-[0.12em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0",
        ink: "bg-ink text-ink-foreground hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0",
        outline:
          "border border-ink/20 bg-transparent text-foreground hover:border-ink hover:-translate-y-0.5",
        outlineLight:
          "border border-ink-foreground/25 bg-transparent text-ink-foreground hover:border-primary hover:text-primary",
        ghost: "text-foreground hover:bg-accent",
      },
      size: {
        sm: "h-10 rounded-md px-4 text-[11px]",
        md: "h-12 rounded-lg px-6 text-xs",
        lg: "h-14 rounded-lg px-8 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
