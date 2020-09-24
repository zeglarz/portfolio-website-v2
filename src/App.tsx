import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './styles/GlobalStyle';
import useTheme from './helpers/hooks/useTheme';
import useIntro from './helpers/hooks/useIntro';
import { useHistoryListen } from './helpers/hooks/useHistoryListen';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './styles/theme/theme';
import IntroAnimation from './components/IntroAnimation/IntroAnimation';
import Home from './views/Home/Home';
import About from './views/About/About';
import PageWrapper from './components/PageWrapper/PageWrapper';


const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const showIntro = useIntro();
    const [theme, toggleTheme] = useTheme();
    useHistoryListen(() => setMenuOpen(false));

    return (
        <ThemeProvider theme={theme ? dark : light}>
            <IntroAnimation loading={showIntro}/>
            <GlobalStyle/>
            <Navbar
                toggleTheme={toggleTheme}
                showIntro={showIntro}
                theme={theme}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
            <PageWrapper>
                <Switch>
                    <Route exact path={'/home'} component={Home}/>
                    <Route exact path={'/about'} component={About}/>
                    <Redirect to='/home'/>
                </Switch>
            </PageWrapper>
        </ThemeProvider>
    );
}

export default App;
