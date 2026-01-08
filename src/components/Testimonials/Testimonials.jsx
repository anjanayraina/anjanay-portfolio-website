import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        quote: "Anjanay's audit identified critical vulnerabilities that three other firms missed. His depth of knowledge in DeFi security is unparalleled.",
        author: "Marcus Chen",
        role: "CTO at Nexus Finance",
        image: "/client_avatar_1_1767874917832.png",
        rating: 5
    },
    {
        quote: "Working with Anjanay on our backend architecture was a game-changer. He didn't just write code; he built a system that scales effortlessly.",
        author: "Sarah Jenkins",
        role: "Founder of Ethos AI",
        image: "/client_avatar_2_1767874937189.png",
        rating: 5
    },
    {
        quote: "The cleanest Solidity code I've ever seen. Anjanay's attention to detail and security-first mindset saved us from potential multi-million dollar exploits.",
        author: "David Kovacs",
        role: "Lead Dev at Prism Protocol",
        image: "/client_avatar_3_1767874969329.png",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section container reveal">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title-large">Client <span className="text-gradient">Testimonials</span></h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    Don't just take my word for it. Here's what industry leaders say about working with me.
                </p>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((t, i) => (
                    <div key={i} className="testimonial-card glass glow-hover reveal">
                        <div className="testimonial-rating">
                            {[...Array(t.rating)].map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
                        <p className="testimonial-quote">{t.quote}</p>
                        <div className="testimonial-author">
                            <img src={t.image} alt={t.author} className="author-image" />
                            <div className="author-info">
                                <h4>{t.author}</h4>
                                <p>{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
