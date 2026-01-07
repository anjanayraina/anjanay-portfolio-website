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
                            Beyond my corporate role, I'm a Web3 Security Researcher with 3+ years of experience securing high-value protocols.
                            I live for the challenge of <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>solving real-world problems</span> through elegant code.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                            <button className="btn-primary" onClick={() => window.open('https://drive.google.com/drive/folders/18StaXAN5Odo6mds5dGxj11s9YiRF-m-m?usp=sharing', '_blank')}>
                                View Audit Reports 📑
                            </button>
                            <button className="btn-secondary" onClick={() => window.open('https://drive.google.com/drive/folders/18StaXAN5Odo6mds5dGxj11s9YiRF-m-m?usp=sharing', '_blank')}>
                                Download Resume 📥
                            </button>
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


                    <div className="bio-image reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                        {/* Trekking Photo Card */}
                        <div className="glass glow-hover" style={{ padding: '0.5rem', borderRadius: '32px', width: '100%', maxWidth: '450px', border: '1px solid rgba(168, 85, 247, 0.2)', overflow: 'hidden' }}>
                            <img
                                src="/images/trekking.jpg"
                                alt="Anjanay Trekking"
                                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '26px' }}
                            />
                        </div>

                        {/* Setup Photo Card */}
                        <div className="glass glow-hover" style={{ padding: '2rem', borderRadius: '40px', width: '100%', maxWidth: '450px', textAlign: 'center', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                            <img
                                src="/images/setup.jpg"
                                alt="My Workspace"
                                style={{ width: '80px', height: '80px', borderRadius: '16px', objectFit: 'cover', marginBottom: '1.5rem', border: '2px solid var(--accent-purple)' }}
                            />
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>Top Global Auditor</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', opacity: 0.8 }}>"Securing the decentralized future, one line of code at a time."</p>
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
