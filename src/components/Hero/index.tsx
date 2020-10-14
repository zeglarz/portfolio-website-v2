import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { Button, Tooltip } from '@material-ui/core';
import Icon from './SocialIcons/withIcon';
import { SOCIAL as socials } from '../../socials';
import Title from '../../styles/Title';
import StyledLinkContainer from './styles/contaner';
import StyledHero from './styles/hero';
import { main, variants } from './animations';
import { Link } from 'react-router-dom';

const outLineCondition = (name) => name === 'Stack Overflow' || name === 'Mail';

interface IHero {
  title: string;
  fLine: string;
  sLine: string;
  content: string;
  bText?: string;
  bPath?: string;
  bIcon?: JSX.Element;
  withSocial?: boolean;
  onClick?: () => void;
}

const Hero: FunctionComponent<IHero> = ({
  title,
  fLine,
  sLine,
  content,
  bText = '',
  bPath,
  bIcon,
  withSocial = false,
  onClick,
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
                      <Icon
                        icon={social.icon}
                        withoutOutline={outLineCondition(social.name)}
                      />
                    </StyledLinkContainer>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </div>
        )}
        {bText && (
          <>
            <Button
              component={Link}
              to={bPath || '#'}
              endIcon={bIcon && bIcon}
              variant="outlined"
              color="primary"
              size="large"
              onClick={onClick && onClick}
            >
              {bText}
            </Button>
          </>
        )}
      </div>
    </StyledHero>
  );
};

export default Hero;
