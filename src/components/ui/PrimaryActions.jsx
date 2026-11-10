// @copyright 2026 Abel-Julius
// @license Apache-2.0

import ActionLink from "./ActionLink";
import Icon from "./Icon";
import { cn } from "../../lib/cn";

const layouts = {
  // One row once the viewport can hold both labels at thumb height.
  inline: "grid-cols-1 min-[380px]:grid-cols-[1fr_auto]",
  stacked: "grid-cols-1",
};

/**
 * The page's two primary moves — download the CV, then jump to the work. Shared
 * by the mobile hero and the desktop profile card so the pair never drifts.
 */
const PrimaryActions = ({ layout = "inline", className }) => (
  <div
    className={cn("grid gap-2", layouts[layout] ?? layouts.inline, className)}
  >
    <ActionLink
      href="https://flowcv.com/resume/6po7re6vsu4o"
      target="_blank"
      className="items-center"
      rel="noopener noreferrer"
      size="lg"
      icon={<Icon name="download" size={15} />}
    >
      Download CV
    </ActionLink>

    <ActionLink
      href="#work"
      className="items-center animate-pulse motion-reduce:animate-none"
      variant="outline"
      size="lg"
    >
      View Projects
    </ActionLink>
  </div>
);

export default PrimaryActions;
