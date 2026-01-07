import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
    {
        company: 'NatWest Group',
        role: 'Backend Developer',
        period: 'July 2024 – Present',
        points: [
            'Architecting and building the ISV Signature Matching microservice from scratch.',
            'Engineered a fault-tolerant recovery mechanism for critical data processing jobs.',
            'Optimized API endpoints increasing throughput and decreasing response times by 3x.',
            'Leading code reviews and mentoring junior developers.'
        ]
    },
    {
        company: 'Zus Network',
        role: 'Backend Consultant',
        period: 'March 2024 – July 2024',
        points: [
            'Implemented a comprehensive test suite in Go for core backend services.',
            'Audited Solidity codebase, identifying 5+ critical vulnerabilities.'
        ]
    },
    {
        company: 'DLT Labs',
        role: 'Student Researcher',
        period: 'January 2023 – July 2023',
        points: [
            'Developed a Two-Layered Blockchain Architecture using Hyperledger Fabric.',
            'Achieved a 100x faster resolution time for mobile theft tracking systems.'
        ]
    }
];

const achievements = [
    { title: 'Peak Hackathon Winner', org: 'Mantra Chain', date: 'July 2024', rank: '2nd Place' },
    { title: 'Aptos Winter School', org: 'IIT Bombay', date: 'December 2023', rank: 'Selected among top 60 in India' }
];

const Experience = () => {
    const revealRef = useScrollReveal();

    return (
        <div ref={revealRef} className="experience-page container section animate-fade-in">
            <div className="reveal">
                <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>Experience</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '5rem', fontSize: '1.25rem', maxWidth: '600px' }}>
                    Professional journey and technical accomplishments in high-performance engineering.
                </p>
            </div>

            <div style={{ display: 'grid', gap: '5rem' }}>
                <section>
                    <h2 className="section-title reveal" style={{ color: 'var(--text-primary)', marginBottom: '3rem' }}>Work History</h2>
                    <div style={{ display: 'grid', gap: '3rem' }}>
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="reveal" style={{ display: 'grid', gridTemplateColumns: 'minmax(150px, 200px) 1fr', gap: '2rem' }}>
                                <div style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', fontWeight: 600, pt: '0.5rem' }}>
                                    {exp.period}
                                </div>
                                <div className="card" style={{ padding: '2.5rem' }}>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{exp.company}</h3>
                                        <div style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9375rem', marginTop: '0.25rem' }}>{exp.role}</div>
                                    </div>
                                    <ul style={{ color: 'var(--text-secondary)', fontSize: '1rem', listStyle: 'none', paddingLeft: 0 }}>
                                        {exp.points.map((p, i) => (
                                            <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem' }}>
                                                <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>→</span>
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="section-title reveal" style={{ color: 'var(--text-primary)', marginBottom: '3rem' }}>Achievements</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                        {achievements.map((item, idx) => (
                            <div key={idx} className="card reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2.5rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>{item.title}</h3>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>{item.org}</div>
                                </div>
                                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span className="badge" style={{ background: 'var(--accent-soft)', color: 'var(--accent-blue)', border: 'none', fontWeight: 700 }}>{item.rank}</span>
                                    <span style={{ color: 'var(--text-tertiary)', fontSize: '0.8125rem', fontWeight: 500 }}>{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Experience;
