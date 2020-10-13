import styled from 'styled-components/macro';
import media from '../../../styles/style';

export default styled.div`
  width: 100%;
  .skills {
    margin: 14rem 0 5rem 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    ${media.tablet`
      margin-top: 4rem;
      margin-bottom: 0;
      flex-direction: column;
      justify-content: flex-start;
    `}
  }
`;
