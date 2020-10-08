import React from 'react';
import styled from 'styled-components/macro';
import { motion, Variants } from 'framer-motion';
import media from '../../styles/style';
import { Tooltip } from '@material-ui/core';
import Icon from './SocialIcons/withIcon';
import { SOCIAL as socials } from './constants';
import { Title } from '../../styles/Title';
import StyledLinkContainer from './styles/contaner';
import StyledHero from './styles/hero';
import { main, variants } from './animations';

const outLineCondition = (name) => name === 'Stack Overflow' || name === 'Mail';

const Hero = ({
  title,
  fLine,
  sLine,
  content,
  withSocial = false,
}): JSX.Element => {
  return (
    <StyledHero>
      <div className="hero-container">
        <Title pageTitle>{title}</Title>
        <Title initial="init" animate="animate" variants={main}>
          <div className="line-wrapper">
            <motion.div variants={variants} className="line">
              {fLine && fLine}
            </motion.div>
          </div>
          <div className="line-wrapper">
            <motion.div variants={variants} className="line">
              {sLine && sLine}
            </motion.div>
          </div>
        </Title>
        <div className="paragraph">
          <div className="text-wrapper">
            <div className="content">{content && content}</div>
          </div>
        </div>
        {withSocial && (
          <div className="social-links">
            <ul>
              {socials.map((social) => (
                <li key={social.link}>
                  <Tooltip arrow title={social.name}>
                    <StyledLinkContainer
                      href={social.link}
                      withoutOutline={outLineCondition(social.name)}
                    >
                      <Icon icon={social.icon} />
                    </StyledLinkContainer>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </StyledHero>
  );
};

export default Hero;
