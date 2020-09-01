import styled from 'styled-components';
import media from '../../../../styles/style';

const StyledMenu = styled.div`

`;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4rem;
  /* overflow: hidden; */
  ${media.tablet`
      padding: 0 2rem;
  `}
`;


export {StyledMenu, StyledContainer}
