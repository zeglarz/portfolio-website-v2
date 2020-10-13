import styled from 'styled-components/macro';
import media from '../../../styles/style';

export default styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  ${media.tablet`
    align-items: flex-end;
  `}

  div {
    width: 90%;
    margin-bottom: 5rem;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 3rem;
    }
    h3 {
      text-align: center;
      margin-bottom: 3rem;
      font-family: 'Abril Fatface', 'Lato', sans-serif;
      color: ${({ theme }) => theme.colors.text};
      ${media.tablet`
            text-align: start;
            margin-bottom: 1rem;
          `}
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      list-style: none;
    }
  }
`;
