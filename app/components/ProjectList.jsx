import React from 'react'
import { projectData } from '../data/projectData'
import { ProjectCard } from './ProjectCard'

export const ProjectList = () => {

    const projectList = projectData.map((project) => {
        return <ProjectCard key={project.id} project={project} />
    });

  return (
    <div>
      {projectList}
    </div>
  )
}