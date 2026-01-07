import React from 'react';
import Section from '../UI/Section';
import './TechStack.css';

const technologies = [
    'Python', 'FastAPI', 'Solidity', 'Go', 'React', 'Docker', 'Kubernetes', 'PostgreSQL', 'Rust', 'Kafka', 'GCP', 'Azure'
];

const TechStack = () => {
    return (
        <Section id="tech-stack" className="tech-stack-section">
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Technical Arsenal</h2>
                <div className="tech-grid">
                    {technologies.map((tech) => (
                        <div key={tech} className="tech-item-sleek animate-fade-in">
                            <span className="tech-icon-mini"></span>
                            <span className="tech-name">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default TechStack;
