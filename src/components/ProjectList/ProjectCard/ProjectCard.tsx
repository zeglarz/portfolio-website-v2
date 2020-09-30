import React, { FunctionComponent } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { IProjects } from '../constants';


const StyledCard = styled.div``;
const ProjectCard: FunctionComponent<IProjects> = ({
                                                       id,
                                                       title,
                                                       subtitle,
                                                       description,
                                                       stack,
                                                       category,
                                                       img,
                                                       slug,
                                                       demoURL,
                                                       gitURL,
                                                   }) => {
    return (
        <StyledCard>
            <Grid>
                <Button>
                    <Typography>{title}</Typography>
                </Button>
            </Grid>
        </StyledCard>
    );
};

export default ProjectCard;
