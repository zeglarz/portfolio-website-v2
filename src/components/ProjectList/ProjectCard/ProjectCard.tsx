import React, { FunctionComponent } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';


interface ProjectCardProps {

}

const StyledCard = styled.div``;
const ProjectCard: FunctionComponent<ProjectCardProps> = ({}) => {
    return (
        <StyledCard>
            <Grid>
                <Button>
                    <Typography>Nanan</Typography>
                </Button>
            </Grid>
        </StyledCard>
    );
};

export default ProjectCard;
