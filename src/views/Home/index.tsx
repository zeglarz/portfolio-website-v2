import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import Image from '../../components/Hero/Image';
import Hero from '../../components/Hero';
import StyledTop from '../../styles/Top';

const Home = (props): JSX.Element => {
  return (
    <div>
      <Container>
        <StyledTop reverse>
          <section>
            <Hero withSocial {...props} />
          </section>
          <section>
            <Image src="//unsplash.it/500/500" />
          </section>
        </StyledTop>
      </Container>
    </div>
  );
};

export default Home;
