import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import StatsCards from '../components/Stats/StatsCards';
import TechStack from '../components/TechStack/TechStack';

const About = () => {
    const revealRef = useScrollReveal();

    return (
        <div ref={revealRef} className="about-page container animate-fade-in" style={{ paddingTop: '5rem', paddingBottom: '8rem' }}>
            {/* Bio Section */}
            <section className="section reveal">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div className="bio-text">
                        <h1 className="section-title-large" style={{
                            textAlign: 'left',
                            marginBottom: '2rem',
                            background: 'linear-gradient(to right, #fff 30%, #a855f7 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Know about <span style={{ color: '#a855f7', textShadow: '0 0 20px rgba(168, 85, 247, 0.4)' }}>Me!!</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 600 }}>
                            Hi Stranger!, I am <span style={{ color: '#a855f7' }}>Anjanay Raina</span> from <span style={{ color: '#a855f7' }}>Delhi, India.</span>
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.125rem', letterSpacing: '-0.01em' }}>
                            I am currently in my 4th year pursuing CS at <span style={{ fontWeight: 800, color: 'var(--text-primary)' }}>IIIT Delhi</span>.
                        </p>

                        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                            Some of my Hobbies are:
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '2.2' }}>
                            <li><span style={{ marginRight: '12px' }}>🤜</span> I go to a nearby gym to learn <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Mixed Martial Arts</span></li>
                            <li><span style={{ marginRight: '12px' }}>🤜</span> Gaming (mainly Strategy Games i.e. <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>AoE2, League of Legends, Chess</span>)</li>
                            <li><span style={{ marginRight: '12px' }}>🤜</span> Watching Anime and Reading Manga (I am a Weeb xD)</li>
                            <li><span style={{ marginRight: '12px' }}>🤜</span> Volleyball</li>
                            <li><span style={{ marginRight: '12px' }}>🤜</span> Crypto and Blockchain</li>
                        </ul>
                    </div>

                    <div className="bio-image reveal" style={{ display: 'flex', justifyContent: 'center' }}>
                        {/* Illustration Placeholder matching User Image 1 */}
                        <div className="glass glow-hover" style={{ padding: '2rem', borderRadius: '32px', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                            <div style={{ fontSize: '100px', marginBottom: '1rem' }}>👨‍💻</div>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>Architecting digital universes...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <div className="reveal">
                <StatsCards />
            </div>

            {/* Professional Skillset (Moved from TechStack logic or just reuse component) */}
            <div className="reveal" style={{ marginTop: '4rem' }}>
                <TechStack />
            </div>
        </div>
    );
};

export default About;
