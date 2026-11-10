// @copyright 2026 Abel-Julius
// @license Apache-2.0

import { cn } from "../../lib/cn";

const Container = ({ as: Element = "div", className, children }) => (
  <Element className={cn("mx-auto w-full max-w-[1280px] px-6 lg:px-8", className)}>
    {children}
  </Element>
);

export default Container;
