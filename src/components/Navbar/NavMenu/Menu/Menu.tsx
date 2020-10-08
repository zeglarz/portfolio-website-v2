import React from 'react';
import { StyledMenu, StyledContainer } from './styles/menu';
import { NavLink } from 'react-router-dom';
import { LINKS as links } from '../../constants';
import { motion } from 'framer-motion';
import {
  menuVariants,
  backdropVariants,
  listVariants,
  childrenTransition,
  childrenVariants,
} from './animations';

const Menu = ({ menuOpen }) => {
  return (
    <StyledMenu
      variants={menuVariants}
      initial={'hidden'}
      animate={menuOpen ? 'show' : 'hidden'}
      custom={menuOpen}
    >
      <motion.div
        className="backdrop"
        variants={backdropVariants}
        style={{ originX: 0, originY: 0 }}
      />
      <motion.div
        className="menu-container"
        variants={backdropVariants}
        style={{ originX: 0, originY: 0 }}
      >
        <StyledContainer>
          <nav className="menu-links">
            <motion.ul variants={listVariants}>
              {links.map((link) => (
                <li key={link.to}>
                  <motion.div
                    className="motionContainer"
                    variants={childrenVariants}
                    custom={menuOpen}
                    whileHover={{
                      y: 3,
                      scale: 0.9,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <NavLink to={link.to}>{link.title}</NavLink>
                  </motion.div>
                </li>
              ))}
            </motion.ul>
          </nav>
        </StyledContainer>
      </motion.div>
    </StyledMenu>
  );
};

export default Menu;
