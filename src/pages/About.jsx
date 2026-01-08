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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="bio-text" style={{ maxWidth: '900px' }}>
                        <h1 className="section-title-large" style={{
                            textAlign: 'left',
                            marginBottom: '2rem',
                            display: 'inline-block',
                            background: 'linear-gradient(135deg, #fff 0%, #a855f7 50%, #6366f1 100%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.2))'
                        }}>

                            Know about <span style={{ color: '#a855f7' }}>Me!!</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
                            Hi Stranger!, I am <span style={{ color: '#a855f7' }}>Anjanay Raina</span> from <span style={{ color: '#a855f7' }}>Delhi, India.</span>
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.125rem', letterSpacing: '-0.01em', lineHeight: '1.8' }}>
                            I am currently a <span style={{ fontWeight: 800, color: 'var(--text-primary)' }}>Backend Developer at NatWest Group</span>.
                            Beyond my corporate role, I am an <span style={{ color: '#a855f7', fontWeight: 800 }}>Elite Security Researcher</span> and a <span style={{ color: '#a855f7', fontWeight: 800 }}>Top Global Auditor</span> on Code4rena & Sherlock,
                            securing high-value protocols with 3+ years of deep technical experience.
                        </p>

                        {/* Professional Skillset - Moved Up */}
                        <div className="reveal" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem', justifyContent: 'center' }}>
                                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', fontSize: '1.5rem' }}>⚙️</div>
                                <h2 className="section-title-large" style={{ margin: 0 }}>Professional <span style={{ color: '#a855f7' }}>Skillset</span></h2>
                            </div>
                            <TechStack />
                        </div>

                        {/* Stats Section - Moved Up */}
                        <div className="reveal" style={{ marginTop: '2rem', marginBottom: '6rem' }}>
                            <StatsCards />
                        </div>




                        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                            Beyond the Code:
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '2.2' }}>
                            <li><span style={{ marginRight: '12px', fontSize: '1.25rem' }}>🥊</span> Practicing <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Mixed Martial Arts & Kickboxing</span></li>
                            <li><span style={{ marginRight: '12px', fontSize: '1.25rem' }}>🏔️</span> Enthusiastic about <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Trekking</span> and outdoor adventures</li>
                            <li><span style={{ marginRight: '12px', fontSize: '1.25rem' }}>🎮</span> Gaming (Strategy Games: AoE2, LoL, Chess)</li>
                            <li><span style={{ marginRight: '12px', fontSize: '1.25rem' }}>🏮</span> Watching Anime and Reading Manga</li>
                            <li><span style={{ marginRight: '12px', fontSize: '1.25rem' }}>⛓️</span> Exploring the frontiers of Crypto and Blockchain</li>
                        </ul>
                    </div>


                    <div className="bio-gallery-container reveal" style={{ marginTop: '3rem' }}>
                        <div className="horizontal-scroll-wrapper custom-scrollbar" style={{
                            display: 'flex',
                            gap: '2.5rem',
                            overflowX: 'auto',
                            padding: '1rem 0.5rem 2rem',
                            scrollBehavior: 'smooth',
                            WebkitOverflowScrolling: 'touch'
                        }}>
                            {/* Trekking Photo Card */}
                            <div className="glass glow-hover" style={{
                                flex: '0 0 420px',
                                padding: '1.25rem',
                                borderRadius: '32px',
                                border: '1px solid rgba(168, 85, 247, 0.2)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <img
                                    src="/trekking.jpg"
                                    alt="Anjanay Trekking"
                                    style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '24px' }}
                                />
                                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontStyle: 'italic', fontWeight: 500 }}>
                                        Exploring the Himalayas — Finding balance away from the terminal.
                                    </p>
                                </div>
                            </div>

                            {/* Code4rena Finding Card */}
                            <div className="glass glow-hover" style={{
                                flex: '0 0 420px',
                                padding: '1.5rem',
                                borderRadius: '32px',
                                border: '1px solid rgba(168, 85, 247, 0.2)',
                                background: 'rgba(168, 85, 247, 0.03)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <img
                                    src="/Code4rena.png"
                                    alt="First Code4rena Finding"
                                    style={{ width: '100%', borderRadius: '20px', border: '1px solid rgba(168, 85, 247, 0.3)', flex: 1, objectFit: 'contain' }}
                                />
                                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>First Critical Finding</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', opacity: 0.8 }}>The milestone that launched my journey in DeFi security at Code4rena.</p>
                                </div>
                            </div>

                            {/* MMA Photo Card */}
                            <div className="glass glow-hover" style={{
                                flex: '0 0 420px',
                                padding: '1.25rem',
                                borderRadius: '32px',
                                border: '1px solid rgba(168, 85, 247, 0.2)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <img
                                    src="/mma.jpg"
                                    alt="MMA Training"
                                    style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '24px' }}
                                />
                                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>MMA & Kickboxing</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', opacity: 0.8 }}>
                                        Discipline in the cage, precision in the code.
                                    </p>
                                </div>
                            </div>


                            {/* Setup Photo Card */}
                            <div className="glass glow-hover" style={{
                                flex: '0 0 420px',
                                padding: '1.25rem',
                                borderRadius: '32px',
                                border: '1px solid rgba(168, 85, 247, 0.2)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <img
                                    src="/setup.jpeg"
                                    alt="My Workspace"
                                    style={{ width: '100%', height: '320px', borderRadius: '24px', objectFit: 'cover', border: '1px solid rgba(168, 85, 247, 0.3)' }}
                                />
                                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>The Command Center</h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontStyle: 'italic', opacity: 0.9 }}>
                                        Where architecture meets aesthetic.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </section>

            {/* Awards & Recognition Section */}
            <section className="section reveal" style={{ marginTop: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
                    <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', fontSize: '1.5rem' }}>🏆</div>
                    <h2 className="section-title-large" style={{ margin: 0, fontSize: '2rem' }}>Awards & <span style={{ color: '#a855f7' }}>Recognition</span></h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {[
                        { title: 'Peak Hackathon Winner (2nd Place)', org: 'Mantra Chain', date: 'Jul 2024', icon: '🥈' },
                        { title: 'Aptos Winter School', org: 'IIT Bombay', date: 'Dec 2023', icon: '🎿' },
                        { title: 'GDSC Blockchain Mentor', org: 'Core Lead', date: '2023-2024', icon: '🎓' }
                    ].map((award, i) => (
                        <div key={i} className="card glass glow-hover reveal" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{award.icon}</div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>{award.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{award.org} • {award.date}</p>
                        </div>
                    ))}
                </div>
            </section>




        </div>
    );
};

export default About;
