import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <NavLink to="/" className="navbar-logo">AR.</NavLink>
                <ul className="navbar-links">
                    <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
                    <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>Experience</NavLink></li>
                    <li><NavLink to="/stack" className={({ isActive }) => isActive ? 'active' : ''}>Stack</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
