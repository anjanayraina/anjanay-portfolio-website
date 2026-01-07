import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--border-subtle)',
            padding: '4rem 0',
            marginTop: '4rem',
            background: 'var(--bg-secondary)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <div style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>AR.</div>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                        &copy; {new Date().getFullYear()} Anjanay Raina. All rights reserved.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="https://github.com/anjanayraina" target="_blank" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
                    <a href="https://linkedin.com/in/..." target="_blank" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
                    <a href="mailto:anjanayraina326@gmail.com" style={{ color: 'var(--text-secondary)' }}>Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
