import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import { projects } from './constants';


const ProjectList = () => {
    return (
        <>
            {projects.map(p =>
                <ProjectCard
                    key={p.id}
                    {...p}
                />,
            )}
        </>
    );
};

export default ProjectList;
