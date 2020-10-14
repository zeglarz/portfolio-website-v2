import React from 'react';
import ProjectCard from './components/ProjectList/ProjectCard/ProjectCard';
import { projects } from './components/ProjectList/projects';

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
