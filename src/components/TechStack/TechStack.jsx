import React from 'react';
import Section from '../UI/Section';
import './TechStack.css';

const stack = [
    {
        category: 'Languages',
        skills: ['Python', 'Golang', 'Rust', 'JavaScript', 'TypeScript', 'Solidity', 'SQL']
    },
    {
        category: 'Backend & Scaling',
        skills: ['FastAPI', 'Node.js', 'Kafka', 'Elasticsearch', 'Redis', 'PostgreSQL', 'Microservices']
    },
    {
        category: 'Infrastructure',
        skills: ['Docker', 'Kubernetes', 'CI/CD', 'Azure', 'GCP', 'GHA', 'Terraform']
    },
    {
        category: 'Web3 & AI',
        skills: ['Smart Contracts', 'Defi', 'Foundry', 'Hardhat', 'LLM Agents', 'RAG']
    }
];

const TechStack = () => {
    return (
        <Section id="tech-stack" className="tech-stack-section">
            <div className="container">
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 className="section-title-large">Architectural Toolkit</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto' }}>
                        A comprehensive stack built for scale, reliability, and technical innovation.
                    </p>
                </div>

                <div className="stack-grid-v2 stagger-reveal">
                    {stack.map((group, idx) => (
                        <div key={idx} className="stack-group-v2 reveal">
                            <h3 className="stack-category-v2">{group.category}</h3>
                            <div className="stack-items-v2">
                                {group.skills.map((skill) => (
                                    <div key={skill} className="skill-badge-v2 shimmer">
                                        <span className="skill-dot"></span>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default TechStack;
