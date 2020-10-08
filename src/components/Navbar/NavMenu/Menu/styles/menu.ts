import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import media from '../../../../../styles/style';

const StyledMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  
  .backdrop {
   background: ${({ theme }) => theme.gradients.primary};
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
    background: ${({ theme }) => theme.colors.background};
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  
   .menu-links {
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        li {
          margin: 10px auto;
          display: inline-block;
          position: relative;
          list-style: none;
          font-size: 2em;
          font-weight: 700;
          overflow: hidden;
        } 
        .motionContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        }
          a {
            display: inline-block;
            color: ${({ theme }) => theme.colors.text};
            padding: 10px 20px;
            &.active {
                  background: ${({ theme }) => theme.gradients.primary};
                  color: white;
              }
              &:hover:not(.active) {
                  background: ${({ theme }) => theme.gradients.primary};
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  -webkit-box-decoration-break: clone;
              }
            }
            &:hover {

            }
          }
        }
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

export { StyledMenu, StyledContainer };
