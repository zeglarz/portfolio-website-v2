import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import Image from '../../components/Hero/Image';
import Hero from '../../components/Hero';
import StyledTop from '../../styles/Top';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const Index = (props): JSX.Element => {
  useEffect(() => {
    document.title = `Home · Konrad Rudnicki`;
  });

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

export default Index;
