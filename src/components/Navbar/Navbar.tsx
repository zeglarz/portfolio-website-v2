import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import NavLinks from './NavLinks/NavLinks';
import BrandLogo from './BrandName/BrandLogo';
import NavMenu from './NavMenu/NavMenu';
import media from '../../styles/style';
import ProgressBar from '../ProgressBar/ProgressBar';
import useScrollUpDown from '../../helpers/hooks/useScrollUpDown';


interface INavbar {
    onTop?: boolean;
}

const NavbarContainer = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.background};
    z-index: 10;
`;

const NavbarContent = styled.div<INavbar>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    margin: 0 auto;
    max-width: 1920px;
    height: ${({ onTop }) => onTop ? '90px' : '80px'};

    ${media.tiny`
        padding: 0.7rem 1rem;
    `}
`;

const Navbar = ({ toggleTheme, showIntro, theme, menuOpen, setMenuOpen }) => {
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const direction = useScrollUpDown();
    const shouldShowNavbar = direction === 'up' || scrolledToTop;
    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };

    useEffect(() => {
        console.log(direction);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolledToTop]);


    return (
        <>
            <NavbarContainer layout transition={{ type: 'spring', stiffness: 120, duration: .5 }}
                             animate={{
                                 y: shouldShowNavbar ? 0 : -100,
                                 transition: { duration: 0.3 },
                             }}>
                <NavbarContent onTop={scrolledToTop}>
                    <BrandLogo size={'50px'} showIntro={showIntro}/>
                    <NavLinks toggleTheme={toggleTheme} theme={theme}/>
                    <NavMenu toggleTheme={toggleTheme} theme={theme} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                </NavbarContent>
                <ProgressBar shouldShowNavbar={true}/>
            </NavbarContainer>
            {!shouldShowNavbar && <ProgressBar shouldShowNavbar={shouldShowNavbar}/>}
        </>
    );
};

export default Navbar;
