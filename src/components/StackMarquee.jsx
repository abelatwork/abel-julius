// @copyright 2026 Abel-Julius
// @license Apache-2.0

import { useRef } from "react";

import { tools } from "../data/tools";
import { useInView } from "../hooks/useInView";

const ToolItems = ({ "aria-hidden": ariaHidden }) => (
  <ul
    aria-hidden={ariaHidden}
    className="flex shrink-0 items-center gap-3 pr-3"
  >
    {tools.map(({ id, logo, name }) => (
      <li
        key={id}
        className="flex h-10 shrink-0 items-center gap-2 rounded-lg border border-border-strong/60 bg-background/40 px-3"
      >
        <img
          src={logo}
          width={18}
          height={18}
          alt=""
          className="size-4.5 shrink-0 object-contain"
        />
        <span className="text-[13px] text-muted-foreground">{name}</span>
      </li>
    ))}
  </ul>
);

const StackMarquee = ({ className = "" }) => {
  const marqueeRef = useRef(null);
  const isInView = useInView(marqueeRef);

  return (
    <div
      ref={marqueeRef}
      role="group"
      aria-label="Technology stack"
      className={`welcome-stack-marquee w-full overflow-hidden ${isInView ? "is-in-view" : ""} ${className}`}
    >
      <div className="welcome-stack-track flex w-max">
        <ToolItems />
        <ToolItems aria-hidden="true" />
      </div>
    </div>
  );
};

export default StackMarquee;
