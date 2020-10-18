import React, { MutableRefObject, useEffect, useRef } from 'react';
import { Button, Container } from '@material-ui/core';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero';
import { TECHS as techs } from '../../data/skills';
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
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import Banner from '../../components/Banner';

const About = (props): JSX.Element => {
  const {
    p1: { body, fLine, title },
    p2: { body: body2, fLine: fLine2, sLine: sLine2, title: title2 },
    banner,
    ...rest
  } = props;
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
            <Hero {...rest} onClick={() => scroll()} />
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
              <Title pageTitle>{title}</Title>
              <Title section>
                <div className="line-wrapper">
                  <div className="line">{fLine}</div>
                </div>
              </Title>
              <div className="paragraph">{body}</div>
            </div>
          </StyledImageSection>
          <div className="skills">
            <Header>
              <Title pageTitle>{title2}</Title>
              <Title section>
                <div className="line-wrapper">
                  <div className="line">{fLine2}</div>
                </div>
                <div className="line-wrapper">
                  <div className="line">{sLine2}</div>
                </div>
              </Title>
              <div className="paragraph">{body2}</div>
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
        <Banner {...banner} endIcon={<AccountTreeIcon />} />
      </Container>
    </StyledAbout>
  );
};

export default About;
