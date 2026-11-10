// @copyright 2026 Abel-Julius
// @license Apache-2.0

export const site = {
  name: "Abel Julius",
  role: "Full-stack Web Developer",
  email: "abelkjulius@gmail.com",
  formAction: "https://forminit.com/f/i9chb6fmtmu",
};

export const navLinks = [
  { label: "Home", href: "#welcome" },
  { label: "Projects", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact me", href: "#contact", cta: true },
];

export const sectionIds = navLinks.map(({ href }) => href.slice(1));

export const sitemap = [
  { label: "Home", href: "#welcome" },
  { label: "Projects", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];
