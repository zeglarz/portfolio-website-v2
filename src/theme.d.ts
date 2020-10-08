import 'styled-components/macro';

declare module 'styled-components/macro' {
  export interface DefaultTheme {
    colors: {
      text: string;
      contrast: string;
      background: string;
      secondary: string;
    };
    gradients: {
      primary: string;
      svg: string;
    };
    shadows: {
      primary: string;
    };
  }
}
