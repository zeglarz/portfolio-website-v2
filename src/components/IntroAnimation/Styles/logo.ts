import styled from 'styled-components/macro';

export default styled.div`
  width: max-content;
  svg {
    text {
      fill: ${({ theme }) => theme.colors.text};
    }
    #main-square {
      fill: ${({ theme }) => theme.colors.background};
    }
    user-select: none;
  }
`;
