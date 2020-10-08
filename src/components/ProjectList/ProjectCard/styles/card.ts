import styled from 'styled-components/macro';
import { StyledLink } from '../../../../styles/StyledLink';
import media from '../../../../styles/style';

export default styled.div`
  width: 100%;
  padding-bottom: 5.5rem;
  display: flex;
  justify-content: center;
  text-align: justify;
  .image {
    position: relative;
    img {
      max-height: 350px;
      height: auto;
      max-width: 500px;
      object-fit: cover;
      border-radius: 16px;
      box-shadow: ${({ theme }) => theme.shadows.primary};
      ${media.tablet`
        object-fit: cover;
        width: 100%;
        height: 100%;
      `}
    }
  }
  .details {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    ${media.tablet`
      flex-direction: center !important;
      justify-content: center !important;
    `}
    .title {
      font-family: 'Abril Fatface', sans-serif;
      font-weight: 900;
      color: ${({ theme }) => theme.colors.text};
      ${media.tablet`
        margin: 0 auto;
     `}
    }
    .subtitle {
      margin-bottom: 16px;
      color: ${({ theme }) => theme.colors.secondary};
      ${media.tablet`
         margin: 0 auto;
      `}
    }
    .skills {
      ${media.tablet`
         margin: 0 auto;
      `};
      margin-bottom: 8px;
    }
  }
  button {
    margin-right: 15px;
  }
  .paragraph a {
    font-family: 'Inconsolata', sans-serif;
    float: right;
    color: ${({ theme }) => theme.colors.text};
    &:hover {
      text-decoration: underline;
    }
  }
`;
