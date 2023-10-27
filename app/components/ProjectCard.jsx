import Link from "next/link";
import React from "react";

export const ProjectCard = ({ project }) => {
  return (
    <article>
    <div className="flex gap-5 py-6">
      <img src={project.image} alt={project.name} className="w-1/2 rounded-md" />
      <div className="flex flex-col justify-between tracking-wide text-white/80 pb-5">
      <h2 className="leading-none font-medium">{project.name}</h2>
      <p className="text-sm font-light">{project.description.slice(0, 100)}...</p>
      <Link href={`/projects/${project.id}`}>
        <p className="text-sm font-light leading-none">View Project</p>
      </Link>
      </div>
    </div>
    </article>
  );
};
