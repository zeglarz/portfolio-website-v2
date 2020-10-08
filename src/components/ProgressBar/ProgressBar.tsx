import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import styled from 'styled-components/macro';

type NavbarTypes = {
  shouldShowNavbar: boolean;
};

const SyledBar = styled(motion.div)<NavbarTypes>`
  position: ${({ shouldShowNavbar }) =>
    shouldShowNavbar ? 'absolute' : 'fixed'};
  bottom: ${({ shouldShowNavbar }) => (shouldShowNavbar ? 0 : 'auto')};
  top: ${({ shouldShowNavbar }) => (!shouldShowNavbar ? 0 : 'auto')};
  left: 0;
  right: 0;
  height: 4px;
  background: ${({ theme }) => theme.gradients.primary};
  z-index: 3;
`;

const ProgressBar = (props) => {
  const { scrollYProgress } = useViewportScroll();
  const progressY = useTransform(scrollYProgress, [0, 1], ['0', '100%']);

  return (
    <SyledBar
      {...props}
      style={{ width: progressY }}
      transition={{ ease: 'easeInOut' }}
    />
  );
};

export default ProgressBar;
