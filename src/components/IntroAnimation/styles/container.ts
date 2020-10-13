import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export default styled(motion.div)`
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
