import React, { FunctionComponent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { IProjects } from '../constants';
import media from '../../../styles/style';
import { StyledLink } from '../../../styles/StyledLink';
import Modal from './Modal';


const StyledLinkMod = styled(StyledLink)`

`;

const StyledCard = styled.div`
  width: 100%;
  padding-bottom: 5.5rem;
  display: flex;
  justify-content: center;
  text-align: justify;

  .image {
    position: relative;
    img {
        max-height: 350px;
        height: auto;
        max-width:500px;
        object-fit: cover;
        border-radius: 16px;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.15);
           ${media.tablet`
    object-fit: cover;
        width: 100%;
        height: 100%;
    `}
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
  .paragraph a {
    float: right;
    color: ${({ theme }) => theme.colors.text};
    &:hover {
        text-decoration: underline;
    }
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

const ProjectCard: FunctionComponent<IProjects & { index: number }> = (props) => {
    const {
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
    } = props;

    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const slugURL = history.location.search?.split('=')[1];
    useEffect(() => {
        if (slugURL === slug) setOpen(true);
    }, [slugURL, slug]);


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
                    <div className='skills'>
                        {stack.map((s) => (
                            <Skill key={s}>
                                <Typography variant='body2'>{s}</Typography>
                            </Skill>
                        ))}
                    </div>
                    <div
                        className={'paragraph'}>{description.en.split(' ').splice(0, 79).join(' ').concat('...')}{
                        <Link to={`/projects?project=${slug}`} onClick={() => setOpen(true)}>read more</Link>}</div>
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
            <Modal open={open} setOpen={setOpen} {...props}/>
        </StyledCard>
    );
};

export default ProjectCard;
