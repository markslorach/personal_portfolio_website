import React from "react";
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/sanity/sanity-utils";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function ProjectList() {
  const projects = await getProjects();

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8 light-text-primary dark-text-primary tracking-wide">
        Recent projects
      </h2>

      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          title={project.title}
          summary={project.summary}
          github={project.github}
          image={project.image}
          slug={project.slug}
        />
      ))}
    </section>
  );
}
