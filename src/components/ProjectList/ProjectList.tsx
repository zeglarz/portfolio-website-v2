import React, { FunctionComponent } from 'react';
import { projects } from './constants';


interface ProjectListProps {

}

const ProjectList: FunctionComponent<ProjectListProps> = ({}) => {
    return (
        <ul>{projects.map(project => <li>{project.id}</li>)}</ul>
    );
};

export default ProjectList;
