import React from 'react';
import Section from '../UI/Section';
import './TechStack.css';

const stack = [
    {
        category: 'Programming Languages',
        skills: ['Python', 'Golang', 'Rust', 'Java', 'C++', 'JavaScript', 'TypeScript', 'Solidity']
    },
    {
        category: 'Frameworks & Libraries',
        skills: ['FastAPI', 'Flask', 'Spring Boot', 'React', 'Next.js', 'Node.js', 'Foundry', 'Anchor']
    },
    {
        category: 'Databases & System Design',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Elasticsearch', 'System Design']
    },
    {
        category: 'Infrastructure & Cloud',
        skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Azure', 'GCP', 'AWS']
    },
    {
        category: 'Distributed Systems & Web3',
        skills: ['Distributed Ledger', 'P2P Protocols', 'ERC-4626', 'EIP-712', 'Smart Contracts', 'Security Auditing']
    },
    {
        category: 'AI & Data Engineering',
        skills: ['LLMs', 'OpenAI API', 'LangChain', 'Data Pipelines', 'PyTorch', 'Spark', 'Pandas']
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

                <div className="stack-grid-v2 reveal stagger-reveal">
                    {stack.map((group, idx) => (
                        <div key={idx} className="stack-group-v2">
                            <h3 className="stack-category-v2">{group.category}</h3>
                            <div className="stack-items-v2">
                                {group.skills.map((skill) => (
                                    <div key={skill} className="skill-badge-v2 shimmer">
                                        <div className="skill-logo-box">
                                            {/* Branded Icon Mapping */}
                                            {skill === 'Solidity' && <span style={{ color: '#627EEA' }}>◆</span>}
                                            {skill === 'Python' && <span style={{ color: '#3776AB' }}>🐍</span>}
                                            {skill === 'Rust' && <span style={{ color: '#DEA584' }}>⚙️</span>}
                                            {skill === 'Golang' && <span style={{ color: '#00ADD8' }}>Go</span>}
                                            {skill === 'Java' && <span style={{ color: '#ED8B00' }}>☕</span>}
                                            {skill === 'C++' && <span style={{ color: '#00599C' }}>++</span>}

                                            {skill === 'FastAPI' && <span style={{ color: '#05998B' }}>⚡</span>}
                                            {skill === 'React' && <span style={{ color: '#61DAFB' }}>⚛️</span>}
                                            {skill === 'Next.js' && <span style={{ color: '#ffffff' }}>N</span>}
                                            {skill === 'Foundry' && <span style={{ color: '#D33833' }}>⚒️</span>}

                                            {skill === 'MongoDB' && <span style={{ color: '#47A248' }}>🍃</span>}
                                            {skill === 'PostgreSQL' && <span style={{ color: '#336791' }}>🐘</span>}
                                            {skill === 'Redis' && <span style={{ color: '#D82C20' }}>🔴</span>}

                                            {skill.startsWith('ERC') && <span style={{ color: '#a855f7' }}>📜</span>}
                                            {skill.startsWith('EIP') && <span style={{ color: '#6366f1' }}>💎</span>}

                                            {skill === 'Docker' && <span style={{ color: '#2496ED' }}>🐳</span>}
                                            {skill === 'Kubernetes' && <span style={{ color: '#326CE5' }}>☸️</span>}
                                            {skill === 'Slither' && <span style={{ color: '#4CAF50' }}>🐍</span>}

                                            {skill === 'LLMs' && <span style={{ color: '#a855f7' }}>✨</span>}
                                            {skill === 'OpenAI API' && <span style={{ color: '#10A37F' }}>🤖</span>}
                                            {skill === 'LangChain' && <span>🦜</span>}
                                            {skill === 'Hugging Face' && <span>🤗</span>}
                                            {skill === 'PyTorch' && <span style={{ color: '#EE4C2C' }}>🔥</span>}
                                            {skill === 'TensorFlow' && <span style={{ color: '#FF6F00' }}>🧠</span>}
                                            {skill === 'Pandas' && <span>🐼</span>}
                                            {skill === 'NumPy' && <span style={{ color: '#4DABCF' }}>🔢</span>}

                                            {skill === 'AWS' && <span style={{ color: '#FF9900' }}>☁️</span>}
                                            {skill === 'Node.js' && <span style={{ color: '#339933' }}>🟢</span>}
                                            {skill === 'System Design' && <span style={{ color: '#00bcd4' }}>🏛️</span>}
                                            {skill === 'Spark' && <span style={{ color: '#E25A1C' }}>✨</span>}
                                            {skill === 'Data Pipelines' && <span style={{ color: '#4CAF50' }}>🛤️</span>}
                                            {skill === 'Distributed Ledger' && <span style={{ color: '#6366f1' }}>🔗</span>}
                                            {skill === 'Security Auditing' && <span style={{ color: '#f44336' }}>🔍</span>}

                                            {/* Default Icon */}
                                            {!['Solidity', 'Python', 'Rust', 'Golang', 'Java', 'C++', 'FastAPI', 'React', 'Next.js', 'Foundry', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Slither', 'LLMs', 'OpenAI API', 'LangChain', 'Hugging Face', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'AWS', 'Node.js', 'System Design', 'Spark', 'Data Pipelines', 'Distributed Ledger', 'Security Auditing'].some(s => skill === s || skill.startsWith('ERC') || skill.startsWith('EIP')) &&
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
