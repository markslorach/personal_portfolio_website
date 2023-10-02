import { NavBar } from "@/app/components/NavBar";
import { projectData } from "/app/data/projectData";

const ProjectDetails = ({ params: {id} }) => {
  
  const project = projectData.find((project) => project.id === Number(id));

  if (!project) {
    return <p>Page not found!</p>;
  };

  return (
    <main>
        <div className="flex justify-center w-screen px-16">
        <div className="w-[650px] flex flex-col">
          <NavBar/>
          <div className="flex justify-center flex-col">
          <div className="py-20">
          <img src={project.image} alt={project.name} className="w-full rounded-md" />
          </div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
        </div>
      </div>
    </main> 
  );
};

export default ProjectDetails;
