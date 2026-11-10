// @copyright 2026 Abel-Julius
// @license Apache-2.0

import { useEffect, useState } from "react";

const isUnderBar = (target, barHeight) =>
  Boolean(target) && target.getBoundingClientRect().bottom > barHeight;

/**
 * True while the marked opening band sits under the sticky bar. Below lg the
 * hero is the first thing on the page, so the bar shares the band's surface and
 * stops sharing it once the band has scrolled past.
 */
export const useHeroSurface = (attribute = "data-hero-surface", barHeight = 64) => {
  const selector = `[${attribute}]`;

  // Read before the first paint so the bar never flashes the page surface on
  // top of the band, and so a page restored mid-scroll starts correct.
  const [atHero, setAtHero] = useState(() =>
    isUnderBar(document.querySelector(selector), barHeight),
  );

  useEffect(() => {
    const target = document.querySelector(selector);
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setAtHero(entry.isIntersecting),
      { rootMargin: `-${barHeight}px 0px 0px 0px`, threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [barHeight, selector]);

  return atHero;
};
