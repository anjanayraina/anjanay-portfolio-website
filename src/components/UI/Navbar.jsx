import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <div className="nav-avatar animate-fade-in">
                <img src="/logo.png" alt="Stryder Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
            </div>

            <nav className="navbar animate-fade-in">
                <ul className="navbar-links">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
                    <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>Experience</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
                </ul>
            </nav>

            <div className="nav-actions animate-fade-in">
                <button className="action-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                    <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
                </button>
            </div>
        </>
    );
};

export default Navbar;
