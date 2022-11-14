import React from 'react';
import { Footer } from 'rmui-bigcomponents';

import logo from './assets/images/logo.svg';
import './assets/css/App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>RMUI Big Components - Ts App</p>
            </header>
            <Footer copyrightText="All right reserved" />
        </div>
    );
}

export default App;
