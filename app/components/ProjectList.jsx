import React from 'react'
import { projectData } from '../data/projectData'
import { ProjectCard } from './ProjectCard'

export const ProjectList = () => {

    const projectList = projectData.map((project) => {
        return <ProjectCard key={project.id} project={project} />
    });

  return (
    <section>
    <h2 className='text-xl font-semibold text-black/70 dark:text-white/80 tracking-wide'>Recent projects</h2>
    <div className='h-60'>
      {projectList}
    </div>
    </section>
  )
}