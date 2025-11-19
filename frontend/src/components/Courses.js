import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const styles = {
        // ... (keep all your existing styles from previous Courses.js)
        // Make sure all styles are properly defined
    };

    const allSdgCourses = [
        { id: 1, title: "No Poverty", icon: "🏠", description: "End poverty in all its forms everywhere" },
        { id: 2, title: "Zero Hunger", icon: "🍽️", description: "End hunger, achieve food security and improved nutrition" },
        { id: 3, title: "Good Health & Well-being", icon: "❤️", description: "Ensure healthy lives and promote well-being for all" },
        { id: 4, title: "Quality Education", icon: "📚", description: "Ensure inclusive and equitable quality education" },
        { id: 5, title: "Gender Equality", icon: "⚖️", description: "Achieve gender equality and empower all women and girls" },
        { id: 6, title: "Clean Water & Sanitation", icon: "💧", description: "Ensure availability of clean water and sanitation" },
        { id: 7, title: "Affordable Energy", icon: "⚡", description: "Ensure access to affordable, reliable energy" },
        { id: 8, title: "Economic Growth", icon: "💼", description: "Promote sustainable economic growth and employment" },
        { id: 9, title: "Industry & Innovation", icon: "🏭", description: "Build resilient infrastructure and foster innovation" },
        { id: 10, title: "Reduced Inequality", icon: "📊", description: "Reduce inequality within and among countries" },
        { id: 11, title: "Sustainable Cities", icon: "🏙️", description: "Make cities inclusive, safe, resilient and sustainable" },
        { id: 12, title: "Responsible Consumption", icon: "🔄", description: "Ensure sustainable consumption and production" },
        { id: 13, title: "Climate Action", icon: "🌍", description: "Take urgent action to combat climate change" },
        { id: 14, title: "Life Below Water", icon: "🐠", description: "Conserve and sustainably use marine resources" },
        { id: 15, title: "Life on Land", icon: "🌳", description: "Protect and restore terrestrial ecosystems" },
        { id: 16, title: "Peace & Justice", icon: "🕊️", description: "Promote peaceful and inclusive societies" },
        { id: 17, title: "Partnerships", icon: "🤝", description: "Strengthen global partnerships for sustainable development" }
    ];

    return (
        <div style={styles.container}>
            {/* Navigation - keep your existing navigation */}
            {/* Courses Content */}
            <div style={styles.content}>
                <div style={styles.header}>
                    <h1 style={styles.title}>17 Sustainable Development Goals</h1>
                    <p style={styles.subtitle}>
                        Master all 17 UN Sustainable Development Goals through African perspectives. 
                        Each course includes comprehensive modules and interactive quizzes.
                    </p>
                </div>

                <div style={styles.coursesGrid}>
                    {allSdgCourses.map(course => (
                        <div key={course.id} style={styles.courseCard}>
                            <div style={styles.courseIcon}>{course.icon}</div>
                            <h3 style={styles.courseTitle}>{course.title}</h3>
                            <p style={styles.courseDescription}>{course.description}</p>
                            
                            <Link 
                                to={`/course/${course.id}`}
                                style={styles.startButton}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = '#D2691E';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = '#8B4513';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                Start Learning
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;