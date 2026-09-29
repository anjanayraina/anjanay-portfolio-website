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
                title="Anjanay Raina | Senior Software Engineer & Security Researcher"
                description="Backend & Security Engineer building high-performance, fault-tolerant distributed systems, microservices, and Web3 protocols. Audited global protocols and resolved 30+ critical vulnerabilities."
            />
            {/* Centered Bio & Gallery */}
            <Hero />

            {/* Technical Authority Section */}
            <section className="container section reveal">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title-large">Technical Authority</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        I architect high-performance backends, scalable distributed systems, and audited protocols.
                    </p>
                </div>

                <div className="stagger-reveal reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: 'Backend & Distributed Systems', desc: 'High-performance microservices in Python (asyncio) and Go with non-blocking event-driven architectures, 10x latency reductions, and fault-tolerant recovery.' },
                        { title: 'Security & Protocol Auditing', desc: 'Smart contract security reviews (Solidity/Rust), formal verification (Foundry/Slither), mathematical invariant testing, and assembly gas optimizations.' },
                        { title: 'AI Engineering & High-Throughput APIs', desc: 'Autonomous LLM agents, real-time trading engines processing 50+ events/sec, concurrent aiohttp ingestion pipelines, and automated CI/CD.' }
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

            {/* Final Call to Action */}

            <section className="container section reveal" style={{ paddingBottom: '10rem', textAlign: 'center' }}>
                <h2 className="section-title-large" style={{ marginBottom: '1.5rem' }}>Interested in Collaborating?</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.125rem' }}>
                    Always open to discussing complex distributed architectures, systems engineering, and technical challenges.
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
