import styled from 'styled-components/macro';
import media from '../../../../styles/style';

export const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  ${media.desktop`
      display: none;
  `}
`;
