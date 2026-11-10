// @copyright 2026 Abel-Julius
// @license Apache-2.0

import { useEffect, useState } from "react";

export const useInView = (ref) => {
  const [isInView, setIsInView] = useState(
    () => typeof window === "undefined" || !("IntersectionObserver" in window),
  );

  useEffect(() => {
    const target = ref.current;
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [ref]);

  return isInView;
};
