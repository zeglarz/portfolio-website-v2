import styled from 'styled-components';
import media from '../../../../styles/style';
import {motion} from 'framer-motion';

const StyledMenu = styled(motion.div)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  .backdrop {
   background: ${({theme}) => theme.gradients.primary};
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1
  }
  .menu-container {
    position: relative;
    background: ${({theme}) => theme.colors.background};
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
   .menu-links {
      width: 100%;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4rem;
  ${media.tablet`
      padding: 0 2rem;
  `}
`;


export {StyledMenu, StyledContainer}
