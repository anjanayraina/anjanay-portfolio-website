import React from 'react';
import Section from '../UI/Section';
import './Hero.css';

const Hero = () => {
    return (
        <Section id="hero" className="hero-section">
            <div className="container hero-container animate-slide-up">
                {/* Profile Circle at Top Center */}
                <div className="hero-profile-container">
                    <div className="hero-avatar">
                        <div style={{ width: '100%', height: '100%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700 }}>
                            AR
                        </div>
                    </div>
                </div>

                <div className="hero-text-content">
                    <h1 className="hero-heading">
                        Software Engineer, Freelancer, and Open Source Enthusiast.
                    </h1>
                    <p className="hero-description">
                        I'm a Senior Full-Stack Engineer focused on building secure, AI-powered decentralized systems.
                        I love architecting tools that make developers' lives easier and sharing what I learn through tech blogs and open source.
                    </p>
                    <p className="hero-cta-text">
                        Currently accepting freelance projects — let's build something amazing together!
                    </p>
                </div>

                {/* Social Icons Row */}
                <div className="hero-socials">
                    <a href="https://github.com/anjanayraina" target="_blank" className="social-icon">GH</a>
                    <a href="https://linkedin.com/in/..." target="_blank" className="social-icon">LI</a>
                    <a href="https://x.com/..." target="_blank" className="social-icon">X</a>
                    <a href="mailto:anjanayraina326@gmail.com" className="social-icon">EM</a>
                    <a href="#" className="social-icon">BW</a>
                </div>

                {/* Floating Photo Gallery Row */}
                <div className="hero-gallery">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className={`gallery-item item-${i}`}>
                            <div className="gallery-img-placeholder">
                                <span>Ref_{i}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Hero;
