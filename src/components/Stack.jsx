// @copyright 2026 Abel-Julius
// @license Apache-2.0

import { tools } from "../data/tools";
import Icon from "./ui/Icon";

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

    <p className="text-muted-foreground">
      Discover the powerful tools and technologies I use
    </p>

    <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
      {tools.map(({ id, logo, name, description, href }) => (
        <li key={id} className="min-w-0">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} — official website`}
            className="group flex h-full min-w-0 items-center gap-2.5 rounded-lg border border-border bg-card px-3.5 py-3 transition-colors hover:border-border-strong md:items-start md:gap-4 md:rounded-xl md:px-5 md:py-5"
          >
            <img
              src={logo}
              width={32}
              height={32}
              alt=""
              loading="lazy"
              className="size-5 shrink-0 object-contain md:size-8"
            />
            <div className="min-w-0 flex-1 md:flex md:flex-col md:gap-2">
              <div className="flex min-w-0 items-center justify-between gap-2">
                <span className="truncate text-[13px] md:text-base md:font-semibold">
                  {name}
                </span>
                <Icon
                  name="arrow_outward"
                  size={15}
                  className="hidden text-muted-foreground transition-colors group-hover:text-primary md:block"
                />
              </div>
              <p className="hidden text-sm leading-relaxed text-muted-foreground md:block">
                {description}
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Stack;
