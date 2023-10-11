import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/sanity/sanity-utils";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default function ProjectList({ showAll }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await getProjects();
      const sortedProjects = fetchedProjects.sort((a, b) => Number(a.id) - Number(b.id));
      const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 3);
      setProjects(displayedProjects);
    };

    fetchData();
  }, []);

  return (
    <section>
      <h2 className=" text-xl md:text-2xl font-semibold mb-8 light-text-primary dark-text-primary tracking-wide">
        Recent projects
      </h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
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
