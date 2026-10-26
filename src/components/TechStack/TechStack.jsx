import React from 'react';
import Section from '../UI/Section';
import './TechStack.css';

const stack = [
    {
        category: 'Programming Languages',
        skills: ['Python', 'Golang', 'SQL', 'TypeScript', 'JavaScript', 'Solidity', 'Rust', 'Java']
    },
    {
        category: 'Frameworks & APIs',
        skills: ['FastAPI', 'React', 'Vite', 'REST APIs', 'GraphQL', 'WebSockets', 'gRPC', 'Pytest', 'Pydantic', 'Node.js']
    },
    {
        category: 'AI Tools & Agents',
        skills: ['OpenAI API', 'LangChain', 'Gemini', 'RAG', 'Vector Embeddings', 'FastMCP', 'Ollama', 'Claude Code', 'Cursor']
    },
    {
        category: 'Databases & Cloud',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Elasticsearch', 'AWS', 'GCP', 'Azure', 'Git']
    },
    {
        category: 'DevOps & Architecture',
        skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Microservices', 'Linux']
    },
    {
        category: 'Core Competencies',
        skills: ['System Architecture', 'Distributed Systems', 'Security Auditing', 'Agile Methodologies', 'Performance Tuning', 'Foundry', 'Slither']
    }
];


const TechStack = () => {
    return (
        <Section id="tech-stack" className="tech-stack-section">
            <div className="container">
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 className="section-title-large">Architectural Toolkit</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto' }}>
                        Expertise in high-performance backends, AI agents, distributed systems, and security auditing.
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
                                            {skill === 'SQL' && <span style={{ color: '#00758F' }}>🗄️</span>}
                                            {skill === 'TypeScript' && <span style={{ color: '#3178C6' }}>TS</span>}
                                            {skill === 'JavaScript' && <span style={{ color: '#F7DF1E' }}>JS</span>}

                                            {skill === 'FastAPI' && <span style={{ color: '#05998B' }}>⚡</span>}
                                            {skill === 'FastMCP' && <span style={{ color: '#10B981' }}>🔌</span>}
                                            {skill === 'REST APIs' && <span style={{ color: '#6366F1' }}>🌐</span>}
                                            {skill === 'GraphQL' && <span style={{ color: '#E535AB' }}>◈</span>}
                                            {skill === 'Pytest' && <span style={{ color: '#0A9EDC' }}>🧪</span>}
                                            {skill === 'React' && <span style={{ color: '#61DAFB' }}>⚛️</span>}
                                            {skill === 'Node.js' && <span style={{ color: '#339933' }}>🟢</span>}
                                            {skill === 'Vite' && <span style={{ color: '#646CFF' }}>⚡</span>}
                                            {skill === 'WebSockets' && <span style={{ color: '#F59E0B' }}>🔁</span>}
                                            {skill === 'gRPC' && <span style={{ color: '#244C5A' }}>📡</span>}
                                            {skill === 'Pydantic' && <span style={{ color: '#E92063' }}>✅</span>}

                                            {skill === 'Gemini' && <span style={{ color: '#4E88FF' }}>✨</span>}
                                            {skill === 'Claude Code' && <span style={{ color: '#D97706' }}>🟧</span>}
                                            {skill === 'OpenAI API' && <span style={{ color: '#10A37F' }}>🤖</span>}
                                            {skill === 'LangChain' && <span>🦜</span>}
                                            {skill === 'Ollama' && <span>🦙</span>}
                                            {skill === 'Cursor' && <span style={{ color: '#8B5CF6' }}>⚡</span>}
                                            {skill === 'RAG' && <span style={{ color: '#8B5CF6' }}>📚</span>}
                                            {skill === 'Vector Embeddings' && <span style={{ color: '#6366F1' }}>🧭</span>}

                                            {skill === 'PostgreSQL' && <span style={{ color: '#336791' }}>🐘</span>}
                                            {skill === 'MongoDB' && <span style={{ color: '#47A248' }}>🍃</span>}
                                            {skill === 'Redis' && <span style={{ color: '#DC382D' }}>🟥</span>}
                                            {skill === 'AWS' && <span style={{ color: '#FF9900' }}>☁️</span>}
                                            {skill === 'Elasticsearch' && <span style={{ color: '#005571' }}>🔍</span>}
                                            {skill === 'Kafka' && <span style={{ color: '#231F20' }}>📨</span>}
                                            {skill === 'GCP' && <span style={{ color: '#4285F4' }}>☁️</span>}
                                            {skill === 'Azure' && <span style={{ color: '#0089D6' }}>🔷</span>}
                                            {skill === 'NoSQL' && <span style={{ color: '#10B981' }}>💾</span>}
                                            {skill === 'Git' && <span style={{ color: '#F05032' }}>🌱</span>}

                                            {skill === 'Docker' && <span style={{ color: '#2496ED' }}>🐳</span>}
                                            {skill === 'Kubernetes' && <span style={{ color: '#326CE5' }}>☸️</span>}
                                            {skill === 'CI/CD' && <span style={{ color: '#22C55E' }}>🔄</span>}
                                            {skill === 'Microservices' && <span style={{ color: '#EC4899' }}>🧩</span>}
                                            {skill === 'Jenkins' && <span style={{ color: '#D24939' }}>👨‍✈️</span>}
                                            {skill === 'GitHub Actions' && <span style={{ color: '#2088FF' }}>🐙</span>}
                                            {skill === 'Linux' && <span style={{ color: '#FCC624' }}>🐧</span>}
                                            {skill === 'Containerization' && <span style={{ color: '#3B82F6' }}>📦</span>}

                                            {skill === 'System Architecture' && <span style={{ color: '#00bcd4' }}>🏛️</span>}
                                            {skill === 'Performance Tuning' && <span style={{ color: '#F59E0B' }}>🚀</span>}
                                            {skill === 'Distributed Systems' && <span style={{ color: '#6366f1' }}>🔗</span>}
                                            {skill === 'Security Auditing' && <span style={{ color: '#f44336' }}>🛡️</span>}
                                            {skill === 'Agile Methodologies' && <span style={{ color: '#22C55E' }}>🔄</span>}
                                            {skill === 'Foundry' && <span style={{ color: '#D33833' }}>⚒️</span>}
                                            {skill === 'Slither' && <span style={{ color: '#4CAF50' }}>🐍</span>}

                                            {/* Default Icon */}
                                            {!['Solidity', 'Python', 'Rust', 'Golang', 'Java', 'SQL', 'TypeScript', 'JavaScript', 'FastAPI', 'FastMCP', 'REST APIs', 'GraphQL', 'Pytest', 'React', 'Node.js', 'Gemini', 'Claude Code', 'OpenAI API', 'LangChain', 'Ollama', 'Cursor', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'Kafka', 'GCP', 'Azure', 'NoSQL', 'Git', 'Docker', 'Kubernetes', 'CI/CD', 'Microservices', 'Jenkins', 'Containerization', 'System Architecture', 'Performance Tuning', 'Distributed Systems', 'Code Auditing', 'Foundry', 'Slither', 'Vite', 'WebSockets', 'gRPC', 'Pydantic', 'RAG', 'Vector Embeddings', 'Redis', 'AWS', 'GitHub Actions', 'Linux', 'Security Auditing', 'Agile Methodologies'].includes(skill) &&
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
