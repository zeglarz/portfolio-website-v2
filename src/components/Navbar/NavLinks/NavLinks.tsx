import React from 'react';
import { motion } from 'framer-motion';
import { container, item } from './animations';
import { NavLink } from 'react-router-dom';
import Divider from '../../Divider/Dividier';
import Sun from '../Switch/Sun';
import data from '../../../data';
import { StyledList } from './styles/list';
import { StyledLinkContainer } from './styles/container';

const NavLinks = ({ toggleTheme, theme, showIntro }) => {
  return (
    <StyledLinkContainer>
      <StyledList
        variants={container(showIntro)}
        initial="hidden"
        animate="show"
      >
        {data.views.map((link) => (
          <motion.li key={link.title} variants={item}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </motion.li>
        ))}
        <Divider vert />
        <motion.li variants={item}>
          <Sun toggleTheme={toggleTheme} theme={theme} />
        </motion.li>
      </StyledList>
    </StyledLinkContainer>
  );
};

export default NavLinks;
