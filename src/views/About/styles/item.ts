import styled from 'styled-components/macro';
import media from '../../../styles/style';

export default styled.li<{ inverted?: boolean }>`
  width: 33.3%;
  transition: background ease 250ms;
  padding: 1.5rem 0 1rem 0;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  cursor: default;

  h4 {
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    margin: 1rem 0 0.25rem 0;
  }
  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }
  img {
    width: 85px;
    height: auto;
    margin: 0 auto;
    filter: ${({ theme, inverted }) => {
      if (theme.theme === 'dark') {
        if (inverted) {
          return 'invert(1)';
        }
      }
    }};
    ${media.tablet`
      width: auto;
      height: 60px;
  `}
  }
  &:hover {
    background: ${({ theme }) => theme.gradients.primary};
    img {
      filter: ${({ theme, inverted }) => {
        if (theme.theme === 'light') {
          if (inverted) {
            return 'invert(1)';
          }
        }
        return 'none';
      }};
    }
    h4,
    p {
      color: ${({ theme }) => theme.colors.contrast};
    }
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  }
`;
