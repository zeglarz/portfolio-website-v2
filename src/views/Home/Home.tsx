import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import Image from '../../components/Hero/Image';
import Hero from '../../components/Hero';
import StyledTop from '../../styles/Top';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
const Home = (): JSX.Element => {
  useEffect(() => {
    document.title = `Home · Konrad Rudnicki`;
  });

  return (
    <div>
      <Container>
        <StyledTop reverse>
          <section>
            <Hero
              withSocial
              title="Home"
              fLine="Welcome to my"
              sLine="personal portfolio"
              content={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio doloremque dolores dolorum, earum facere, id illum in ipsum, itaque laudantium magni maiores molestiae mollitia neque nostrum qui repellendus.'
              }
              bIcon={<EmojiPeopleIcon />}
              bText="Get to know me"
              bPath="/about"
            />
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
