import {createGlobalStyle} from 'styled-components';
import media from './style';

const GlobalStyle = createGlobalStyle`
//Fonts
@import url('https://fonts.googleapis.com/css2?family=Abril Fatface:wght@500;800;900&family=Lato:wght@300;400;700&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,700&display=swap');
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
    background: black;
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
