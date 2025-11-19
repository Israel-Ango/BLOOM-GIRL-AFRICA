import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

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
            height: '40px',
            width: '40px',
            borderRadius: '8px'
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
        formContainer: {
            backgroundColor: 'white',
            padding: '50px 40px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
            border: '2px solid #FFD700',
            maxWidth: '600px',
            margin: '0 auto'
        },
        formTitle: {
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '30px',
            color: '#8B4513',
            textAlign: 'center'
        },
        formGroup: {
            marginBottom: '25px'
        },
        label: {
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#2D3748'
        },
        input: {
            width: '100%',
            padding: '15px',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '16px',
            transition: 'border-color 0.3s ease'
        },
        textarea: {
            width: '100%',
            padding: '15px',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '16px',
            minHeight: '150px',
            resize: 'vertical',
            transition: 'border-color 0.3s ease'
        },
        submitButton: {
            backgroundColor: '#8B4513',
            color: 'white',
            padding: '15px 40px',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            width: '100%'
        }
    };

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
                        <Link to="/contact" style={{...styles.navLink, ...styles.activeNavLink}}>Contact</Link>
                    </div>

                    <div style={styles.buttonContainer}>
                        <Link to="/signup" style={styles.buttonPrimary}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Contact Content */}
            <div style={styles.content}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Get In Touch</h1>
                    <p style={styles.subtitle}>
                        We'd love to hear from you! Reach out with questions, partnership inquiries, 
                        or to learn more about our programs.
                    </p>
                </div>

                <div style={styles.formContainer}>
                    <h2 style={styles.formTitle}>Send us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                style={styles.textarea}
                                placeholder="Tell us more about your inquiry..."
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            style={styles.submitButton}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#D2691E';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#8B4513';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;