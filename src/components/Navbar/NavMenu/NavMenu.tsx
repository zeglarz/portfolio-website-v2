import React from 'react';
import ThemeIcon from '../Switch/Sun';
import styled from 'styled-components/macro';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import { motion } from 'framer-motion';


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


const NavMenu = ({ toggleTheme, theme, menuOpen, setMenuOpen }) => {

    return (
        <StyledNavMenu>
            <IconWrapper>
                <ThemeIcon toggleTheme={toggleTheme} theme={theme}/>
                <Burger className={menuOpen ? 'is-active' : ''} onClick={() => setMenuOpen(!menuOpen)}/>
            </IconWrapper>
            <Menu menuOpen={menuOpen}/>
        </StyledNavMenu>
    );
};

export default NavMenu;
