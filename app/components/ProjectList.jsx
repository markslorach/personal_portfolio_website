import React from "react";
import config from "../config";
import ProjectCard from "./ProjectCard";

async function getProjects() {
  const requestOptions = {
    Headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };

  const res = await fetch(
    `${config.api}/api/portfolios?populate=*`, { next: { revalidate: 60 } },
    requestOptions, 
  );
  return res.json();
}

export default async function ProjectList() {
  const projects = await getProjects();

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8 light-text-primary dark-text-primary tracking-wide">
        Recent projects
      </h2>

      {projects.data.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.attributes.Title}
            summary={project.attributes.Summary}
            thumbnail={`${config.api}${project.attributes.Thumbnail.data.attributes.url}`}
            github={project.attributes.GitHub}
          />
        );
      })}
    </section>
  );
}
