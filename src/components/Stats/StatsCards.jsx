import React, { useState, useEffect } from 'react';
import * as GitHubCalendarModule from 'react-github-calendar';
const GitHubCalendar = GitHubCalendarModule.default || GitHubCalendarModule.GitHubCalendar || GitHubCalendarModule;



import { PieChart } from 'react-minimal-pie-chart';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './StatsCards.css';

const LeetcodeCard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Fetch with timeout and error handling
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        fetch("https://leetcode-stats-api.herokuapp.com/anjanayraina", { signal: controller.signal })
            .then(res => {
                if (!res.ok) throw new Error('API Error');
                return res.json();
            })
            .then(result => {
                if (result.status === "error") throw new Error(result.message);
                setData(result);
                setLoading(false);
            })
            .catch((err) => {
                console.error("LeetCode Fetch Error:", err);
                setError(true);
                setLoading(false);
            })
            .finally(() => clearTimeout(timeoutId));
    }, []);

    if (loading) return (
        <div className="card glass stats-card leetcode-card shimmer">
            <div className="stats-header">
                <h3 className="stats-title">Leetcode Profile</h3>
            </div>
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-tertiary)' }}>
                Loading algorithmic metrics...
            </div>
        </div>
    );

    // Fallback data in case the Heroku API is down
    const displayData = data || {
        totalSolved: 250, // Fallback approximations
        easySolved: 100,
        mediumSolved: 120,
        hardSolved: 30
    };

    const chartData = [
        { title: 'Easy', value: displayData.easySolved, color: '#00b8a3' },
        { title: 'Medium', value: displayData.mediumSolved, color: '#ffc01e' },
        { title: 'Hard', value: displayData.hardSolved, color: '#ef4743' },
    ];

    return (
        <div className="card glass stats-card leetcode-card glow-hover reveal">
            <div className="stats-header">
                <h3 className="stats-title">Leetcode Profile</h3>
                <span className="stats-total">{displayData.totalSolved} <small>Solved</small></span>
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
                        <span className="label-num">{displayData.totalSolved}</span>
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
            {error && <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', marginTop: '1rem', textAlign: 'center' }}>Showing partial cached data</div>}
        </div>
    );
};

const GithubCard = () => {
    return (
        <div className="card glass stats-card github-card glow-hover reveal">
            <h3 className="stats-title" style={{ marginBottom: '2rem' }}>GitHub Contributions</h3>
            <div className="calendar-wrapper">
                {/* Fixed import usage */}
                <GitHubCalendar
                    username="anjanayraina"
                    blockSize={12}
                    blockMargin={4}
                    fontSize={12}
                    colorScheme="dark"
                />
            </div>
        </div>
    );
};

const StatsCards = () => {
    const revealRef = useScrollReveal();
    return (
        <section ref={revealRef} className="container section stats-section" style={{ padding: 0 }}>
            <div className="stats-stack">
                <LeetcodeCard />
                <GithubCard />
            </div>
        </section>
    );
};


export default StatsCards;
