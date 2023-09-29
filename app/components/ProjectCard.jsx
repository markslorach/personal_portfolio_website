import Link from "next/link";
import React from "react";

export const ProjectCard = ({ project }) => {
  return (
    <section>
      {/* <h2>{project.name}</h2>
      <p>{project.description.slice(0, 100)}...</p>
      <Link href={`/projects/${project.id}`}>
        <button>View Project</button>
      </Link> */}

      <div className="card w-96 h-96 bg-base-100 shadow-xl rounded-md">
        <figure>
          <img
            src="https://thumbs.dreamstime.com/z/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=992"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{project.name}</h2>
          <p>{project.description.slice(0, 100)}...</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Next JS</div>
            <div className="badge badge-outline">Tailwind</div>
          </div>
        </div>
        <Link href={`/projects/${project.id}`}>
          <button>View Project</button>
        </Link>
      </div>
    </section>

    
  );
};
