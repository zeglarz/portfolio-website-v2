import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    scroll-padding-block-start: 60px;
  }
`;

export default GlobalStyle;
