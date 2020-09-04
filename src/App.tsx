import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import GlobalStyle from './styles/GlobalStyle';
import useTheme from "./helpers/hooks/useTheme";
import useIntro from "./helpers/hooks/useIntro";
import {useHistoryListen} from "./helpers/hooks/useHistoryListen";
import {ThemeProvider} from 'styled-components';
import {light, dark} from './styles/theme/theme';
import IntroAnimation from "./components/IntroAnimation/IntroAnimation";
import Home from './views/Home/Home';
import PageWrapper from './components/PageWrapper/PageWrapper';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const showIntro = useIntro();
    const [theme, toggleTheme] = useTheme();
    useHistoryListen(() => setMenuOpen(false));

    return (
        <ThemeProvider theme={theme ? dark : light}>
            <IntroAnimation loading={showIntro}/>
            <GlobalStyle/>
            <Navbar toggleTheme={toggleTheme} showIntro={showIntro} theme={theme} menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}/>
            <PageWrapper>
                <Switch>
                    <Route exact path={'/home'} component={Home}/>
                </Switch>
            </PageWrapper>
        </ThemeProvider>
    );
}

export default App;
