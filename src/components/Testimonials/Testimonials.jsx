import React, { useRef, useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
    {
        quote: "Anjanay went above and beyond by stepping in during an unexpected resource crunch to support the critical CB mandates delivery. Despite challenging circumstances, he ensured seamless and timely delivery with outstanding quality, exemplifying true ownership, resilience, and a strong sense of responsibility.",
        author: "Swati Sharma",
        role: "Director",
        company: "NatWest Group",
        tag: "We Raise The Bar Award",
        initials: "SS",
        icon: "🏦",
        rating: 5
    },
    {
        quote: "Whatever work is given to him his approach was to automate that work by writing scripts. He played a major role when service code was re-written, delivering in a speedy manner while maintaining code quality. During critical times he re-written multiple modules (NND, Negative Ageing, ADR) with code-level sanitation, calculation bug fixes, and proper unit testing. He is one of the best skilled developers on this team.",
        author: "Dhruv Upadhyaya",
        role: "Associate Vice President (DigiOps & ID-Recs)",
        company: "NatWest Group",
        tag: "Recognised for being Robust",
        initials: "DU",
        icon: "🏦",
        rating: 5
    },
    {
        quote: "Anjanay did an amazing job on the frontend and backend of our protocol, hardworking fully committed engineer highly recommended and will surely collaborate with again for future work.",
        author: "John Egbonwon",
        role: "CEO",
        company: "Mor Finance AI",
        tag: "Founder Endorsement",
        image: "/client_avatar_1_1767874917832.png",
        initials: "JE",
        icon: "🤖",
        rating: 5
    },
    {
        quote: "Amazing work Anjanay. Delivered high quality architectural results and scalable protocols with flying colors!",
        author: "Dominik Sosnowski",
        role: "CTO",
        company: "WyvernX",
        tag: "Executive Recommendation",
        image: "/client_avatar_3_1767874969329.png",
        initials: "DS",
        icon: "⚡",
        rating: 5
    },
    {
        quote: "Extremely understanding, understood what we needed and delivered scalable, robust engineering results!",
        author: "Tarun Dhakad",
        role: "CEO",
        company: "Radianoff",
        tag: "Engineering Recommendation",
        image: "/client_avatar_male_new_1767877648113.png",
        initials: "TD",
        icon: "🎯",
        rating: 5
    }
];

const Testimonials = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollStatus = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

        // Estimate active card
        const card = sliderRef.current.querySelector('.testimonial-slide-card');
        if (card) {
            const cardWidth = card.offsetWidth + 32; // card width + gap
            const index = Math.round(scrollLeft / cardWidth);
            setActiveIndex(Math.min(Math.max(index, 0), testimonials.length - 1));
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        slider.addEventListener('scroll', updateScrollStatus, { passive: true });
        window.addEventListener('resize', updateScrollStatus);
        updateScrollStatus();

        return () => {
            slider.removeEventListener('scroll', updateScrollStatus);
            window.removeEventListener('resize', updateScrollStatus);
        };
    }, []);

    const scrollToDirection = (direction) => {
        if (!sliderRef.current) return;
        const card = sliderRef.current.querySelector('.testimonial-slide-card');
        const scrollAmount = card ? card.offsetWidth + 32 : 420;
        sliderRef.current.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    };

    const scrollToIndex = (index) => {
        if (!sliderRef.current) return;
        const card = sliderRef.current.querySelector('.testimonial-slide-card');
        const scrollAmount = card ? card.offsetWidth + 32 : 420;
        sliderRef.current.scrollTo({
            left: index * scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <section className="testimonials-section container reveal">
            <div className="testimonials-header-row">
                <div>
                    <h2 className="section-title-large">Leadership <span className="text-gradient">Endorsements</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', marginTop: '0.5rem' }}>
                        What engineering leaders, directors, and founders say about my ownership, architecture, and impact.
                    </p>
                </div>

                {/* Slider Controls */}
                <div className="testimonial-controls">
                    <button
                        className={`slider-btn ${!canScrollLeft ? 'disabled' : ''}`}
                        onClick={() => scrollToDirection(-1)}
                        aria-label="Previous Testimonial"
                        disabled={!canScrollLeft}
                    >
                        ←
                    </button>
                    <button
                        className={`slider-btn ${!canScrollRight ? 'disabled' : ''}`}
                        onClick={() => scrollToDirection(1)}
                        aria-label="Next Testimonial"
                        disabled={!canScrollRight}
                    >
                        →
                    </button>
                </div>
            </div>

            {/* Horizontal Slide Track */}
            <div className="testimonials-slider-track custom-scrollbar" ref={sliderRef}>
                {testimonials.map((t, i) => (
                    <div key={i} className="testimonial-slide-card card glass glow-hover">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <div className="testimonial-rating">
                                {[...Array(t.rating)].map((_, idx) => (
                                    <span key={idx}>★</span>
                                ))}
                            </div>
                            {t.tag && (
                                <span className="testimonial-tag-badge">
                                    {t.icon && <span style={{ marginRight: '4px' }}>{t.icon}</span>}
                                    {t.tag}
                                </span>
                            )}
                        </div>

                        <p className="testimonial-quote">{t.quote}</p>

                        <div className="testimonial-author">
                            {t.image ? (
                                <img src={t.image} alt={t.author} className="author-image" />
                            ) : (
                                <div className="author-avatar-initials">
                                    {t.initials}
                                </div>
                            )}
                            <div className="author-info">
                                <h4>{t.author}</h4>
                                <p>{t.role} • <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>{t.company}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Dots / Progress Indicator */}
            <div className="testimonials-pagination">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        className={`pagination-dot ${activeIndex === idx ? 'active' : ''}`}
                        onClick={() => scrollToIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
