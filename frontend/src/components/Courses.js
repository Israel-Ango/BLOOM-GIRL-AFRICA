import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const styles = {
        container: {
            backgroundColor: '#fffaf0',
            minHeight: '100vh',
            paddingTop: '50px'
        },
        nav: {
            position: 'relative',
            backgroundColor: 'rgba(255, 250, 240, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '2px solid rgba(139, 69, 19, 0.1)',
            padding: '20px 0',
            marginBottom: '50px'
        },
        navContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        logoContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
        },
        logoImage: {
            width: '70px',
            height: '70px',
            borderRadius: '11px'
        },
        logoText: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#8B4513',
            background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        },
        navLinks: {
            display: 'flex',
            gap: '40px',
            alignItems: 'center'
        },
        navLink: {
            color: '#8B4513',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s ease',
            ':hover': {
                color: '#D2691E'
            }
        },
        buttonContainer: {
            display: 'flex',
            gap: '15px',
            alignItems: 'center'
        },
        buttonPrimary: {
            backgroundColor: '#8B4513',
            color: 'white',
            padding: '12px 30px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease',
            border: '2px solid #8B4513',
            ':hover': {
                backgroundColor: '#D2691E',
                borderColor: '#D2691E',
                transform: 'translateY(-2px)'
            }
        },
        buttonSecondary: {
            backgroundColor: 'transparent',
            color: '#8B4513',
            padding: '12px 30px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease',
            border: '2px solid #8B4513',
            ':hover': {
                backgroundColor: '#8B4513',
                color: 'white',
                transform: 'translateY(-2px)'
            }
        },
        header: {
            textAlign: 'center',
            marginBottom: '50px',
            padding: '0 20px'
        },
        title: {
            fontSize: '3rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #8B4513, #D2691E, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '15px'
        },
        subtitle: {
            fontSize: '1.2rem',
            color: '#4A5568',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6
        },
        coursesGrid: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '35px',
            padding: '0 20px 80px'
        },
        courseCard: {
            backgroundColor: 'white',
            padding: '30px 25px',
            borderRadius: '20px',
            border: '3px solid #FFD700',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
            transition: 'transform .3s ease, box-shadow .3s ease',
            cursor: 'pointer'
        },
        courseIcon: {
            fontSize: '3rem',
            marginBottom: '15px'
        },
        courseTitle: {
            color: '#8B4513',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            marginBottom: '10px'
        },
        courseDescription: {
            color: '#4A5568',
            fontSize: '0.95rem',
            marginBottom: '20px',
            lineHeight: '1.5'
        },
        startButton: {
            display: 'inline-block',
            textDecoration: 'none',
            backgroundColor: '#8B4513',
            color: 'white',
            padding: '12px 28px',
            borderRadius: '25px',
            fontSize: '0.95rem',
            fontWeight: '600',
            border: '2px solid #8B4513',
            transition: 'all 0.3s ease'
        }
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
        { id: 17, title: "Partnerships", icon: "🤝", description: "Strengthen global partnerships" }
    ];

    return (
        <div style={styles.container}>
            {/* Navigation */}
            <nav style={styles.nav}>
                <div style={styles.navContainer}>
                    <div style={styles.logoContainer}>
                        <img 
                            src="/images/Logo.jpg" 
                            alt="Bloom Girl Africa" 
                            style={styles.logoImage}
                        />
                        <div style={styles.logoText}>
                            BloomGirl AFRICA
                        </div>
                    </div>
                    
                    <div style={styles.navLinks}>
                        <Link to="/" style={styles.navLink}>Home</Link>
                        <Link to="/courses" style={styles.navLink}>Courses</Link>
                        <Link to="/about" style={styles.navLink}>About</Link>
                        <Link to="/impact" style={styles.navLink}>Impact</Link>
                        <Link to="/contact" style={styles.navLink}>Contact</Link>
                    </div>

                    <div style={styles.buttonContainer}>
                        <Link 
                            to="/login" 
                            style={styles.buttonSecondary}
                        >
                            Log In
                        </Link>
                        <Link 
                            to="/signup" 
                            style={styles.buttonPrimary}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Courses Content */}
            <div style={styles.header}>
                <h1 style={styles.title}>17 Sustainable Development Goals</h1>
                <p style={styles.subtitle}>
                    Master all 17 UN Sustainable Development Goals through African perspectives. 
                    Each course includes comprehensive modules and interactive quizzes.
                </p>
            </div>

            <div style={styles.coursesGrid}>
                {allSdgCourses.map(course => (
                    <div
                        key={course.id}
                        style={styles.courseCard}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(139,69,19,0.2)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(139,69,19,0.1)';
                        }}
                    >
                        <div style={styles.courseIcon}>{course.icon}</div>
                        <h3 style={styles.courseTitle}>{course.title}</h3>
                        <p style={styles.courseDescription}>{course.description}</p>

                        <Link
                            to={`/course/${course.id}`}
                            style={styles.startButton}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#D2691E';
                                e.target.style.borderColor = '#D2691E';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#8B4513';
                                e.target.style.borderColor = '#8B4513';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Start Learning
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;