import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import NavLinks from './NavLinks/NavLinks';
import BrandLogo from './BrandName/BrandLogo';
import NavMenu from './NavMenu/NavMenu';
import media from '../../styles/style';
import ProgressBar from '../ProgressBar/ProgressBar';
import useScrollUpDown from '../../hooks/useScrollUpDown';
import { hex2rgba } from '../../helpers/hex2rgba';

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => hex2rgba(theme.colors.background, 0.95)};
  z-index: 10;
`;

const NavbarContent = styled.div<{ onTop?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin: 0 auto;
  max-width: 1920px;
  height: ${({ onTop }) => (onTop ? '90px' : '80px')};

  ${media.tiny`
        padding: 0.7rem 1rem;
    `}
`;

const Index = ({ toggleTheme, showIntro, theme, menuOpen, setMenuOpen }) => {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const direction = useScrollUpDown();
  const shouldShowNavbar = direction === 'up' || scrolledToTop;
  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolledToTop]);

  return (
    <>
      <NavbarContainer
        layout
        transition={{ type: 'spring', stiffness: 80, duration: 0.6 }}
        animate={{
          y: shouldShowNavbar ? 0 : -100,
          boxShadow: !scrolledToTop
            ? '0 5px 9px rgba(182, 182, 182, 0.3)'
            : '0 5px 9px rgba(182, 182, 182, 0.0)',
          transition: {
            y: { duration: 0.3 },
            boxShadow: { duration: scrolledToTop ? 0.3 : 0 },
          },
        }}
        initial={{
          boxShadow: scrolledToTop
            ? '0 5px 9px rgba(182, 182, 182, 0.0)'
            : '0 5px 9px rgba(182, 182, 182, 0.3)',
        }}
      >
        <NavbarContent onTop={scrolledToTop}>
          <BrandLogo size="50px" showIntro={showIntro} />
          <NavLinks
            toggleTheme={toggleTheme}
            theme={theme}
            showIntro={showIntro}
          />
          <NavMenu
            toggleTheme={toggleTheme}
            theme={theme}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </NavbarContent>
        <ProgressBar shouldShowNavbar={shouldShowNavbar} />
      </NavbarContainer>
      {!shouldShowNavbar && <ProgressBar shouldShowNavbar={shouldShowNavbar} />}
    </>
  );
};

export default Index;
