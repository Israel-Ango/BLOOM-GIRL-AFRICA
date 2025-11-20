import React from 'react';
import { Link } from 'react-router-dom';

const Impact = () => {
    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #fefaf0 0%, #fff5e6 100%)',
            paddingTop: '80px'
        },
        nav: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            padding: '0 40px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            height: '80px'
        },
        navContainer: {
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%'
        },
        logoContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
        },
        logoImage: {
            height: '60px',
            width: '60px',
            borderRadius: '9px'
        },
        logoText: {
            fontSize: '20px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        navLinks: {
            display: 'flex',
            alignItems: 'center',
            gap: '40px'
        },
        navLink: {
            color: '#2D3748',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '15px',
            transition: 'all 0.3s ease'
        },
        activeNavLink: {
            color: '#8B4513',
            fontWeight: '600'
        },
        buttonContainer: {
            display: 'flex',
            gap: '15px',
            alignItems: 'center'
        },
        buttonPrimary: {
            backgroundColor: '#8B4513',
            color: 'white',
            padding: '10px 25px',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '14px',
            transition: 'all 0.3s ease'
        },
        content: {
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '80px 40px'
        },
        header: {
            textAlign: 'center',
            marginBottom: '60px'
        },
        title: {
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#8B4513',
            lineHeight: '1.1'
        },
        subtitle: {
            fontSize: '1.2rem',
            color: '#718096',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
        },
        statsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
        },
        statCard: {
            backgroundColor: 'white',
            padding: '40px 30px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
            textAlign: 'center',
            border: '2px solid #FFD700'
        },
        statNumber: {
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '10px',
            background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        statLabel: {
            fontSize: '1.1rem',
            color: '#718096',
            fontWeight: '500'
        },
        impactStories: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
        },
        storyCard: {
            backgroundColor: 'white',
            padding: '40px 30px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
            border: '2px solid #FFD700'
        },
        storyHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '20px'
        },
        storyAvatar: {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#8B4513',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            color: 'white'
        },
        storyInfo: {
            flex: '1'
        },
        storyName: {
            fontSize: '1.2rem',
            fontWeight: '600',
            color: '#8B4513',
            marginBottom: '5px'
        },
        storyLocation: {
            fontSize: '0.9rem',
            color: '#D2691E'
        },
        storyText: {
            color: '#718096',
            lineHeight: '1.6',
            fontStyle: 'italic'
        }
    };

    const impactStats = [
        { number: '25,000+', label: 'Girls Educated' },
        { number: '54', label: 'African Countries' },
        { number: '92%', label: 'Completion Rate' },
        { number: '17', label: 'SDG Modules' }
    ];

    const successStories = [
        {
            name: 'Fatima Diallo',
            location: 'Senegal',
            story: 'After completing the Gender Equality module, I started a women\'s cooperative in my village. We now have 50 members running sustainable businesses.',
            avatar: '👑'
        },
        {
            name: 'Chiamaka Nwosu',
            location: 'Nigeria',
            story: 'The Clean Water module inspired me to implement rainwater harvesting in my community. We now provide clean water to 200 families.',
            avatar: '💧'
        },
        {
            name: 'Amina Juma',
            location: 'Kenya',
            story: 'Thanks to Bloom Girl Africa, I received a scholarship to study environmental science. I\'m now working on climate solutions for East Africa.',
            avatar: '🌱'
        }
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
                        <Link to="/impact" style={{...styles.navLink, ...styles.activeNavLink}}>Impact</Link>
                        <Link to="/contact" style={styles.navLink}>Contact</Link>
                    </div>

                    <div style={styles.buttonContainer}>
                        <Link to="/signup" style={styles.buttonPrimary}>
                            Join Movement
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Impact Content */}
            <div style={styles.content}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Our Impact Across Africa</h1>
                    <p style={styles.subtitle}>
                        Discover how Bloom Girl Africa is transforming lives and communities 
                        through education and empowerment across the continent.
                    </p>
                </div>

                {/* Stats Grid */}
                <div style={styles.statsGrid}>
                    {impactStats.map((stat, index) => (
                        <div key={index} style={styles.statCard}>
                            <div style={styles.statNumber}>{stat.number}</div>
                            <div style={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Success Stories */}
                <h2 style={{...styles.title, fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px'}}>
                    Success Stories
                </h2>
                <div style={styles.impactStories}>
                    {successStories.map((story, index) => (
                        <div key={index} style={styles.storyCard}>
                            <div style={styles.storyHeader}>
                                <div style={styles.storyAvatar}>{story.avatar}</div>
                                <div style={styles.storyInfo}>
                                    <div style={styles.storyName}>{story.name}</div>
                                    <div style={styles.storyLocation}>{story.location}</div>
                                </div>
                            </div>
                            <p style={styles.storyText}>"{story.story}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Impact;