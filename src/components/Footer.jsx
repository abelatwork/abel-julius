// @copyright 2026 Abel-Julius
// @license Apache-2.0

import Container from "./ui/Container";
import { site, sitemap } from "../data/site";

const Footer = () => (
  <footer className="border-t border-border">
    <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2.5">
        <picture>
          <source
            srcSet="/images/logo-light.svg"
            media="(prefers-color-scheme: light)"
          />
          <img
            src="/images/logo-dark.svg"
            width={24}
            height={24}
            alt=""
            className="size-6"
          />
        </picture>
        <span className="text-[13px] text-muted-foreground">
          &copy; {new Date().getFullYear()} {site.name}
        </span>
      </div>

      <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {sitemap.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            {label}
          </a>
        ))}
      </nav>
    </Container>
  </footer>
);

export default Footer;
