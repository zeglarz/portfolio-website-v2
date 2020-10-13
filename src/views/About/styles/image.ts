import styled from 'styled-components/macro';
import media from '../../../styles/style';

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet`
    margin-top: 10px;
    justify-content: center;
    flex-direction: column;
`}

  img {
    width: 100%;
    max-width: 400px;
  }
  .item {
    position: relative;
    ${media.tablet`
        margin-top: 20px;
  `}
  }
`;
