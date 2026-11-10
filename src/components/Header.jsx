// @copyright 2026 Abel-Julius
// @license Apache-2.0

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import ActionLink from "./ui/ActionLink";
import Container from "./ui/Container";
import Icon from "./ui/Icon";
import { useHeroSurface } from "../hooks/useHeroSurface";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { navLinks, sectionIds, site } from "../data/site";
import { cn } from "../lib/cn";

const menuLinks = navLinks.filter(({ cta }) => !cta);
const contactLink = navLinks.find(({ cta }) => cta);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(() => window.scrollY > 0);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const navLinkRefs = useRef(new Map());
  const activeId = useScrollSpy(sectionIds);
  const onHeroSurface = useHeroSurface();
  const welcomeVisible = useHeroSurface('id="welcome"');
  const [activePill, setActivePill] = useState(null);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 0);

    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const activeLink = navLinkRefs.current.get(activeId);
    if (!nav || !activeLink) return undefined;

    const updatePosition = () => {
      setActivePill({
        left: activeLink.offsetLeft,
        top: activeLink.offsetTop,
        width: activeLink.offsetWidth,
        height: activeLink.offsetHeight,
      });
    };

    updatePosition();
    const observer = new ResizeObserver(updatePosition);
    observer.observe(nav);
    observer.observe(activeLink);
    return () => observer.disconnect();
  }, [activeId]);

  // Escape closes the mobile panel.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // A tap or click outside the header dismisses the overlay panel.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [menuOpen]);

  // The panel only exists below md; collapse it when the viewport grows.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "site-header sticky top-0 z-40 transition-colors duration-300",
        hasScrolled && "is-scrolled",
        !hasScrolled && (onHeroSurface || welcomeVisible) && "is-on-hero",
      )}
    >
      <Container className="relative flex h-16 items-center justify-between gap-6">
        <a href="#welcome" className="flex items-center gap-2.5">
          <picture>
            <source
              srcSet="/images/logo-light.svg"
              media="(prefers-color-scheme: light)"
            />
            <img
              src="/images/logo-dark.svg"
              width={28}
              height={28}
              alt=""
              className="size-7"
            />
          </picture>
          <span
            className={cn(
              "text-[15px] font-semibold tracking-[-0.01em] transition-[opacity,visibility] duration-300",
              welcomeVisible ? "invisible opacity-0" : "visible opacity-100",
            )}
          >
            {site.name}
          </span>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <nav
            ref={navRef}
            aria-label="Primary"
            className="relative flex items-center gap-1"
          >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute rounded-md bg-primary/15 ring-1 ring-primary/30 transition-[transform,width,height,opacity] duration-300 ease-out"
            style={{
              width: activePill?.width ?? 0,
              height: activePill?.height ?? 0,
              transform: `translate(${activePill?.left ?? 0}px, ${activePill?.top ?? 0}px)`,
              opacity: activePill ? 1 : 0,
            }}
          />
          {menuLinks.map(({ label, href }) => {
            const id = href.slice(1);
            const active = activeId === id;

            return (
              <a
                key={id}
                href={href}
                ref={(element) => {
                  if (element) navLinkRefs.current.set(id, element);
                  else navLinkRefs.current.delete(id);
                }}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "relative z-10 rounded-md px-3 py-2 text-sm transition-colors",
                  active
                    ? "font-medium text-primary"
                    : "text-muted-foreground hover:bg-card/60 hover:text-foreground",
                )}
              >
                {label}
              </a>
            );
          })}
          </nav>
        </div>

        {contactLink ? (
          <ActionLink
            href={contactLink.href}
            className="ml-auto not-md:hidden md:inline-flex"
          >
            {contactLink.label}
          </ActionLink>
        ) : null}

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="grid size-9 place-items-center rounded-md border border-border-strong text-foreground transition-colors hover:bg-card md:hidden"
        >
          <Icon name={menuOpen ? "close" : "menu"} size={18} />
        </button>
      </Container>

      {/* Floating panel under the menu button: half the width, blurred backdrop.
          Absolutely placed so opening it never pushes the page content down. */}
      <div
        id="primary-nav"
        hidden={!menuOpen}
        className="menu-glass absolute top-full right-6 mt-2 w-1/2 min-w-43 max-w-67 animate-[menu-in_160ms_ease-out] origin-top-right rounded-xl border border-border p-1.5 md:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map(({ label, href }) => {
            const active = activeId === href.slice(1);

            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "true" : undefined}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-[15px] transition-colors",
                    active
                      ? "bg-primary/15 font-medium text-primary ring-1 ring-primary/30"
                      : "text-muted-foreground hover:bg-card/70 hover:text-foreground",
                  )}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
