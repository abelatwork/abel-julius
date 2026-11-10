// @copyright 2026 Abel-Julius
// @license Apache-2.0

import { useEffect, useState } from "react";

/**
 * Marks the section currently crossing the middle band of the viewport. A narrow
 * band keeps the active item stable while two sections are partly visible.
 */
export const useScrollSpy = (ids, rootMargin = "-45% 0px -50% 0px") => {
  const [activeId, setActiveId] = useState(ids[0]);
  const key = ids.join("|");

  useEffect(() => {
    const elements = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [key, rootMargin]);

  return activeId;
};
