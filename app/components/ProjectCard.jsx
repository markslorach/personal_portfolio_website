import Link from "next/link";
import React from "react";

export const ProjectCard = ({ project }) => {
  return (
    <section>
      <h2>{project.name}</h2>
      <p>{project.description.slice(0, 100)}...</p>
      <Link href={`/projects/${project.id}`}>
        <button>View Project</button>
      </Link>
    </section>
  );
};
