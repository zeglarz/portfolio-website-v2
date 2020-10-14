import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import media from '../../../../styles/style';

export const StyledList = styled(motion.ul)`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    a {
      cursor: pointer;
      display: flex;
      font-size: 0.8rem;
      font-family: 'Lato', sans-serif;
      font-weight: 300;
      padding: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      transition: all ease-in-out 200ms;
      color: ${({ theme }) => theme.colors.text};

      ${media.bigDesktop`
          font-size: 0.7rem;
          padding: 0.8rem 0.5rem;
          font-weight: 400;
      `}

      &.active {
        display: inline-block;
        background: ${({ theme }) => theme.gradients.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
      }
      &:hover {
        color: ${({ theme }) => theme.gradients.primary};
        svg {
          fill: ${({ theme }) => theme.gradients.svg};
        }
      }
    }
    svg {
      margin: 5px;
    }
  }
`;
