import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// Themes
import { MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components/macro';
import {
  materialThemeDark,
  materialThemeLight,
} from './styles/theme/materialTheme';
import { dark, light } from './styles/theme/theme';
// Hooks
import useTheme from './hooks/useTheme';
import useIntro from './hooks/useIntro';
import useHistoryListen from './hooks/useHistoryListen';
// Styles
import GlobalStyle from './styles/GlobalStyle';
import PageWrapper from './components/PageWrapper/PageWrapper';
// Components
import IntroAnimation from './components/IntroAnimation/IntroAnimation';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
// Views
import Home from './views/Home/Home';
import About from './views/About';
import Contact from './views/Contact';
import Projects from './views/Projects/Projects';

const App = (): JSX.Element => {
  const showIntro = useIntro();

  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useHistoryListen(() => setMenuOpen(false));

  const [theme, toggleTheme] = useTheme();

  const [isScrollable, setScrollable] = useState<boolean>(false);

  useEffect(() => {
    const { clientHeight } = document.documentElement;
    const { clientHeight: clientHeightBody } = document.body;
    const scrollable = clientHeightBody > clientHeight;
    setScrollable(scrollable);

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = '100%';
    }
  }, [theme, menuOpen, pathname]);
  return (
    <ThemeProvider theme={theme ? dark : light}>
      <MuiThemeProvider theme={theme ? materialThemeDark : materialThemeLight}>
        <IntroAnimation loading={showIntro} />
        <GlobalStyle />
        <Navbar
          toggleTheme={toggleTheme}
          showIntro={showIntro}
          theme={theme}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <PageWrapper>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Redirect to="/home" />
          </Switch>
        </PageWrapper>
        <Footer showVert={isScrollable} />
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

export default App;
