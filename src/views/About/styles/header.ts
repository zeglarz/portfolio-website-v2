import styled from 'styled-components/macro';
import media from '../../../styles/style';

export default styled.div`
  position: sticky;
  top: 6rem;
  align-self: flex-start;
  padding-bottom: 4.46rem;
  ${media.tablet`
    position: static;
    padding: 0 0 2rem 0;
  `}
`;
