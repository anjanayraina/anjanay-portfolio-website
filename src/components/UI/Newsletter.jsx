import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
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
                        <span className="check-icon">✓</span> Thanks for subscribing!
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
                        />
                        <button type="submit" className="btn-primary">Join Now</button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Newsletter;
