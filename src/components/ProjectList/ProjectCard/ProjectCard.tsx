import React, { FunctionComponent } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { IProjects } from '../constants';


const StyledCard = styled.div`
  width: 100%;
  padding-bottom: 4rem;

  .image {
    position: relative;
    img {
      height: auto;
      width: 100%;
      max-width: 450px;
      border-radius: 16px;
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.15);
    }
  }

  .details {
    .title {
      font-family: 'Fatface', sans-serif;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.text};
    }
    .subtitle {
      margin-bottom: 16px;
      color: ${({ theme }) => theme.colors.text};
    }
    .skills {
      margin-bottom: 8px;
    }
  }
`;

const Skill = styled.p`
  display: inline-flex;
  padding: 6px;
  border-radius: 7px;
  margin-block-end: 7px;
  margin-inline-end: 7px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text};
`;

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
                <Grid item xs={12} sm={12} md={6} className={'image'}>
                    <img src={img} alt={title}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className='details'>
                    <Typography variant='h6' className='title'>
                        {title}
                    </Typography>
                    <Typography variant='body2' className='subtitle'>
                        {subtitle.en}
                    </Typography>
                    <div className='skills'>
                        {stack.map((s) => (
                            <Skill key={s}>
                                <Typography variant='body2'>{s}</Typography>
                            </Skill>
                        ))}
                    </div>
                    <Button>
                        Demo
                    </Button>
                </Grid>
            </Grid>
        </StyledCard>
    );
};

export default ProjectCard;
