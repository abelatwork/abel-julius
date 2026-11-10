// @copyright 2026 Abel-Julius
// @license Apache-2.0

import Badge from "./ui/Badge";
import Icon from "./ui/Icon";
import { projectImageSize } from "../data/projects";

/**
 * One project. The whole card is the link when a destination exists, so there
 * is a single tab stop and a single hover target.
 */
const ProjectCard = ({ project }) => {
  const { image, title, description, tags, href } = project;

  const content = (
    <>
      <div className="aspect-4/3 overflow-hidden border-b border-border">
        <img
          src={image}
          width={projectImageSize.width}
          height={projectImageSize.height}
          alt={title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-semibold tracking-[-0.01em]">
            {title}
          </h3>
          {href ? (
            <Icon
              name="arrow_outward"
              size={15}
              className="mt-0.5 hidden text-muted-foreground transition-colors group-hover:text-primary md:block"
            />
          ) : null}
        </div>

        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </>
  );

  const shell =
    "group block overflow-hidden rounded-xl border border-border bg-card transition-colors";

  if (!href) {
    return <article className={shell}>{content}</article>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} — open project`}
      className={`${shell} hover:border-border-strong`}
    >
      {content}
    </a>
  );
};

export default ProjectCard;
