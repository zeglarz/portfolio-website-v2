import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import { projects } from '../../data/projects';

const ProjectList = () => {
  return (
    <>
      {projects.map((p, i) => (
        <ProjectCard key={p.id} index={i + 1} {...p} />
      ))}
    </>
  );
};

export default ProjectList;
