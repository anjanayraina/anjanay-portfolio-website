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
                            background: 'linear-gradient(135deg, #fff 0%, #a855f7 50%, #6366f1 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.2))'
                        }}>
                            Know about <span style={{ color: '#a855f7' }}>Me!!</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
                            Hi Stranger!, I am <span style={{ color: '#a855f7' }}>Anjanay Raina</span> from <span style={{ color: '#a855f7' }}>Delhi, India.</span>
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.125rem', letterSpacing: '-0.01em', lineHeight: '1.8' }}>
                            I am currently in my 4th year pursuing CS at <span style={{ fontWeight: 800, color: 'var(--text-primary)' }}>IIIT Delhi</span>.
                        </p>

                        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                            Some of my Hobbies are:
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '2.2' }}>
                            <li><span style={{ marginRight: '12px', fontSize: '1.25rem' }}>🥊</span> I go to a nearby gym to learn <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Mixed Martial Arts</span></li>
                            <li><span style={{ marginRight: '12px', fontSize: '1.25rem' }}>🎮</span> Gaming (mainly Strategy Games i.e. <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>AoE2, League of Legends, Chess</span>)</li>
                            <li><span style={{ marginRight: '12px', fontSize: '1.25rem' }}>🏮</span> Watching Anime and Reading Manga (I am a Weeb xD)</li>
                            <li><span style={{ marginRight: '12px', fontSize: '1.25rem' }}>🏐</span> Volleyball</li>
                            <li><span style={{ marginRight: '12px', fontSize: '1.25rem' }}>⛓️</span> Crypto and Blockchain</li>
                        </ul>
                    </div>

                    <div className="bio-image reveal" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="glass glow-hover" style={{ padding: '2.5rem', borderRadius: '40px', width: '100%', maxWidth: '450px', textAlign: 'center', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                            <div style={{ fontSize: '120px', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.3))' }}>👨‍💻</div>
                            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontStyle: 'italic', opacity: 0.8 }}>Architecting digital universes...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Now Stacked */}
            <div className="reveal" style={{ marginTop: '2rem', marginBottom: '6rem' }}>
                <StatsCards />
            </div>

            {/* Professional Skillset */}
            <div className="reveal">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem', justifyContent: 'center' }}>
                    <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', fontSize: '1.5rem' }}>⚙️</div>
                    <h2 className="section-title-large" style={{ margin: 0 }}>Professional <span style={{ color: '#a855f7' }}>Skillset</span></h2>
                </div>
                <TechStack />
            </div>
        </div>
    );
};

export default About;
