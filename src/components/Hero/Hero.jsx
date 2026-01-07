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
                        Software Engineer, <span style={{ color: '#a855f7' }}>Smart Contract Auditor</span>, and Freelancer.
                    </h1>
                    <p className="hero-description">
                        I'm a Full-Stack Engineer and Web3 Security Researcher focused on securing high-value DeFi protocols.
                        From architecting scalable microservices at <span style={{ fontWeight: 700 }}>NatWest</span> to identifying 20+ critical vulnerabilities in the blockchain space.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2.5rem' }}>
                        <a href="mailto:anjanayraina326@gmail.com" className="btn-primary">Hire Me</a>
                        <button className="btn-secondary" onClick={() => window.open('https://drive.google.com/drive/folders/18StaXAN5Odo6mds5dGxj11s9YiRF-m-m?usp=sharing', '_blank')}>
                            Download Resume 📥
                        </button>
                    </div>
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
