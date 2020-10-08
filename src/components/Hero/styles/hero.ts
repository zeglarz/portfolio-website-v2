import styled from 'styled-components/macro';
import media from '../../../styles/style';

export default styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;

  ${media.tablet`
    margin-top: 2rem;
    justify-content: flex-start;
    align-items: flex-start;
  `}

  .hero-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  .social-links {
    margin-bottom: 32px;
    ul {
      display: flex;
      list-style: none;
      li {
        cursor: pointer;
      }
    }
  }
`;
