import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import styled from 'styled-components/macro';
import Particles from 'react-particles-js';


const StyledContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
     background: ${({ theme }) => theme.gradients.primary};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;
const StyledLogo = styled.div`
  width: max-content;
  svg {
      box-shadow: ${({ theme }) => theme.shadows.primary};
    text {
      fill: ${({ theme }) => theme.colors.text};
    }
    #main-square {
      fill: ${({ theme }) => theme.colors.background};
    }
    user-select: none;
  }
`;

const StyledParticles = styled(Particles).attrs({
    params: {
        particles: {
            number: {
                value: 140,
                density: {
                    enable: true,
                    value_area: 1000,
                },
            },
        },
    },
})`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
`;

const IntroAnimation = ({ loading }) => {
    return (
        <StyledContainer
            initial={{ display: loading ? 'flex' : 'none', opacity: 1 }}
            animate={{
                opacity: 0,
                transition: { delay: 2.25, duration: 1.75 },
                transitionEnd: { display: 'none' },
            }}
        >
            <StyledLogo>
                <Logo size="150px" bcgColor="black"/>
            </StyledLogo>
            <StyledParticles/>
        </StyledContainer>
    );
};

export default IntroAnimation;
