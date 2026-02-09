import React from 'react';
import Hero from '../components/Hero/Hero';
import BentoGrid from '../components/BentoGrid/BentoGrid';
import Newsletter from '../components/UI/Newsletter';
import Testimonials from '../components/Testimonials/Testimonials';
import SEO from '../components/SEO/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';



const Home = () => {
    const revealRef = useScrollReveal();

    return (
        <div ref={revealRef} className="home-page animate-fade-in">
            <SEO
                title="Anjanay Raina | Full Stack Developer & Security Researcher"
                description="Anjanay Raina is a Full Stack Developer and Security Researcher helping startups architect high-performance backends and decentralized protocols."
            />
            {/* Centered Bio & Gallery */}
            <Hero />

            {/* Home page now focuses on Proof of Work and Freelancer CTA */}
            <section className="container section reveal">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title-large">Technical Authority</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        I architect high-performance backends and scalable distributed systems for modern enterprises.
                    </p>
                </div>

                <div className="stagger-reveal reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: 'Backend Systems', desc: 'Highly scalable microservices in Python, Go, and Node.js with fault-tolerant recovery and system optimization.' },
                        { title: 'Full Stack Engineering', desc: 'End-to-end development of high-performance web applications with seamless frontend-backend integration.' },
                        { title: 'AI & Data Pipelines', desc: 'Deploying LLM agents, automated data processing, and intelligent decision systems at scale.' }
                    ].map((service, i) => (
                        <div key={i} className="card" style={{ padding: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: '1.6' }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <BentoGrid />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Newsletter Subscription */}
            <Newsletter />

            {/* Final Call to Action - Focused for Freelancer */}

            <section className="container section reveal" style={{ paddingBottom: '10rem', textAlign: 'center' }}>
                <h2 className="section-title-large" style={{ marginBottom: '1.5rem' }}>Need a Technical Partner?</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.125rem' }}>
                    I'm currently available for project-based freelance work.
                    If you have a challenging technical problem, let's talk.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="mailto:anjanayraina326@gmail.com" className="btn-primary">Get in Touch</a>
                    <a href="/contact" className="btn-secondary">View Socials</a>
                </div>
            </section>
        </div>
    );
};

export default Home;
