import React from 'react';
import Section from '../UI/Section';
import './Hero.css';

const Hero = () => {
    return (
        <Section id="hero" className="hero-section">
            <div className="hero-grid container">
                <div className="hero-content">
                    <div className="scan-line"></div>
                    <h1 className="hero-title text-gradient">
                        Building secure, <br />
                        AI-integrated Blockchain <br />
                        architectures.
                    </h1>
                    <p className="hero-subtitle">
                        Senior Full-Stack Engineer specializing in AI agents and decentralized systems.
                    </p>
                </div>
                <div className="hero-image-container">
                    <div className="photo-placeholder card animate-fade-in">
                        {/* Replace with <img src="..." alt="Anjanay Raina" /> later */}
                        <div className="placeholder-text">Photo Placeholder</div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
