import React from 'react';
import { StyledMenu, StyledContainer } from './styles/menu';
import { NavLink } from 'react-router-dom';
import data from '../../../../data/data';
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
              {data.views.map((link) => (
                <li key={link.path}>
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
                    <NavLink to={link.path}>{link.title}</NavLink>
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
