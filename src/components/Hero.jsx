// @copyright 2026 Abel-Julius
// @license Apache-2.0

import PrimaryActions from "./ui/PrimaryActions";
import StackMarquee from "./StackMarquee";
import { aboutStats, bio } from "../data/about";
import { site } from "../data/site";

/**
 * Opening screen for phones and tablets: the portrait stands centred in a
 * full-bleed band, the name takes the lower seam and the details follow.
 * Hidden from lg up, where the two-column layout takes over.
 */
const Hero = () => (
  <section aria-labelledby="hero-title" className="flex flex-col lg:hidden">
    <div
      data-hero-surface
      className="relative h-[42svh] max-h-107 min-h-75 shrink-0 overflow-hidden bg-inset sm:max-h-117"
    >
      <img
        src="/images/hero-banner2.png"
        width={656}
        height={800}
        alt={`Portrait of ${site.name}`}
        fetchPriority="high"
        className="pointer-events-none absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 select-none object-contain object-bottom"
      />
    </div>

    <div className="mx-auto flex w-full max-w-140 flex-col gap-6 px-5 pt-5 pb-6 sm:px-0">
      <div>
        <h1
          id="hero-title"
          className="text-[34px] leading-[1.05] font-light tracking-[-0.02em] sm:text-[38px]"
        >
          {site.name}
        </h1>

        <p className="mt-2 text-[15px] font-medium text-primary tracking-[-0.01em]">
          {site.role}
        </p>

        <p className="mt-2 text-[13.5px] leading-[1.65] text-muted-foreground sm:text-sm">
          {bio}
        </p>

        <StackMarquee className="mt-4" />
      </div>

      <dl className="grid grid-cols-2">
        {aboutStats.map(({ id, value, suffix, label }) => (
          <div key={id} className="py-2 pl-4 first:pl-0">
            <dd className="text-[30px] leading-none font-normal tracking-[-0.01em] tabular-nums">
              {value}
              <span className="text-primary">{suffix}</span>
            </dd>

            <dt className="mt-1 text-[10px] tracking-widest text-muted-foreground uppercase">
              {label}
            </dt>
          </div>
        ))}
      </dl>

      <PrimaryActions />
    </div>
  </section>
);

export default Hero;
