import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  return (
    <>
      <div className='grid-container--fluid projects-list'>
        <div className='grid-container__row justify-center '>
          {projects.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
