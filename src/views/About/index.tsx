import React, { MutableRefObject, useEffect, useRef } from 'react';
import { Button, Container } from '@material-ui/core';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero';
import { TECHS as techs } from './constants';
import Title from '../../styles/Title';
import Image from '../../components/Hero/Image';
import StyledTop from '../../styles/Top';
import ja from '../../assets/img/ja.png';
import useImageTransform from '../../hooks/useImageTransform';
import ListContainer from './styles/container';
import SkillListElement from './styles/item';
import StyledImageSection from './styles/image';
import Header from './styles/header';
import StyledAbout from './styles/main';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';

const About = (): JSX.Element => {
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
    window.scrollTo(0, 0);
    document.title = `Home · Konrad Rudnicki`;
  }, []);

  const scroll = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              bText="Read more about me"
              bIcon={<ArrowDropDownIcon />}
              onClick={() => scroll()}
            />
          </section>
          <section>
            <Image src="//unsplash.it/501/501" />
          </section>
        </StyledTop>
        <div className="middle" id="middle">
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
                      <SkillListElement
                        key={stack.name}
                        inverted={stack.name === 'Formik'}
                      >
                        <img src={stack.image} alt={stack.name} />
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
        <Banner
          fLine="Want to check out my projects?"
          sLine="Check them here!"
          content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae commodi consectetur cum dolorem doloribus, fugiat id libero minima molestiae necessitatibus nihil odio quam quia quisquam quo tenetur ullam voluptas!"
          bText="Go to projects"
          bPath="/projects"
        />
      </Container>
    </StyledAbout>
  );
};

export default About;
