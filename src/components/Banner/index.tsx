import React, { FunctionComponent } from 'react';
import Title from '../../styles/Title';
import { Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface IBanner {
  fLine: string;
  sLine: string;
  content: string;
  bText: string;
  bPath: string;
  endIcon: JSX.Element;
}

const Banner: FunctionComponent<IBanner> = ({
  fLine,
  sLine,
  content,
  bText,
  bPath,
  endIcon,
}) => {
  return (
    <div className="bottom">
      <div className="bottom-banner">
        <Title section>
          <div className="line-wrapper">
            <div className="line">{fLine}</div>
          </div>
          <div className="line-wrapper">
            <div className="line">{sLine}</div>
          </div>
        </Title>
        <div className="paragraph">{content}</div>
        <Button
          component={Link}
          variant="outlined"
          to={bPath}
          endIcon={endIcon}
          size="large"
        >
          {bText}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
