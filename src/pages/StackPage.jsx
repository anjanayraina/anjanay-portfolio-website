import React from 'react';
import SEO from '../components/SEO/SEO';

const stack = [
    { category: 'Programming Languages', items: ['Python', 'Golang', 'SQL', 'TypeScript', 'JavaScript', 'Solidity', 'Rust', 'Java'] },
    { category: 'Frameworks & APIs', items: ['FastAPI', 'React', 'Vite', 'REST APIs', 'GraphQL', 'WebSockets', 'gRPC', 'Pytest', 'Pydantic', 'Node.js'] },
    { category: 'AI Tools & Agents', items: ['OpenAI API', 'LangChain', 'Gemini', 'RAG', 'Vector Embeddings', 'FastMCP', 'Ollama', 'Claude Code', 'Cursor'] },
    { category: 'Databases & Cloud', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Elasticsearch', 'AWS', 'GCP', 'Azure', 'Git'] },
    { category: 'DevOps & Architecture', items: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Microservices', 'Linux'] },
    { category: 'Core Competencies', items: ['System Architecture', 'Distributed Systems', 'Security Auditing', 'Agile Methodologies', 'Performance Tuning', 'Foundry', 'Slither'] }
];

const StackPage = () => {
    return (
        <div className="stack-page container section animate-slide-up">
            <SEO
                title="Tech Stack & Skills"
                description="Anjanay Raina's technical toolkit: Python, Rust, Solidity, React, and cloud infrastructure for building scalable systems."
                url="/stack"
            />
            <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Tech Stack</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem' }}>
                The tools and technologies I use to build scalable, high-performance systems.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {stack.map((group, idx) => (
                    <div key={idx} className="card grid-bg">
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--accent-blue)' }}>{group.category}</h3>
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            {group.items.map(item => (
                                <span key={item} className="badge" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StackPage;
