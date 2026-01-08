import React from 'react';
import Section from '../UI/Section';
import './TechStack.css';

const stack = [
    {
        category: 'Backend & Scaling',
        skills: ['Python', 'Golang', 'FastAPI', 'Node.js', 'Redis', 'PostgreSQL', 'Microservices', 'Distributed Systems']
    },
    {
        category: 'Infrastructure',
        skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Terraform', 'Azure', 'GCP']
    },
    {
        category: 'Blockchain & Security',
        skills: ['Solidity', 'Yul', 'Rust', 'Foundry', 'Hardhat', 'Slither', 'Echidna', 'Anchor']
    },
    {
        category: 'Web3 Standards',
        skills: ['ERC-20', 'ERC-721', 'ERC-4626', 'Chainlink', 'OpenZeppelin', 'Hyperledger Fabric']
    }
];


const TechStack = () => {
    return (
        <Section id="tech-stack" className="tech-stack-section">
            <div className="container">
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 className="section-title-large">Architectural Toolkit</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto' }}>
                        Expertise in building scalable backend systems, robust infrastructure, and secure decentralized protocols.
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
                                            {/* Branded Icon Mapping */}
                                            {skill === 'Solidity' && <span style={{ color: '#627EEA' }}>◆</span>}
                                            {skill === 'Yul' && <span style={{ color: '#FFD700' }}>⚡</span>}
                                            {skill === 'Rust' && <span style={{ color: '#DEA584' }}>⚙️</span>}
                                            {skill === 'Foundry' && <span style={{ color: '#D33833' }}>⚒️</span>}
                                            {skill === 'Slither' && <span style={{ color: '#4CAF50' }}>🐍</span>}
                                            {skill === 'Echidna' && <span style={{ color: '#E91E63' }}>🦄</span>}
                                            {skill === 'Python' && <span style={{ color: '#3776AB' }}>🐍</span>}
                                            {skill === 'FastAPI' && <span style={{ color: '#05998B' }}>⚡</span>}
                                            {skill === 'Docker' && <span style={{ color: '#2496ED' }}>🐳</span>}
                                            {skill === 'Terraform' && <span style={{ color: '#7B42BC' }}>⬢</span>}
                                            {skill === 'PostgreSQL' && <span style={{ color: '#336791' }}>🐘</span>}
                                            {skill === 'Redis' && <span style={{ color: '#D82C20' }}>🔴</span>}
                                            {skill === 'GitHub Actions' && <span style={{ color: '#2088FF' }}>⚙️</span>}
                                            {skill === 'Hyperledger Fabric' && <span style={{ color: '#2F3134' }}>⛓️</span>}
                                            {skill === 'Golang' && <span style={{ color: '#00ADD8' }}>Go</span>}
                                            {skill === 'Node.js' && <span style={{ color: '#339933' }}>⬢</span>}
                                            {/* Default Icon */}
                                            {!['Solidity', 'Yul', 'Rust', 'Foundry', 'Slither', 'Echidna', 'Python', 'FastAPI', 'Docker', 'Terraform', 'PostgreSQL', 'Redis', 'GitHub Actions', 'Hyperledger Fabric', 'Golang', 'Node.js'].includes(skill) &&
                                                <span style={{ color: 'var(--accent-purple)' }}>✧</span>
                                            }
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
