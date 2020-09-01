import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import NavLinks from './NavLinks/NavLinks';
import BrandLogo from './BrandName/BrandLogo';
import NavMenu from "./NavMenu/NavMenu";

const NavbarContainer = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${({theme}) => theme.colors.background};
`;

const NavbarContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    margin: 0 auto;
    max-width: 1920px;
`

const Navbar = ({toggleTheme, showIntro, theme}) => {
    return (
        <NavbarContainer>
            <NavbarContent>
                <BrandLogo size={'50px'} showIntro={showIntro}/>
                <NavLinks toggleTheme={toggleTheme} theme={theme}/>
                <NavMenu toggleTheme={toggleTheme} theme={theme}/>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar;
