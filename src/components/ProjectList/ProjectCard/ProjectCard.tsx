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
            <Grid
                container
                direction={id % 2 === 1 ? 'row-reverse' : 'row'}
                spacing={4}
                alignItems='center'
                justify='center'
            >
                <Grid item xs={12} sm={12} md={6}>
                    <img src={img} alt={title}/>
                </Grid>
                <Typography variant='h6'>
                    {title}
                </Typography>
                <Typography variant='body2'>
                    {subtitle.en}
                </Typography>
                <div className='skills'>
                    {stack.map((s) => (
                        <div key={s}>
                            <Typography variant='body2'>{s}</Typography>
                        </div>
                    ))}
                </div>
                <Button>
                    Demo
                </Button>
            </Grid>
        </StyledCard>
    );
};

export default ProjectCard;
