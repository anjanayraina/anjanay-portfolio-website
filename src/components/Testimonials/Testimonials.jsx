import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        quote: "Anjanay done an amazing job on the front/backend of our protocol, hardworking fully committed developer highly recommended and will surely hire again for future work",
        author: "John Egbonwon",
        role: "CEO of Mon Finance AI",
        image: "/client_avatar_1_1767874917832.png",
        rating: 5
    },
    {
        quote: "Extremely understanding, Understood what we needed and delivered exactly what we were looking for!",
        author: "Tarun Dhakad",
        role: "CEO of Radianoff",
        image: "/client_avatar_male_new_1767877648113.png",
        rating: 5
    },
    {
        quote: "Amazing work Anjanay. Anjanay delived the results with flying colors!",
        author: "Dominik Sosnowski",
        role: "CTO of WyvernX",
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
