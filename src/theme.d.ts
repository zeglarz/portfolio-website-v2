import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      contrast: string;
      background: string;
      secondary: string;
      banner: string;
    };
    gradients: {
      primary: string;
      svg: string;
    };
    shadows: {
      primary: string;
    };
    theme: string;
  }
}
