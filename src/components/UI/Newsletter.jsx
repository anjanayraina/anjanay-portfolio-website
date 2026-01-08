import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email) {
            setLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubscribed(true);
            setLoading(false);
            setEmail('');
        }
    };

    return (
        <section className="newsletter-section reveal">
            <div className="container newsletter-container glass">
                <div className="newsletter-content">
                    <h2 className="newsletter-title">Subscribe to my <span className="text-gradient">Newsletter</span></h2>
                    <p className="newsletter-desc">
                        Get the latest updates on Web3 security, system architecture, and tech deep-dives delivered straight to your inbox.
                    </p>
                </div>

                {subscribed ? (
                    <div className="subscribed-msg animate-fade-in">
                        <span className="check-icon">✓</span>
                        <div>
                            <strong>Thanks for subscribing!</strong>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0.25rem 0 0' }}>Check your email to confirm.</p>
                        </div>
                    </div>
                ) : (
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="newsletter-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={loading}
                        />
                        <button type="submit" className="btn-primary" disabled={loading}>
                            {loading ? (
                                <>
                                    <span className="loader-sm"></span> Subscribing...
                                </>
                            ) : 'Join Now'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Newsletter;

