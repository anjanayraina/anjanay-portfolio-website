import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        quote: "Anjanay did an amazing job on the frontend and backend of our protocol, hardworking fully committed engineer highly recommended and will surely collaborate with again for future work.",
        author: "John Egbonwon",
        role: "CEO of Mor Finance AI",
        image: "/client_avatar_1_1767874917832.png",
        rating: 5
    },
    {
        quote: "Extremely understanding, understood what we needed and delivered scalable, robust engineering results!",
        author: "Tarun Dhakad",
        role: "CEO of Radianoff",
        image: "/client_avatar_male_new_1767877648113.png",
        rating: 5
    },
    {
        quote: "Amazing work Anjanay. Delivered high quality architectural results with flying colors!",
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
                <h2 className="section-title-large">Leadership <span className="text-gradient">Endorsements</span></h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    What technical founders, leaders, and collaborators say about working with me.
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
