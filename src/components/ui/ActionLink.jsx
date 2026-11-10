// @copyright 2026 Abel-Julius
// @license Apache-2.0

import { actionStyles } from "./actionStyles";

/**
 * Anchor rendered with the button recipe. `icon` takes a ready element so the
 * call site decides which glyph it is and how large it should be.
 */
const ActionLink = ({
  href,
  children,
  icon,
  variant = "primary",
  size = "md",
  className,
  ...rest
}) => (
  <a
    href={href}
    className={actionStyles({ variant, size, className })}
    {...rest}
  >
    {children}
    {icon}
  </a>
);

export default ActionLink;
