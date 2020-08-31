import React from 'react';
import Navbar from './components/Navbar/Navbar'
import GlobalStyle from './styles/GlobalStyle';

function App() {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <h1>Hello World</h1>
        </>
    );
}

export default App;
