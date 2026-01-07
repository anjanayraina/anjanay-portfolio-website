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
        <div ref={revealRef} className="contact-page container section animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: '5rem' }}>
            <div className="reveal">
                <h1 className="text-gradient" style={{
                    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                    marginBottom: '1.5rem',
                    fontWeight: 800,
                    letterSpacing: '-0.05em',
                    display: 'inline-block'
                }}>
                    Let's connect.
                </h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '5rem', fontSize: '1.25rem', lineHeight: '1.6', marginInline: 'auto' }}>
                    Open to technical architectural discussions, AI integration strategies, and high-performance backend roles.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', width: '100%', maxWidth: '1100px' }}>
                {[
                    { name: 'LinkedIn', label: 'Professional Profile', url: 'https://www.linkedin.in/in/anjanay-raina-289716192/', color: '#0077b5', brand: 'in' },
                    { name: 'GitHub', label: 'Code & contributions', url: 'https://github.com/anjanayraina', color: '#fff', brand: 'git' },
                    { name: 'Upwork', label: 'Hire me for projects', url: 'https://www.upwork.com/freelancers/~010cea8b44a78ea307?mp_source=share', color: '#14a800', brand: 'Up' },
                    { name: 'Fiverr', label: 'Direct Gigs', url: 'https://www.fiverr.com/s/38xwaxx', color: '#1dbf73', brand: 'fi' },
                    { name: 'Medium', label: 'Technical Writing', url: 'https://medium.com/@anjanayraina326', color: '#fff', brand: 'M' },
                    { name: 'X / Twitter', label: 'Updates & Thoughts', url: 'https://x.com/your_handle', color: '#fff', brand: '𝕏' },
                    { name: 'Email', label: 'Direct Correspondence', url: 'mailto:anjanayraina326@gmail.com', color: '#a855f7', brand: '✉' }
                ].map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card reveal glass glow-hover"
                        style={{
                            padding: '2rem 1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            textDecoration: 'none',
                            borderRadius: '24px'
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: `${social.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.25rem',
                            fontWeight: 900,
                            color: social.color,
                            marginBottom: '1.5rem',
                            border: `1px solid ${social.color}20`
                        }}>
                            {social.brand}
                        </div>
                        <div style={{ fontWeight: 800, fontSize: '1.125rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{social.name}</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{social.label}</div>
                    </a>
                ))}
            </div>


            <div className="reveal" style={{ marginTop: '8rem', padding: '5rem 3rem', background: 'var(--bg-secondary)', borderRadius: '24px', width: '100%', maxWidth: '800px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>Ready to Scale?</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.125rem' }}>
                    I am available for freelance projects on **Upwork** and **Fiverr**. <br />
                    Schedule a 30-minute technical discovery call to discuss your architecture.
                </p>
                <a href="https://calendly.com/anjanayraina326/30min" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
                    Book a Discovery Call
                </a>
            </div>

        </div>

    );
};

export default ContactPage;
