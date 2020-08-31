import {createGlobalStyle} from 'styled-components';
import media from './style';

const GlobalStyle = createGlobalStyle`
//Fonts
 ::-webkit-scrollbar {
      display: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
  
  body {
    background: ${({theme}) => theme.colors.background};
    font-family: 'Lato', 'Ubuntu', -apple-system, sans-serif;
    scroll-padding-block-start: 60px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    ${media.tablet`
      font-size: .75rem;
      svg {
        width: 35px;
        height: 35px;
      } 
    `};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

`;

export default GlobalStyle;
