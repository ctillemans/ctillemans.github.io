import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <>
      <div className=''>
        <h1>TEST</h1>
        <div className=''>
          {projects.map((project) => {
            return <div className=''>{project.projectTitle}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
