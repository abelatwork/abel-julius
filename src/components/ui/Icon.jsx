// @copyright 2026 Abel-Julius
// @license Apache-2.0

import { cn } from "../../lib/cn";

const sizes = {
  12: "text-[12px]",
  13: "text-[13px]",
  14: "text-[14px]",
  15: "text-[15px]",
  16: "text-[16px]",
  18: "text-[18px]",
  20: "text-[20px]",
  22: "text-[22px]",
  24: "text-[24px]",
};

/**
 * Material Symbols Rounded glyph, addressed by its ligature name. Decorative by
 * default: callers supply the accessible label, and `size` is a font size
 * because the glyph is a font character rather than an svg.
 */
const Icon = ({ name, size = 18, fill = false, className }) => (
  <span
    aria-hidden="true"
    className={cn(
      "material-symbols-rounded shrink-0",
      sizes[size] ?? sizes[18],
      fill && "is-filled",
      className,
    )}
  >
    {name}
  </span>
);

export default Icon;
