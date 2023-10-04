import { NavBar } from "@/app/components/NavBar";
import { projectData } from "app/data/projectData";
import Link from "next/link";

const ProjectDetails = ({ params: {id} }) => {
  
  const projectIndex = projectData.findIndex((project) => project.id === Number(id));

  if (projectIndex === -1) {
    return <p>Page not found!</p>;
  };

  const project = projectData[projectIndex];
  const nextProject = projectData[projectIndex + 1];
  const prevProject = projectData[projectIndex - 1];

  return (
    <main>
        <div className="flex justify-center px-16">
        <div className="w-[680px] flex flex-col">
          <NavBar/>
          <div className="flex justify-center flex-col">
          <div className="pt-20 pb-10">
          <img src={project.image} alt={project.name} className="w-full rounded-md" />
          </div>
          <h1 className="text-2xl font-semibold mb-1 text-black/70 dark:text-white/80 tracking-wide">{project.name}</h1>
          <p className="py-5 text-base font-light tracking-wide leading-relaxed	text-white/80">{project.information}</p>
          </div>
          <hr/>
        <div className="flex justify-between mt-3">
          <Link href={prevProject ? `/projects/${prevProject.id}` : '/'}>
            <button className="pb-3 text-normal font-normal tracking-wide hover:text-black/50 dark:text-white/80 dark:hover:text-white/60">
              {prevProject ? `Previous: ${prevProject.name}` : 'Return home'}
            </button>
          </Link>
          {nextProject && 
            <Link href={`/projects/${nextProject.id}`}>
              <button className="pb-3 text-normal font-normal tracking-wide hover:text-black/50 dark:text-white/80 dark:hover:text-white/60">{`Next: ${nextProject.name}`}</button>
            </Link>
          }</div>
        </div>
        
      </div>
      
    </main> 
  );
};

export default ProjectDetails;
