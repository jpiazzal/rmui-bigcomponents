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
            <Footer
                copyrightText="All right reserved"
                socialMediaLinks={[
                    { name: 'facebook', url: '#' },
                    { name: 'twitter', url: '#' },
                    { name: 'instagram', url: '#' },
                    { name: 'youtube', url: '#' },
                    { name: 'linkedin', url: '#' },
                    { name: 'github', url: '#' },
                    { name: 'pinterest', url: '#' },
                    { name: 'reddit', url: '#' },
                    { name: 'whatsapp', url: '#' },
                    { name: 'telegram', url: '#' }
                ]}
            />
        </div>
    );
}

export default App;
