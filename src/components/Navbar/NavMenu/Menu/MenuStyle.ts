import styled from 'styled-components';
import media from '../../../../styles/style';
import {motion} from 'framer-motion';

const StyledMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
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
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        li {
          margin: 0 auto;
          display: inline-block;
          position: relative;
          list-style: none;
          font-size: 2em;
          font-weight: 700;
          height: 55px;
          overflow: hidden;
        } 
          a {
            color: ${({theme}) => theme.colors.text};
            &::before {
              content: '';
              height: 100%;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0;
              z-index: -1;
              background: ${({theme}) => theme.colors.text};
              transition: all ease-in-out 80ms;
            }
            &.active {
                 display: inline-block;
                      background: ${({theme}) => theme.gradients.primary};
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
                      -webkit-box-decoration-break: clone;
              &::before {
                width: 100%;
              }
              &:hover {
                color: ${({theme}) => theme.colors.text};
                &::before {
                  height: 80%;
                }
              }
            }
            &:hover {
              color: ${({theme}) => theme.colors.text};
            }
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


export {StyledMenu, StyledContainer}
