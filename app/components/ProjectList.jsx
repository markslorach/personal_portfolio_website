import React from 'react'
import { projectData } from '../data/projectData'
import { ProjectCard } from './ProjectCard'

export const ProjectList = () => {

    const projectList = projectData.map((project) => {
        return <ProjectCard key={project.id} project={project} />
    });

  return (
    <main id='projects'>
    <div className='flex gap-5 justify-center flex-wrap h-60 items-center'>
      {projectList}
    </div>
    </main>
  )
}