import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components/macro';
import Burger from './Burger/Burger';
import ThemeIcon from '../Switch/Sun';
import Menu from './Menu/Menu';

const StyledNavMenu = styled(motion.div)`
  @media (min-width: 1001px) {
    display: none;
  }
`;
const IconWrapper = styled.div`
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  svg {
    margin-right: 5px;
  }
`;

const NavMenu = ({
  toggleTheme,
  theme,
  menuOpen,
  setMenuOpen,
}): JSX.Element => {
  return (
    <StyledNavMenu>
      <IconWrapper>
        <ThemeIcon toggleTheme={toggleTheme} theme={theme} />
        <Burger
          className={menuOpen ? 'is-active' : ''}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </IconWrapper>
      <Menu menuOpen={menuOpen} />
    </StyledNavMenu>
  );
};

export default NavMenu;
