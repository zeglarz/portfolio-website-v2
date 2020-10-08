import React, { MutableRefObject, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { Container } from '@material-ui/core';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero/Hero';
import { TECHS as techs } from './constants';
import { Title } from '../../styles/Title';
import Image from '../../components/Hero/Image';
import StyledTop from '../../styles/Top';
import media from '../../styles/style';
import ja from '../../assets/img/ja.png';
import useImageTransform from '../../hooks/useImageTransform';

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  ${media.tablet`
    align-items: flex-end;
  `}

  div {
    width: 90%;
    margin-bottom: 5rem;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 3rem;
    }
    h3 {
      text-align: center;
      margin-bottom: 3rem;
      font-family: 'Abril Fatface', 'Lato', sans-serif;
      color: ${({ theme }) => theme.colors.text};
      ${media.tablet`
            text-align: start;
            margin-bottom: 1rem;
          `}
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      list-style: none;
    }
  }
`;

const StyledSkillImg = styled.img<{ inverted?: boolean }>`
  width: 85px;
  height: auto;
  margin: 0 auto;
  filter: ${({ theme, inverted }) => {
    if (theme.theme == 'dark') {
      if (inverted) {
        return 'invert(1)';
      }
    }
  }};
  ${media.tablet`
    width: auto;
    height: 60px;
  `}
`;

const SkillListElement = styled.li`
  width: 33.3%;
  transition: background ease 250ms;
  padding: 1.5rem 0 1rem 0;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  cursor: default;

  h4 {
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    margin: 1rem 0 0.25rem 0;
  }
  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }
  &:hover {
    ${StyledSkillImg} {
      filter: unset;
    }
    background: ${({ theme }) => theme.colors.text};
    h4,
    p {
      color: ${({ theme }) => theme.colors.contrast};
    }
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  }
`;

const StyledImageSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet`
    margin-top: 10px;
    justify-content: center;
    flex-direction: column;
`}

  img {
    width: 100%;
    max-width: 400px;
  }
  .item {
    position: relative;
    ${media.tablet`
        margin-top: 20px;
  `}
  }
`;

const Header = styled.div`
  position: sticky;
  top: 6rem;
  align-self: flex-start;
  padding-bottom: 4.46rem;
  ${media.tablet`
        position: static;
        padding: 0 0 2rem 0;
  `}
`;

const StyledAbout = styled.div`
  width: 100%;
  .skills {
    margin: 14rem 0 5rem 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    ${media.tablet`
      margin-top: 4rem;
      margin-bottom: 0;
      flex-direction: column;
      justify-content: flex-start;
    `}
  }
`;

const Index = () => {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(
    null
  );
  const [
    handleRotation,
    handleMove,
    handleScale,
    handleOpacity,
  ] = useImageTransform(ref);

  useEffect(() => {
    document.title = `Home · Konrad Rudnicki`;
  });

  return (
    <StyledAbout>
      <Container>
        <StyledTop>
          <section>
            <Hero
              title="About"
              fLine="Want to know"
              sLine="more about me?"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio doloremque dolores dolorum, earum facere, id illum in ipsum, itaque laudantium magni maiores molestiae mollitia neque nostrum qui repellendus."
            />
          </section>
          <section>
            <Image src="//unsplash.it/501/501" />
          </section>
        </StyledTop>
        <div className="middle">
          <StyledImageSection ref={ref}>
            <div>
              <motion.img
                style={{
                  rotate: handleRotation,
                  x: handleMove,
                  scale: handleScale,
                  opacity: handleOpacity,
                }}
                src={ja}
                alt="placeholder image"
              />
            </div>
            <div className="item">
              <Title pageTitle>Who am I?</Title>
              <Title section>
                <div className="line-wrapper">
                  <div className="line">My name is Konrad</div>
                </div>
              </Title>
              <div className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus beatae commodi consectetur cum dolorem doloribus,
                fugiat id libero minima molestiae necessitatibus nihil odio quam
                quia quisquam quo tenetur ullam voluptas!
              </div>
            </div>
          </StyledImageSection>
          <div className="skills">
            <Header>
              <Title pageTitle>Skills</Title>
              <Title section>
                <div className="line-wrapper">
                  <div className="line">Technologies I know</div>
                </div>
                <div className="line-wrapper">
                  <div className="line">I use some everyday</div>
                </div>
              </Title>
              <div className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus beatae commodi consectetur cum dolorem doloribus,
                fugiat id libero minima molestiae necessitatibus nihil odio quam
                quia quisquam quo tenetur ullam voluptas!
              </div>
            </Header>
            <ListContainer>
              {Object.keys(techs).map((tech) => (
                <div key={techs[tech].title}>
                  <h3>{techs[tech].title}</h3>
                  <ul>
                    {techs[tech].stack.map((stack) => (
                      <SkillListElement key={stack.name}>
                        <StyledSkillImg
                          src={stack.image}
                          alt={stack.name}
                          inverted={stack.name === 'Formik'}
                        />
                        <h4>{stack.name}</h4>
                        <p>{stack.proficiency}</p>
                      </SkillListElement>
                    ))}
                  </ul>
                </div>
              ))}
            </ListContainer>
          </div>
        </div>
      </Container>
    </StyledAbout>
  );
};

export default Index;
