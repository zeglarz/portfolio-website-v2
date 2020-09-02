import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar'
import GlobalStyle from './styles/GlobalStyle';
import useTheme from "./helpers/hooks/useTheme";
import useIntro from "./helpers/hooks/useIntro";
import {useHistoryListen} from "./helpers/hooks/useHistoryListen";
import {ThemeProvider} from 'styled-components';
import {light, dark} from './styles/theme/theme';
import IntroAnimation from "./components/IntroAnimation/IntroAnimation";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const locationChanged = useHistoryListen(() => setMenuOpen(!menuOpen));
    const showIntro = useIntro();
    const [theme, toggleTheme] = useTheme();


    return (
        <ThemeProvider theme={theme ? dark : light}>
            <IntroAnimation loading={showIntro}/>
            <GlobalStyle/>
            <Navbar toggleTheme={toggleTheme} showIntro={showIntro} theme={theme} menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}/>
            <h1>Hello World</h1>
        </ThemeProvider>
    );
}

export default App;
