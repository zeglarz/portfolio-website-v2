import React, { FunctionComponent } from 'react';
import { Button, Grid } from '@material-ui/core';
import { StyledLink } from '../../../styles/StyledLink';
import PublicIcon from '@material-ui/icons/Public';
import CodeIcon from '@material-ui/icons/Code';

interface IPrjectButtons {
  demoURL: string;
  gitURL: string;
}

const ProjectButtons: FunctionComponent<IPrjectButtons> = ({
  demoURL,
  gitURL,
}) => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      style={{ padding: '20px 0 10px 0' }}
    >
      <StyledLink href={demoURL}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<PublicIcon />}
        >
          Demo
        </Button>
      </StyledLink>
      <StyledLink href={gitURL}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          endIcon={<CodeIcon />}
        >
          Code
        </Button>
      </StyledLink>
    </Grid>
  );
};

export default ProjectButtons;
