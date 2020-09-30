import React, { FunctionComponent } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { IProjects } from '../constants';
import media from '../../../styles/style';
import { StyledLink } from '../../../styles/StyledLink';


const StyledLinkMod = styled(StyledLink)`

`;

const StyledCard = styled.div`
  width: 100%;
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  text-align: justify;

  .image {
    position: relative;
    img {
        height: auto;
        width: 100%;
        max-width: 500px;
        border-radius: 16px;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.15);
    }
  }

  .details {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  ${media.tablet`
  flex-direction: center !important;
  justify-content: center !important;
  `}
    .title {
      font-family: 'Abril Fatface', sans-serif;
      font-weight: 900;
      color: ${({ theme }) => theme.colors.text};
        ${media.tablet`
            margin: 0 auto;
         `}
    }
    .subtitle {
      margin-bottom: 16px;
      color: ${({ theme }) => theme.colors.secondary};
         ${media.tablet`
            margin: 0 auto;
         `}
    }
    .skills {
      ${media.tablet`
            margin: 0 auto;
         `};
      margin-bottom: 8px;
    }
  }
  
  button {
  margin-right: 15px;
  }
`;

const Skill = styled.span`
  display: inline-flex;
  padding: 6px;
  border-radius: 7px;
  margin-block-end: 7px;
  margin-inline-end: 7px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text};
`;

const ProjectCard: FunctionComponent<IProjects & { index: number }> = ({
                                                                           index,
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
                direction={index % 2 === 1 ? 'row-reverse' : 'row'}
                spacing={4}
                alignItems='center'
                justify='center'
            >
                <Grid item xs={12} sm={12} md={6} className={'image'} justify='center' container>
                    <img src={img} alt={title}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className='details'>
                    <Typography variant='h6' className='title'>
                        {title}
                    </Typography>
                    <Typography variant='body2' className='subtitle'>
                        {subtitle.en}
                    </Typography>
                    <div
                        className={'paragraph'}>{description.en.split(' ').splice(0, 99).join(' ').concat('...')}</div>
                    <div className='skills'>
                        {stack.map((s) => (
                            <Skill key={s}>
                                <Typography variant='body2'>{s}</Typography>
                            </Skill>
                        ))}
                    </div>
                    <Grid container direction='row' justify={'flex-start'}>
                        <StyledLinkMod href={demoURL}>
                            <Button
                                variant='contained'
                                color='primary'
                                size='large'
                            >
                                Demo
                            </Button>
                        </StyledLinkMod>
                        <StyledLinkMod href={gitURL}>
                            <Button
                                variant='outlined'
                                color='primary'
                                size='large'
                            >
                                Code
                            </Button>
                        </StyledLinkMod>
                    </Grid>
                </Grid>
            </Grid>
        </StyledCard>
    );
};

export default ProjectCard;
