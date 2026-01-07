import React from 'react';
import Hero from '../components/Hero/Hero';
import TechStack from '../components/TechStack/TechStack';
import BentoGrid from '../components/BentoGrid/BentoGrid';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home = () => {
    const navigate = useNavigate();
    const revealRef = useScrollReveal();

    return (
        <div ref={revealRef} className="home-page animate-fade-in">
            <Hero />

            {/* Expertise Summary */}
            <section className="container section reveal">
                <div className="expertise-highlights grid-bg card" style={{ padding: '4rem 3rem', textAlign: 'center' }}>
                    <div className="badge animate-fade-in" style={{ marginBottom: '1.5rem', background: 'var(--accent-soft)', color: 'var(--accent-blue)', borderColor: 'transparent' }}>
                        Available for Technical Discovery Calls
                    </div>
                    <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
                        Architecting the Future of Web3 & AI
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.125rem', lineHeight: '1.7' }}>
                        With over 2 years of experience in high-performance backends, I specialize in building fault-tolerant systems and decentralized architectures that scale.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginTop: '1rem' }}>
                        <div className="reveal">
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>3x</div>
                            <div style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.5rem' }}>API Throughput</div>
                        </div>
                        <div className="reveal">
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>100x</div>
                            <div style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.5rem' }}>Resolution Speed</div>
                        </div>
                        <div className="reveal">
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>5k+</div>
                            <div style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.5rem' }}>Daily Transactions</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services/Logic Section */}
            <section className="container section">
                <div className="reveal" style={{ marginBottom: '3rem' }}>
                    <h2 className="section-title">Core Services</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>End-to-end technical excellence.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: 'AI Agent Development', desc: 'Building intelligent agents with LLMs for automated decision making and data extraction.' },
                        { title: 'Smart Contract Auditing', desc: 'Rigorous security audits for Solidity codebases to ensure zero vulnerabilities.' },
                        { title: 'Backend Scaling', desc: 'Optimizing high-concurrency systems using Python, Go, and distributed state management.' }
                    ].map((service, i) => (
                        <div key={i} className="card reveal" style={{ padding: '2.5rem' }}>
                            <div style={{ color: 'var(--accent-blue)', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>0{i + 1}</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="reveal">
                <TechStack />
            </div>

            <section className="container section">
                <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div>
                        <h2 className="section-title" style={{ margin: 0 }}>Proof of Work</h2>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Selected case studies and open-source contributions.</p>
                    </div>
                    <button
                        className="btn-primary"
                        onClick={() => navigate('/projects')}
                    >
                        View All Projects
                    </button>
                </div>
                <div className="reveal">
                    <BentoGrid />
                </div>
            </section>

            {/* Call to Action */}
            <section className="container section reveal" style={{ paddingBottom: '8rem' }}>
                <div className="card grid-bg" style={{ textAlign: 'center', padding: '5rem 2rem', background: 'var(--text-primary)', border: 'none' }}>
                    <h2 style={{ color: 'var(--bg-primary)', fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.05em', lineHeight: '1.1' }}>
                        Let's build something <br /> stable and scalable.
                    </h2>
                    <button
                        className="btn-primary"
                        style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', padding: '1rem 2.5rem', fontSize: '1rem' }}
                        onClick={() => navigate('/contact')}
                    >
                        Start a Project
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
