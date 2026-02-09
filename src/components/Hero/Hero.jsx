import React from 'react';
import Section from '../UI/Section';
import './Hero.css';

const Hero = () => {
    const [displayText, setDisplayText] = React.useState('');
    const [roleIndex, setRoleIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);

    const roles = React.useMemo(() => [
        "Backend Architect",
        "Full Stack Developer",
        "Smart Contract Auditor",
        "Systems Engineer"
    ], []);

    React.useEffect(() => {
        const currentRole = roles[roleIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting && displayText === currentRole) {
                // Finished typing, wait before deleting
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === '') {
                // Finished deleting, move to next role
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                // Typing or deleting
                const nextText = isDeleting
                    ? currentRole.substring(0, displayText.length - 1)
                    : currentRole.substring(0, displayText.length + 1);
                setDisplayText(nextText);
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex, roles]);

    return (
        <Section id="hero" className="hero-section">
            <div className="container hero-container animate-slide-up">
                {/* Profile Circle at Top Center */}
                <div className="hero-profile-container animate-float">
                    <div className="hero-avatar">
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 800, background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}>
                            AR
                        </div>
                    </div>
                </div>

                <div className="hero-text-content">
                    <h1 className="hero-heading">
                        Backend Architect & <br />
                        <span style={{ color: 'var(--accent-purple)' }}>{displayText}</span>
                        <span className="typing-cursor"></span>
                    </h1>
                    <p className="hero-description">
                        Hi, I'm <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Anjanay Raina</span>.
                        I architect <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>high-performance backends</span> and <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>decentralized protocols</span>.
                        Specializing in system design, security, and scalable full-stack engineering.
                    </p>


                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2.5rem' }}>
                        <a href="/contact" className="btn-primary">Connect with Me</a>
                        <button className="btn-secondary" onClick={() => window.open('https://drive.google.com/file/d/1SQr6rotQZPPJK73bGZ55kMF3LolZy4Zl/view?usp=sharing', '_blank')}>
                            Download Resume 📥
                        </button>
                    </div>
                </div>


                {/* Social Icons Row */}
                <div className="hero-socials">
                    <a href="https://github.com/anjanayraina" target="_blank" className="social-icon">
                        <span>GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/anjanay-raina-289716192/" target="_blank" className="social-icon">
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://x.com/Anjanay_Raina" target="_blank" className="social-icon">
                        <span>𝕏 (Twitter)</span>
                    </a>
                    <a href="mailto:anjanayraina326@gmail.com" className="social-icon">
                        <span>Email</span>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll to Explore</span>
            </div>
        </Section>
    );
};

export default Hero;
