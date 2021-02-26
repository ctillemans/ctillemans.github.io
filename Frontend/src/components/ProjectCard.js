import React from 'react';
import { Link } from 'gatsby';

const ProjectCard = ({ project }) => {
  return (
    <div className='card__container project-card__container'>
      <div className='project-card__image-container'>
        <img
          className='project-card__image'
          src={project.projectImages[0].image.asset.fluid.src}
          alt={project.projectImages[0].imageAlt}
        />
      </div>
      <div className='project-card__content'>
        <div className='project-card__info'>
          <h3 className='project-card__title'>{project.projectTitle}</h3>
          <p className='project-card__description'>{project.projectDescription}</p>
        </div>
      </div>
      <div className='project-card__cta'>
        <Link to='#'>See more</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
