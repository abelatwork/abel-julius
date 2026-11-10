// @copyright 2026 Abel-Julius
// @license Apache-2.0

import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Work = () => (
  <section id="work" aria-labelledby="work-title" className="lg:scroll-mt-25">
    <div className="flex items-end justify-between gap-4">
      <h2 id="work-title" className="text-2xl font-semibold tracking-tight">
        Projects
      </h2>
      <span className="text-[13px] text-muted-foreground">
        {projects.length} projects
      </span>
    </div>

    <div className="mt-4 grid gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

export default Work;
