import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import NavLinks from './NavLinks/NavLinks';
import BrandLogo from './BrandName/BrandLogo';
import NavMenu from './NavMenu/NavMenu';
import media from '../../styles/style';
import ProgressBar from '../ProgressBar/ProgressBar';


const NavbarContainer = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.background};
    z-index: 10;
`;

const NavbarContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    margin: 0 auto;
    max-width: 1920px;
    
    ${media.tiny`
        padding: 0.7rem 1rem;
    `}
`;

const Navbar = ({ toggleTheme, showIntro, theme, menuOpen, setMenuOpen }) => {
    return (
        <NavbarContainer>
            <NavbarContent>
                <BrandLogo size={'50px'} showIntro={showIntro}/>
                <NavLinks toggleTheme={toggleTheme} theme={theme}/>
                <NavMenu toggleTheme={toggleTheme} theme={theme} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            </NavbarContent>
            <ProgressBar shouldShowNavbar={true}/>
        </NavbarContainer>
    );
};

export default Navbar;
