import { DefaultTheme } from 'styled-components/macro';


const light: DefaultTheme = {
    colors: {
        text: 'black',
        contrast: '#ffffff',
        background: '#ffffff',
        secondary: '#656565',
    },
    gradients: {
        primary: 'linear-gradient(90deg, #7700ff 0%, rgb(68, 0, 255) 100%)',
        svg: 'url(#light)',

    },
    shadows: {
        primary: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                  0 12.5px 10px rgba(0, 0, 0, 0.06),
                  0 22.3px 17.9px rgba(0, 0, 0, 0.072)`,
    },
};

const dark: DefaultTheme = {
    colors: {
        text: 'white',
        contrast: 'black',
        background: '#100E17',
        secondary: '#aeaeae',
    },
    gradients: {
        primary: 'linear-gradient(90deg,#ff8a00,#e52e71)',
        svg: 'url(#dark)',
    },
    shadows: {
        primary: `0 2.8px 2.2px rgba(255, 255, 255, 0.034),
                  0 6.7px 5.3px rgba(255, 255, 255, 0.048),
                  0 12.5px 15px rgba(255, 255, 255, 0.06)`,
    },
};

export { light, dark };
