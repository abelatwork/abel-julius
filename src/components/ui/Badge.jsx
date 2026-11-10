// @copyright 2026 Abel-Julius
// @license Apache-2.0

import { cn } from "../../lib/cn";

/** Small outlined label used for technology tags. */
const Badge = ({ children, className }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-md border border-border px-1.5 py-0.5 text-[11px] leading-[1.4] text-muted-foreground",
      className,
    )}
  >
    {children}
  </span>
);

export default Badge;
