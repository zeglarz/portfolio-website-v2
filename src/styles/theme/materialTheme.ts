import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const materialThemeLight = responsiveFontSizes(
    createMuiTheme({
        typography: {
            fontFamily: 'Lato',
        },
        palette: {
            primary: {
                main: '#ff8a00',
            },
            secondary: {
                main: '#e52e71',
            },
            type: 'light',
        },
    }),
);

const materialThemeDark = responsiveFontSizes(
    createMuiTheme({
        typography: {
            fontFamily: 'Lato',
        },
        palette: {
            primary: {
                main: '#7700ff',
            },
            secondary: {
                main: '#4400FF',
            },
            type: 'dark',
        },
    }),
);

export { materialThemeLight, materialThemeDark };
