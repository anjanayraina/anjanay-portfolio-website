import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
    {
        title: 'JobSleuth',
        subtitle: 'Automated Job Aggregation Platform',
        description: 'Architected and deployed a full-stack platform that processes 5,000+ job postings daily from 10+ real-time sources.',
        tech: ['Python', 'FastAPI', 'Telethon', 'aiohttp', 'React', 'Render'],
        links: { github: 'https://github.com/anjanayraina/JobSleuth', live: 'https://job-sleuth.onrender.com/' }
    },
    {
        title: 'Middle Earth AI',
        subtitle: 'Distributed Strategy Game',
        description: 'Architected a system for a distributed game serving over 500+ players, with a core engine in JavaScript and on-chain programs in Rust.',
        tech: ['Rust', 'Python', 'JavaScript', 'NumPy', 'Solana'],
        links: { github: 'https://github.com/MiddleEarthAI/middle_earth_ai_program', live: 'https://www.middleearth.world/' }
    },
    {
        title: 'Blockchain Architecture',
        subtitle: 'Research Project (DLT Labs)',
        description: 'Developed a architecture using Hyperledger Fabric to reduce mobile theft, achieving a 100x faster resolution time. Published at IEEE ANTS.',
        tech: ['Hyperledger Fabric', 'Blockchain', 'System Design'],
        links: { research: 'https://drive.google.com/file/d/1pMr8Kr7BIbsSd4AuEMiYu_hmfrFP1v07/view?usp=sharing' }
    },
    {
        title: 'ISV Signature Matching',
        subtitle: 'NatWest Group Microservice',
        description: 'Architecting and building a new microservice from scratch, owning the complete lifecycle from design to cloud deployment.',
        tech: ['Python', 'Microservices', 'Cloud', 'System Design'],
        links: {}
    }
];

const Projects = () => {
    const revealRef = useScrollReveal();

    return (
        <div ref={revealRef} className="projects-page container section animate-fade-in">
            <div className="reveal">
                <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>Projects</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '5rem', fontSize: '1.25rem', maxWidth: '600px' }}>
                    A collection of technical solutions across AI, Blockchain, and Backend Engineering.
                </p>
            </div>

            <div style={{ display: 'grid', gap: '3rem' }}>
                {projects.map((project, index) => (
                    <div key={index} className="project-detail card reveal" style={{ textAlign: 'left', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{project.title}</h3>
                                <div style={{ color: 'var(--accent-blue)', fontSize: '0.9375rem', fontWeight: 600 }}>
                                    {project.subtitle}
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {project.links.github && <a href={project.links.github} target="_blank" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>GitHub</a>}
                                {project.links.live && <a href={project.links.live} target="_blank" className="badge" style={{ padding: '0.6rem 1.25rem', cursor: 'pointer' }}>Live Site</a>}
                                {project.links.research && <a href={project.links.research} target="_blank" className="badge" style={{ padding: '0.6rem 1.25rem', cursor: 'pointer' }}>Research</a>}
                            </div>
                        </div>

                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.7', fontSize: '1rem' }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            {project.tech.map(t => (
                                <span key={t} className="badge" style={{ background: 'var(--bg-secondary)', fontWeight: 600 }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
