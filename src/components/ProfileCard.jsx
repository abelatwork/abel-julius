// @copyright 2026 Abel-Julius
// @license Apache-2.0

import SecondaryActions from "./ui/SecondaryActions";
import { aboutStats, bio } from "../data/about";
import { contactSocials } from "../data/socials";
import { site } from "../data/site";

/**
 * Desktop side panel. Phones and tablets open on the full-height hero instead,
 * so this column only exists from lg up.
 */
const ProfileCard = () => (
  <aside className="profile-morph-in hidden h-fit lg:sticky lg:top-24 lg:block lg:rounded-xl lg:border lg:border-border lg:bg-card lg:p-5">
    <div className="flex h-42 w-full items-end justify-center overflow-hidden rounded-lg bg-background">
      <img
        src="/images/hero-banner2.png"
        width={656}
        height={800}
        alt={site.name}
        className="h-full w-full object-contain object-bottom"
      />
    </div>

    <div className="mt-4">
      <h2 className="text-xl font-semibold tracking-[-0.02em]">{site.name}</h2>

      <p className="mt-0.5 text-[13px] text-primary">{site.role}</p>
    </div>

    <p className="mt-4 max-w-[62ch] text-[13px] leading-relaxed text-muted-foreground">
      {bio}
    </p>

    <ul className="mt-4 flex items-center gap-3">
      {contactSocials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="grid size-8 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
          >
            <Icon className="size-4" />
          </a>
        </li>
      ))}
    </ul>

    <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4">
      {aboutStats.map(({ id, value, suffix, label }) => (
        <div key={id}>
          <dd className="text-2xl leading-none font-semibold tracking-[-0.02em]">
            {value}
            <span className="text-primary">{suffix}</span>
          </dd>

          <dt className="mt-1 text-[12px] text-muted-foreground">{label}</dt>
        </div>
      ))}
    </dl>

    <SecondaryActions layout="stacked" className="mt-5" />
  </aside>
);

export default ProfileCard;
