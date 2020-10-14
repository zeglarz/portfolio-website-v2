import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import media from '../../styles/style';
import { hex2rgba } from '../../helpers/hex2rgba';

const StyledMouse = styled.div`
  position: absolute;
  bottom: 50px;
  text-align: center;
  border: 2px solid ${({ theme }) => hex2rgba(theme.colors.text, 0.5)};
  border-radius: 16px;
  height: 40px;
  width: 25px;
  display: block;
  opacity: 0.7;
  background: transparent;
  transform: scale(1.4);
  cursor: pointer;
  z-index: 0;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.3);
  }

  div {
    position: relative;
    border-radius: 10px;
    background: ${({ theme }) => hex2rgba(theme.colors.text, 0.8)};
    width: 3px;
    height: 8px;
    top: 4px;
    margin-left: auto;
    margin-right: auto;
  }

  ${media.tablet`
    transform: scale(1.0);
  `}
  ${media.phone`
    display: none;
  `}
`;

const ScrollIndicator: FunctionComponent<{
  showMouse: boolean;
  isTrueScrollable: boolean;
}> = ({ showMouse, isTrueScrollable }) => {
  const [scrolledPastTreshold, setScrolledPastTreshold] = useState(
    window.pageYOffset < 25
  );
  const handleScroll = () => {
    setScrolledPastTreshold(window.pageYOffset < 25);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolledPastTreshold]);
  return showMouse && scrolledPastTreshold && isTrueScrollable ? (
    <StyledMouse>
      <motion.div
        animate={{ y: 8 }}
        transition={{ yoyo: Infinity, duration: 0.6, repeatDelay: 0.3 }}
      />
    </StyledMouse>
  ) : null;
};

export default ScrollIndicator;
