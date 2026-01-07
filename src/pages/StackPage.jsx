import React from 'react';

const stack = [
    { category: 'Languages', items: ['Python', 'Golang', 'Rust', 'Java', 'SQL', 'Solidity', 'JavaScript', 'TypeScript'] },
    { category: 'Frameworks & Libraries', items: ['FastAPI', 'Flask', 'Spring', 'ReactJS', 'Pytest', 'Pandas', 'NumPy'] },
    { category: 'Databases & Cloud', items: ['PostgreSQL', 'MongoDB', 'Elasticsearch', 'Kafka', 'GCP', 'Azure', 'NoSQL'] },
    { category: 'Infrastructure & DevOps', items: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Jenkins'] }
];

const StackPage = () => {
    return (
        <div className="stack-page container section animate-slide-up">
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
