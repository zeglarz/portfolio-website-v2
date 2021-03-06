import React, { FunctionComponent } from 'react';
import Logo from './Logo';
import StyledContainer from './styles/container';
import StyledParticles from './styles/particles';
import StyledLogo from './styles/logo';

const IntroAnimation: FunctionComponent<{ loading: boolean }> = ({
  loading,
}): JSX.Element => {
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
        <Logo size="150px" bcgColor="black" />
      </StyledLogo>
      <StyledParticles />
    </StyledContainer>
  );
};

export default IntroAnimation;
