import React from 'react'
import { NavBar } from '../components/NavBar';
import ProjectList from '../components/ProjectList';

const Projects = () => {
  return (
    <div className="flex justify-center px-16">
      <div className="w-[680px] flex flex-col">
        <NavBar/>
        <ProjectList/>
      </div>
    </div>
  )
};

export default Projects;
