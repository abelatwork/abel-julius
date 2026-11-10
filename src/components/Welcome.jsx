// @copyright 2026 Abel-Julius
// @license Apache-2.0

import Container from "./ui/Container";
import PrimaryActions from "./ui/PrimaryActions";
import { aboutStats, bio } from "../data/about";
import { site } from "../data/site";
import StackMarquee from "./StackMarquee";

const Welcome = () => (
  <section
    aria-labelledby="welcome-title"
    className="hidden min-h-[calc(100dvh-4rem)] items-center overflow-hidden  bg-inset lg:flex"
  >
    <Container className="grid w-full items-center gap-12 py-16 lg:pl-36 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]">
      <div className="welcome-morph-out max-w-2xl">
        {/* <p className="mb-5 text-xs font-medium tracking-[0.2em] text-primary uppercase">
          Welcome to my portfolio
        </p> */}

        <h1
          id="welcome-title"
          className="max-w-[13ch] text-5xl leading-[1.02] font-semibold tracking-normal xl:text-7xl"
        >
          {site.name}
        </h1>

        <p className="mt-5 text-xl text-primary font-medium tracking-[-0.02em]">
          {site.role}
        </p>
        <p className="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-muted-foreground">
          {bio}
        </p>

        <StackMarquee className="mt-6" />

        <dl className="mt-8 flex gap-10 border-t border-border py-5">
          {aboutStats.map(({ id, value, suffix, label }) => (
            <div key={id}>
              <dd className="text-3xl leading-none font-medium tabular-nums">
                {value}
                <span className="text-primary">{suffix}</span>
              </dd>
              <dt className="mt-2 text-xs text-muted-foreground">{label}</dt>
            </div>
          ))}
        </dl>

        <PrimaryActions className="mt-7 max-w-90" />
      </div>

      <div className="welcome-morph-out relative mx-auto hidden aspect-4/5 w-full max-w-107 items-end justify-center overflow-hidden lg:flex">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,color-mix(in_oklab,var(--primary)_20%,transparent),transparent_65%)]"
        />
        <img
          src="/images/hero-banner.png"
          width={656}
          height={800}
          alt={`Portrait of ${site.name}`}
          fetchPriority="high"
          className="relative h-full w-full object-contain object-bottom"
        />
      </div>
    </Container>
  </section>
);

export default Welcome;
