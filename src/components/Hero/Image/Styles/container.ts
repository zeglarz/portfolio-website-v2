import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import media from '../../../../styles/style';

export default styled(motion.div)`
  display: flex;
  max-width: 480px;
  max-height: 480px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  ${media.tablet`
    object-fit: cover;
    max-height: 350px;
    max-width: 350px;
  `}
  .rect1 {
    position: absolute;
    background: ${({ theme }) => theme.colors.background};
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .rect2 {
    position: absolute;
    background: ${({ theme }) => theme.gradients.primary};
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  img {
    ${media.tablet`
      object-fit: cover;
      max-height: 350px;
      max-width: 350px;
      width: 100%;
      height: 100%;
    `}
  }
`;
