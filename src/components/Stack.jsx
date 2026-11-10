// @copyright 2026 Abel-Julius
// @license Apache-2.0

import { tools } from "../data/tools";

/** The tools used day to day, listed as their own section after Work. */
const Stack = () => (
  <section id="stack" aria-labelledby="stack-title" className="mt-10 pt-8">
    <div className="flex items-end justify-between gap-4">
      <h2 id="stack-title" className="text-2xl font-semibold tracking-tight">
        Stack
      </h2>

      <span className="text-[13px] text-muted-foreground">
        {tools.length} tools
      </span>
    </div>

    <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-8">
      {tools.map(({ id, logo, name }) => (
        <li
          key={id}
          className="flex min-w-0 items-center gap-2.5 rounded-lg border border-border bg-card px-3.5 py-3"
        >
          <img
            src={logo}
            width={18}
            height={18}
            alt=""
            loading="lazy"
            className="size-4.5 shrink-0 object-contain"
          />
          <span className="truncate text-[13px]">{name}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Stack;
