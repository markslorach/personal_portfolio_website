import { projectData } from "/app/data/projectData";

const ProjectDetails = ({ params: {id} }) => {
  
  const project = projectData.find((project) => project.id === Number(id));

  if (!project) {
    return <p>Page not found!</p>;
  };

  return (
    <main>
      <div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>
    </main>
  );
};

export default ProjectDetails;
