import React from 'react';
import styled from 'styled-components';
import {useViewportScroll, motion} from 'framer-motion';
import NavLinks from './NavLinks/NavLinks';
import BrandLogo from './BrandName/BrandLogo';

const StyledNavbar = styled(motion.nav)`
 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: red;
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <BrandLogo size={'70px'}/>
            <NavLinks/>
        </StyledNavbar>
    )
}

export default Navbar;
