import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email: formData.email,
                password: formData.password
            });

            if (response.data.success) {
                // Save token and user data to localStorage
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                
                // Redirect to dashboard
                navigate('/dashboard');
            }
        } catch (error) {
            setError(
                error.response?.data?.message || 
                'Login failed. Please check your credentials and try again.'
            );
        } finally {
            setLoading(false);
        }
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
        content: {
            maxWidth: '500px',
            margin: '0 auto',
            padding: '40px 20px'
        },
        header: {
            textAlign: 'center',
            marginBottom: '40px'
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '10px',
            color: '#8B4513'
        },
        subtitle: {
            fontSize: '1.1rem',
            color: '#718096'
        },
        formContainer: {
            backgroundColor: 'white',
            padding: '50px 40px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
            border: '2px solid #FFD700'
        },
        formGroup: {
            marginBottom: '25px'
        },
        label: {
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#2D3748',
            fontSize: '14px'
        },
        input: {
            width: '100%',
            padding: '15px',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '16px',
            transition: 'border-color 0.3s ease',
            fontFamily: 'inherit'
        },
        submitButton: {
            backgroundColor: '#8B4513',
            color: 'white',
            padding: '18px 40px',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            width: '100%',
            fontFamily: 'inherit'
        },
        loadingButton: {
            backgroundColor: '#A0AEC0',
            cursor: 'not-allowed'
        },
        signupLink: {
            textAlign: 'center',
            marginTop: '30px',
            color: '#718096'
        },
        signupText: {
            color: '#8B4513',
            fontWeight: '600',
            textDecoration: 'none'
        },
        errorMessage: {
            backgroundColor: '#FED7D7',
            color: '#C53030',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '25px',
            border: '1px solid #FEB2B2'
        },
        forgotPassword: {
            textAlign: 'center',
            marginTop: '15px'
        },
        forgotPasswordLink: {
            color: '#8B4513',
            textDecoration: 'none',
            fontSize: '14px'
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
                        <Link to="/contact" style={styles.navLink}>Contact</Link>
                    </div>

                    <div style={styles.navLinks}>
                        <Link to="/signup" style={styles.navLink}>
                            Don't have an account?
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Login Content */}
            <div style={styles.content}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Welcome Back</h1>
                    <p style={styles.subtitle}>
                        Sign in to continue your learning journey
                    </p>
                </div>

                <div style={styles.formContainer}>
                    {error && (
                        <div style={styles.errorMessage}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* Email */}
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

                        {/* Password */}
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            style={{
                                ...styles.submitButton,
                                ...(loading && styles.loadingButton)
                            }}
                            disabled={loading}
                            onMouseOver={(e) => {
                                if (!loading) {
                                    e.target.style.backgroundColor = '#D2691E';
                                    e.target.style.transform = 'translateY(-2px)';
                                }
                            }}
                            onMouseOut={(e) => {
                                if (!loading) {
                                    e.target.style.backgroundColor = '#8B4513';
                                    e.target.style.transform = 'translateY(0)';
                                }
                            }}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <div style={styles.forgotPassword}>
                        <Link to="/forgot-password" style={styles.forgotPasswordLink}>
                            Forgot your password?
                        </Link>
                    </div>

                    <div style={styles.signupLink}>
                        Don't have an account? <Link to="/signup" style={styles.signupText}>Sign up here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;