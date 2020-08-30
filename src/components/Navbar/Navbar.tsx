import React from 'react';
import styled from 'styled-components';
import {useViewportScroll, motion} from 'framer-motion';

const StyledNavbar = styled(motion.nav)`
 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`

const Navbar = () => {
    return (
        <StyledNavbar>Hello</StyledNavbar>
    )
}

export default Navbar;
