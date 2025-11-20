import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
            maxWidth: '1200px',
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
        missionSection: {
            backgroundColor: 'white',
            padding: '60px 40px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
            marginBottom: '60px',
            textAlign: 'center'
        },
        missionTitle: {
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '30px',
            color: '#8B4513'
        },
        missionText: {
            fontSize: '1.1rem',
            color: '#718096',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto'
        },
        teamGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
        },
        teamCard: {
            backgroundColor: 'white',
            padding: '40px 30px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
            textAlign: 'center',
            border: '2px solid #FFD700'
        },
        teamIcon: {
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto',
            fontSize: '2rem',
            color: 'white',
            background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)'
        },
        teamName: {
            fontSize: '1.4rem',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#8B4513'
        },
        teamRole: {
            fontSize: '1rem',
            color: '#D2691E',
            marginBottom: '15px',
            fontWeight: '500'
        },
        teamDescription: {
            color: '#718096',
            lineHeight: '1.6'
        }
    };

    const teamMembers = [
        {
            name: "Hauwa Usman Garba",
            role: "Executive Director",
            description: "Education advocate with 8+ years experience in humaniterian development and women empowerment.",
            icon: "👑"
        },
        {
            name: "Patience Ango",
            role: "Curriculum Director",
            description: "Expert in self development and experirnced mentor around africa.",
            icon: "📖"
        },
        {
            name: "Aex Ogar",
            role: "Partnership Lead",
            description: "Building strategic alliances with African organizations and international development partners.",
            icon: "🤝"
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
                        <Link to="/about" style={{...styles.navLink, ...styles.activeNavLink}}>About</Link>
                        <Link to="/impact" style={styles.navLink}>Impact</Link>
                        <Link to="/contact" style={styles.navLink}>Contact</Link>
                    </div>

                    <div style={styles.buttonContainer}>
                        <Link to="/signup" style={styles.buttonPrimary}>
                            Join Us
                        </Link>
                    </div>
                </div>
            </nav>

            {/* About Content */}
            <div style={styles.content}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Our Story & Mission</h1>
                    <p style={styles.subtitle}>
                        Learn about the vision, team, and values that drive Bloom Girl Africa's 
                        mission to educate and empower African girls.
                    </p>
                </div>

                {/* Mission Section */}
                <div style={styles.missionSection}>
                    <h2 style={styles.missionTitle}>Our Mission</h2>
                    <p style={styles.missionText}>
                        Bloom Girl Africa was founded on the belief that educating an African girl is the most powerful 
                        investment in our continent's future. We provide comprehensive SDG education that combines global 
                        knowledge with African wisdom, creating a generation of women leaders who are culturally grounded 
                        and globally competent.
                    </p>
                </div>

                {/* Team Section */}
                <h2 style={{...styles.missionTitle, textAlign: 'center', marginBottom: '40px'}}>Our Leadership</h2>
                <div style={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                        <div key={index} style={styles.teamCard}>
                            <div style={styles.teamIcon}>{member.icon}</div>
                            <h3 style={styles.teamName}>{member.name}</h3>
                            <p style={styles.teamRole}>{member.role}</p>
                            <p style={styles.teamDescription}>{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;