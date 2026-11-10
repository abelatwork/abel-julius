// @copyright 2026 Abel-Julius
// @license Apache-2.0

import Icon from "./Icon";

const Stars = ({ count = 5 }) => (
  <span
    role="img"
    aria-label={`${count} out of 5 stars`}
    className="flex items-center gap-1 text-secondary"
  >
    {Array.from({ length: count }, (_, index) => (
      <Icon key={index} name="star" size={15} fill />
    ))}
  </span>
);

export default Stars;
