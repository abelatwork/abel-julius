// @copyright 2026 Abel-Julius
// @license Apache-2.0

import { useCallback, useEffect, useRef, useState } from "react";

import Stars from "./ui/Stars";
import { reviews } from "../data/reviews";
import { useInView } from "../hooks/useInView";

const AUTOPLAY_MS = 2000;
const RESUME_AFTER_TOUCH_MS = 4000;
const SNAP_TOLERANCE = 8;

const Reviews = () => {
  const trackRef = useRef(null);
  const resumeTimer = useRef(null);
  const [paused, setPaused] = useState(false);
  const isInView = useInView(trackRef);

  const scrollToCard = useCallback((card) => {
    const track = trackRef.current;
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, []);

  // Advance one card every two seconds, snapping card by card. Hover, focus and
  // touch pause it; reduced-motion users get no automatic movement at all.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || paused || !isInView) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return undefined;

    const id = window.setInterval(() => {
      const cards = Array.from(track.children);
      const maxScroll = track.scrollWidth - track.clientWidth;

      if (track.scrollLeft >= maxScroll - SNAP_TOLERANCE) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      const next = cards.find(
        (card) => card.offsetLeft > track.scrollLeft + SNAP_TOLERANCE,
      );

      scrollToCard(next);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [isInView, paused, scrollToCard]);

  useEffect(
    () => () => {
      window.clearTimeout(resumeTimer.current);
    },
    [],
  );

  const pause = () => {
    window.clearTimeout(resumeTimer.current);
    setPaused(true);
  };

  const resume = () => {
    window.clearTimeout(resumeTimer.current);
    setPaused(false);
  };

  // Touch scrolling should win over autoplay, then hand control back.
  const pauseAfterTouch = () => {
    setPaused(true);
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(
      () => setPaused(false),
      RESUME_AFTER_TOUCH_MS,
    );
  };

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="mt-10 pt-8"
    >
      <div className="flex items-end justify-between gap-4">
        <h2
          id="reviews-title"
          className="text-2xl font-semibold tracking-tight"
        >
          Reviews
        </h2>
        <span className="text-[13px] text-muted-foreground">
          {reviews.length} clients
        </span>
      </div>

      <div
        ref={trackRef}
        role="group"
        aria-label="Client reviews"
        tabIndex={0}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
        onTouchStart={pauseAfterTouch}
        className="no-scrollbar relative mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-xl pb-1"
      >
        {reviews.map(({ id, quote, name, company, avatar, rating }) => (
          <figure
            key={id}
            className="w-[86%] shrink-0 snap-start rounded-xl border border-border bg-card p-4 sm:w-[46%] lg:w-[31.8%]"
          >
            <Stars count={rating} />

            <blockquote className="mt-2.5 text-[13.5px] leading-relaxed">
              {quote}
            </blockquote>

            <figcaption className="mt-4 flex items-center gap-2 border-t border-border pt-3">
              <img
                src={avatar}
                width={28}
                height={28}
                alt=""
                loading="lazy"
                className="size-7 rounded-full object-cover"
              />
              <span className="text-[13px] font-medium">{name}</span>
              <span className="text-[12px] text-muted-foreground">
                {company}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
