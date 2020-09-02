import React from 'react';
import ThemeIcon from '../Switch/Sun';
import styled from 'styled-components';
import Burger from "./Burger/Burger";
import media from '../../../styles/style';
import Menu from "./Menu/Menu";
import {motion} from 'framer-motion';
import Navbar from "../Navbar";

const StyledNavMenu = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
    @media (min-width: 1001px) {
    display: none;
  }
`;


const NavMenu = ({toggleTheme, theme, menuOpen, setMenuOpen}) => {

    return (
        <StyledNavMenu>
            <Burger className={menuOpen ? 'is-active' : ''} onClick={() => setMenuOpen(!menuOpen)}/>
            <ThemeIcon toggleTheme={toggleTheme} theme={theme}/>
            <Menu menuOpen={menuOpen}/>
        </StyledNavMenu>
    );
}

export default NavMenu;
