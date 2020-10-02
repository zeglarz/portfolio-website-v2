import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import GlobalStyle from './styles/GlobalStyle';
import useTheme from './helpers/hooks/useTheme';
import useIntro from './helpers/hooks/useIntro';
import { useHistoryListen } from './helpers/hooks/useHistoryListen';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './styles/theme/theme';
import IntroAnimation from './components/IntroAnimation/IntroAnimation';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Projects from './views/Projects/Projects';
import PageWrapper from './components/PageWrapper/PageWrapper';
import { materialThemeDark, materialThemeLight } from './styles/theme/materialTheme';
import Footer from './components/Footer/Footer';


const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const showIntro = useIntro();
    const [theme, toggleTheme] = useTheme();
    const [isScrollable, setScrollable] = useState(false);
    const history = useHistoryListen(() => setMenuOpen(false));

    useEffect(() => {
        const scrollable = document.body.clientHeight > document.documentElement.clientHeight;
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.height = '100%';
        }
        setScrollable(scrollable);
    }, [theme, menuOpen, history.location.pathname]);
    return (
        <ThemeProvider theme={theme ? dark : light}>
            <MuiThemeProvider theme={theme ? materialThemeDark : materialThemeLight}>
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
                        <Route exact path={'/contact'} component={Contact}/>
                        <Route exact path={'/projects'} component={Projects}/>
                        <Redirect to='/home'/>
                    </Switch>
                </PageWrapper>
                <Footer showVert={isScrollable}/>
            </MuiThemeProvider>
        </ThemeProvider>
    );
};

export default withRouter(App);
