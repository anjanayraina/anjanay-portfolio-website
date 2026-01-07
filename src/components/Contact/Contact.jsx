import React from 'react';
import Section from '../UI/Section';
import './Contact.css';

const Contact = () => {
    return (
        <Section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Ready to scale?</h2>
                <p className="contact-text">
                    Let's discuss how we can build secure, high-performance systems for your next big idea.
                </p>
                <a href="mailto:anjanayraina326@gmail.com" className="cta-button">
                    Book a Technical Discovery Call
                </a>
            </div>
        </Section>
    );
};

export default Contact;
