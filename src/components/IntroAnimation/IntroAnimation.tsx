import React from 'react';
import {motion} from 'framer-motion';
import Logo from './Logo';
import styled from 'styled-components';


const StyledContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e272e;
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
    user-select: none;
  }
`;

const IntroAnimation = ({loading}) => {
    return (
        <StyledContainer exit={{opacity: 0}} initial={{display: loading ? 'flex' : 'none', opacity: 1}}
                         animate={{
                             opacity: 0,
                             transition: {delay: 2.25, duration: 2.45},
                             transitionEnd: {display: 'none'}
                         }}
        >
            <StyledLogo>
                <Logo size="150px" bcgColor="black"/>
            </StyledLogo>
        </StyledContainer>
    );
};

export default IntroAnimation;
