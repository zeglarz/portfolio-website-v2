import React from 'react';
import Navbar from './components/Navbar/Navbar'
import GlobalStyle from './styles/GlobalStyle';
import useTheme from "./helpers/hooks/useTheme";
import useIntro from "./helpers/hooks/useIntro";
import {ThemeProvider} from 'styled-components';
import {light, dark} from './styles/theme/theme';
import IntroAnimation from "./components/IntroAnimation/IntroAnimation";

function App() {
    const showIntro = useIntro();
    const [theme, toggleTheme] = useTheme();

    return (
        <ThemeProvider theme={theme ? dark : light}>
            <IntroAnimation loading={showIntro}/>
            <GlobalStyle/>
            <Navbar toggleTheme={toggleTheme} showIntro={showIntro} theme={theme}/>
            <h1>Hello World</h1>
        </ThemeProvider>
    );
}

export default App;
