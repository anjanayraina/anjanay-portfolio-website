import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../UI/Section';
import './BentoGrid.css';


const projects = [
    {
        title: 'Mon Finance AI',
        description: 'A modular, AI-powered trading ecosystem. Features an asynchronous microservice architecture for real-time market analysis and automated execution with high-performance FastAPI backend.',
        tech: ['FastAPI', 'Microservices', 'Redis', 'LLMs'],
        imgLabel: 'Mon Finance AI Infrastructure'
    },
    {
        title: 'IDRECS',
        description: 'Mission-critical enterprise data processing engine with a fault-tolerant recovery mechanism ensuring zero state loss and 3x faster concurrent processing.',
        tech: ['Python', 'System Design', 'Multithreading', 'Enterprise'],
        imgLabel: 'IDRECS Architecture'
    },
    {
        title: 'JobSleuth',
        description: 'Distributed data aggregation platform processing thousands of records daily. Engineered with asynchronous pipelines reducing collection time by 90%.',
        tech: ['Python', 'FastAPI', 'AsyncIO', 'React'],
        imgLabel: 'JobSleuth Aggregator'
    }
];

const BentoGrid = () => {
    const navigate = useNavigate();
    return (
        <Section id="work" className="bento-section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title-large">Things I've made trying to put my mark</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    I've worked on tons of little projects over the years, but these are some of the ones that I'm most proud of.
                </p>

                <div className="bento-actions">
                    <button className="btn-primary" onClick={() => navigate('/projects')}>View All Projects</button>
                    <button className="btn-secondary" onClick={() => window.open('https://github.com/anjanayraina', '_blank')}>GitHub</button>
                </div>


                <div className="project-grid-sleek reveal stagger-reveal">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card-sleek">
                            <div className="card-image-preview">
                                <span>{project.imgLabel}</span>
                            </div>
                            <div className="card-body-sleek">
                                <h3 className="card-title-sleek">{project.title}</h3>
                                <p className="card-desc-sleek">{project.description}</p>
                                <div className="card-tech-sleek">
                                    {project.tech.map(t => <span key={t} className="badge">{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default BentoGrid;
