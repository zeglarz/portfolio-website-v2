import React from 'react';
import styled from 'styled-components';
import {useViewportScroll, motion} from 'framer-motion';
import NavLinks from './NavLinks/NavLinks';
import BrandLogo from './BrandName/BrandLogo';
import Divider from "../Divider/Dividier";

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

const Navbar = ({toggleTheme}) => {
    return (
        <NavbarContainer>
            <NavbarContent>
                <BrandLogo size={'70px'}/>
                <NavLinks toggleTheme={toggleTheme}/>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar;
