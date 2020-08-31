import React from 'react';
import Navbar from './components/Navbar/Navbar'
import GlobalStyle from './style/GlobalStyle';

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
