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
                    { name: 'facebook', href: '#' },
                    { name: 'twitter', href: '#' },
                    { name: 'instagram', href: '#' },
                    { name: 'youtube', href: '#' },
                    { name: 'linkedin', href: '#' },
                    { name: 'github', href: '#' },
                    { name: 'pinterest', href: '#' },
                    { name: 'reddit', href: '#' },
                    { name: 'whatsapp', href: '#' },
                    { name: 'telegram', href: '#' }
                ]}
            />
        </div>
    );
}

export default App;
