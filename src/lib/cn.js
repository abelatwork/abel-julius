// @copyright 2026 Abel-Julius
// @license Apache-2.0

/** Joins conditional class names. */
export const cn = (...values) => values.filter(Boolean).join(" ");
