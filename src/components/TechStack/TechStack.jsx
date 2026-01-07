import React from 'react';
import Section from '../UI/Section';
import './TechStack.css';

const stack = [
    {
        category: 'Blockchain & Security',
        skills: ['Solidity', 'Yul', 'Rust', 'Foundry', 'Hardhat', 'Slither', 'Echidna', 'Anchor']
    },
    {
        category: 'Web3 Standards',
        skills: ['ERC-20', 'ERC-721', 'ERC-4626', 'Chainlink', 'OpenZeppelin', 'Hyperledger Fabric']
    },
    {
        category: 'Backend & Scaling',
        skills: ['Python', 'Golang', 'FastAPI', 'Node.js', 'Redis', 'PostgreSQL', 'Microservices']
    },
    {
        category: 'Infrastructure',
        skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Terraform', 'Azure', 'GCP']
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
                                        <div className="skill-logo-box">
                                            {/* Simple logic for a logo-like icon */}
                                            {skill === 'Python' && '🐍'}
                                            {skill === 'Rust' && '🦀'}
                                            {skill === 'Solidity' && '♢'}
                                            {skill === 'Yul' && '⚡'}
                                            {skill === 'Slither' && '🐍'}
                                            {skill === 'Echidna' && '🦄'}
                                            {skill === 'Anchor' && '⚓'}
                                            {skill === 'Foundry' && '⚒️'}
                                            {skill === 'FastAPI' && '⚡'}
                                            {skill === 'Docker' && '🐳'}
                                            {skill === 'Azure' && '☁️'}
                                            {skill === 'GitHub Actions' && '⚙️'}
                                            {skill === 'Hyperledger Fabric' && '⛓️'}
                                            {skill === 'Redis' && '🔴'}
                                            {!['Python', 'Rust', 'Solidity', 'Yul', 'Slither', 'Echidna', 'Anchor', 'Foundry', 'FastAPI', 'Docker', 'Azure', 'GitHub Actions', 'Hyperledger Fabric', 'Redis'].includes(skill) && '◈'}
                                        </div>

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
