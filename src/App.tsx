import React from 'react';
import Navbar from './components/Navbar/Navbar'
import GlobalStyle from './styles/GlobalStyle';
import useTheme from "./helpers/hooks/useTheme";
import {ThemeProvider} from 'styled-components';
import {light, dark} from './styles/theme/theme';

function App() {

    const [theme, toggleTheme] = useTheme();

    return (
        <ThemeProvider theme={theme ? dark : light}>
            <GlobalStyle/>
            <Navbar toggleTheme={toggleTheme}/>
            <h1>Hello World</h1>
        </ThemeProvider>
    );
}

export default App;
