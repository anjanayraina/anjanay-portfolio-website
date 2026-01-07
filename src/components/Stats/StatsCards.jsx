import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

import { PieChart } from 'react-minimal-pie-chart';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './StatsCards.css';

const LeetcodeCard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://leetcode-stats-api.herokuapp.com/anjanayraina")
            .then(res => res.json())
            .then(result => {
                setData(result);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <div className="card glass shimmer">Loading Leetcode stats...</div>;
    if (!data) return null;

    const chartData = [
        { title: 'Easy', value: data.easySolved, color: '#00b8a3' },
        { title: 'Medium', value: data.mediumSolved, color: '#ffc01e' },
        { title: 'Hard', value: data.hardSolved, color: '#ef4743' },
    ];

    return (
        <div className="card glass stats-card leetcode-card glow-hover reveal">
            <div className="stats-header">
                <h3 className="stats-title">Leetcode Profile</h3>
                <span className="stats-total">{data.totalSolved} <small>Solved</small></span>
            </div>

            <div className="stats-content">
                <div className="stats-pie">
                    <PieChart
                        data={chartData}
                        lineWidth={20}
                        paddingAngle={18}
                        rounded
                        animate
                        animationDuration={1000}
                        startAngle={-90}
                    />
                    <div className="pie-label">
                        <span className="label-num">{data.totalSolved}</span>
                        <span className="label-text">Total</span>
                    </div>
                </div>

                <div className="stats-list">
                    {chartData.map(item => (
                        <div key={item.title} className="stats-item">
                            <div className="item-info">
                                <span className="dot" style={{ background: item.color }}></span>
                                <span className="item-title">{item.title}</span>
                            </div>
                            <span className="item-value">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const GithubCard = () => {
    return (
        <div className="card glass stats-card github-card glow-hover reveal">
            <h3 className="stats-title" style={{ marginBottom: '2rem' }}>GitHub Contributions</h3>
            <div className="calendar-wrapper">
                <GitHubCalendar
                    username="anjanayraina"
                    blockSize={12}
                    blockMargin={4}
                    fontSize={12}
                />
            </div>
        </div>
    );
};

const StatsCards = () => {
    const revealRef = useScrollReveal();
    return (
        <section ref={revealRef} className="container section stats-section">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title-large">Continuous Growth</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Metrics of my problem-solving and open-source journey.</p>
            </div>

            <div className="stats-grid">
                <LeetcodeCard />
                <GithubCard />
            </div>
        </section>
    );
};

export default StatsCards;
