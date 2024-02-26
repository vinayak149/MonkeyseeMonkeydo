// components/HomePage.js
import React from 'react';
import NavBar from './NavBar';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <div className="header">
                <h1>Welcome to the Hack-a-thon Portal</h1>
            </div>
            <p className="text-center">Navigate to submit or review ideas for the Hack-a-thon.</p>
        </div>
    );
};

export default HomePage;
