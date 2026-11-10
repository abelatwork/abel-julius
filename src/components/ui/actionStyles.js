// @copyright 2026 Abel-Julius
// @license Apache-2.0

import { cn } from "../../lib/cn";

const variants = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  outline: "border border-border-strong text-foreground hover:bg-card",
};

const sizes = {
  md: "h-9 px-4 text-sm",
  lg: "h-11 px-5 text-sm",
};

/** Shared class recipe for anchors and buttons so both look identical. */
export const actionStyles = ({
  variant = "primary",
  size = "md",
  className,
} = {}) =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-[-0.005em] whitespace-nowrap transition-[color,background-color,border-color,opacity] duration-200 active:translate-y-px",
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    className,
  );
