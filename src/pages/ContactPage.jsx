import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const socials = [
    { name: 'LinkedIn', label: 'Professional Profile', url: 'https://www.linkedin.in/in/anjanay-raina-289716192/', color: '#0077b5' },
    { name: 'GitHub', label: 'Code & contributions', url: 'https://github.com/anjanayraina', color: '#181717' },
    { name: 'X / Twitter', label: 'Updates & Thoughts', url: 'https://x.com/your_handle', color: '#000' },
    { name: 'Email', label: 'Direct Correspondence', url: 'mailto:anjanayraina326@gmail.com', color: '#007AFF' }
];

const ContactPage = () => {
    const revealRef = useScrollReveal();

    return (
        <div ref={revealRef} className="contact-page container section animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', pt: '5rem' }}>
            <div className="reveal">
                <h1 className="text-gradient" style={{ fontSize: '4.5rem', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-0.05em' }}>Let's connect.</h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '5rem', fontSize: '1.25rem', lineHeight: '1.6' }}>
                    Open to technical architectural discussions, AI integration strategies, and high-performance backend roles.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', width: '100%', maxWidth: '1000px' }}>
                {socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card reveal glass"
                        style={{
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
                        }}
                    >
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: social.color }}>{social.name === 'Email' ? '✉️' : social.name[0]}</div>
                        <div>
                            <div style={{ fontWeight: 800, fontSize: '1.125rem', marginBottom: '0.25rem' }}>{social.name}</div>
                            <div style={{ color: 'var(--text-tertiary)', fontSize: '0.8125rem' }}>{social.label}</div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="reveal" style={{ marginTop: '8rem', padding: '5rem 3rem', background: 'var(--bg-secondary)', borderRadius: '24px', width: '100%', maxWidth: '800px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>Ready to Scale?</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.125rem' }}>
                    Schedule a technical discovery call to discuss your architecture.
                </p>
                <a href="mailto:anjanayraina326@gmail.com" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
                    Book a Discovery Call
                </a>
            </div>
        </div>
    );
};

export default ContactPage;
