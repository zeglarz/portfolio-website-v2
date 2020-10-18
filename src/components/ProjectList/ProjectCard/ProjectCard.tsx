import React, { FunctionComponent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { IProjects } from '../../../data/projects';
import Modal from './Modal';
import StyledCard from './styles/card';
import Skill from './styles/skill';
import ProjectButtons from '../ProjectButtons';

const ProjectCard: FunctionComponent<IProjects & { index: number }> = (
  props
) => {
  const {
    index,
    title,
    subtitle,
    description,
    stack,
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
        alignItems="center"
        justify="center"
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          className="image"
          justify="center"
          container
        >
          <img src={img} alt={title} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} className="details">
          <Typography variant="h6" className="title">
            {title}
          </Typography>
          <Typography variant="body2" className="subtitle">
            {subtitle.en}
          </Typography>
          <div className="skills">
            {stack.map((s) => (
              <Skill key={s}>
                <Typography variant="body2">{s}</Typography>
              </Skill>
            ))}
          </div>
          <div className="paragraph" style={{ marginBottom: 5 }}>
            {description.en.split(' ').splice(0, 79).join(' ').concat('...')}
            <Link
              to={`/projects?project=${slug}`}
              onClick={() => setOpen(true)}
            >
              Read more
            </Link>
          </div>
          <ProjectButtons demoURL={demoURL} gitURL={gitURL} />
        </Grid>
      </Grid>
      <Modal open={open} setOpen={setOpen} {...props} />
    </StyledCard>
  );
};

export default ProjectCard;
