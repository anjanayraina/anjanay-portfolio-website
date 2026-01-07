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
                        Backend Developer @ <span style={{ color: '#a855f7' }}>NatWest Group</span>.
                    </h1>
                    <p className="hero-description">
                        I build high-performance systems and secure decentralized protocols.
                        When I'm not <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>solving real-world technical problems</span>,
                        you'll find me at the gym practicing <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>MMA & Kickboxing</span> or out <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>Trekking</span> in the mountains.
                    </p>


                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2.5rem' }}>
                        <a href="/contact" className="btn-primary">Connect with Me</a>
                        <button className="btn-secondary" onClick={() => window.open('https://drive.google.com/drive/folders/18StaXAN5Odo6mds5dGxj11s9YiRF-m-m?usp=sharing', '_blank')}>
                            Download Resume 📥
                        </button>
                    </div>
                </div>


                {/* Social Icons Row */}
                <div className="hero-socials">
                    <a href="https://github.com/anjanayraina" target="_blank" className="social-icon">GitHub</a>
                    <a href="https://www.linkedin.in/in/anjanay-raina-289716192/" target="_blank" className="social-icon">LinkedIn</a>
                    <a href="https://x.com/your_handle" target="_blank" className="social-icon">𝕏</a>
                    <a href="mailto:anjanayraina326@gmail.com" className="social-icon">Email</a>
                </div>
            </div>
        </Section>

    );
};

export default Hero;
