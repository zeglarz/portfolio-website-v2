import { createGlobalStyle } from 'styled-components';
import media from './style';


const GlobalStyle = createGlobalStyle`
 ::-webkit-scrollbar {
      display: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
  
  *:not(input) {    
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
  input, textarea {
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}
  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Lato', 'Ubuntu', -apple-system, sans-serif;
    scroll-padding-block-start: 60px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    ${media.tablet`
      font-size: .75rem;
    `};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

`;

export default GlobalStyle;
