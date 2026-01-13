import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-content">
                <div className="loader-logo">
                    <span className="logo-text">AR</span>
                    <div className="logo-ring"></div>
                </div>
                <div className="loading-bar-container">
                    <div className="loading-bar"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
