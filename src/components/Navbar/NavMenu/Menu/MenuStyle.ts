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
      ul {
        display: flex;
        flex-direction: column;
        li {
          position: relative;
          list-style: none;
          font-size: 3.5rem;
          font-weight: 700;
          height: 90px;
          overflow: hidden;
          @media (max-width: 1440px) {
            font-size: 2rem;
            height: 55px;
          }
          a {
            position: absolute;
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
