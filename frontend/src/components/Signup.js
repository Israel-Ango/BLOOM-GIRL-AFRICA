import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        dateOfBirth: '',
        country: '',
        sex: '',
        qualification: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        consentGiven: false
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        if (!formData.consentGiven) {
            setError('You must agree to the terms and conditions');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', {
                name: formData.name,
                age: parseInt(formData.age),
                dateOfBirth: formData.dateOfBirth,
                country: formData.country,
                sex: formData.sex,
                qualification: formData.qualification,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                password: formData.password,
                consentGiven: formData.consentGiven
            });

            if (response.data.success) {
                setSuccess('Registration successful! Redirecting to dashboard...');
                // Save token to localStorage
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                
                // Redirect to dashboard after 2 seconds
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            }
        } catch (error) {
            setError(
                error.response?.data?.message || 
                'Registration failed. Please try again.'
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
        activeNavLink: {
            color: '#8B4513',
            fontWeight: '600'
        },
        content: {
            maxWidth: '800px',
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
        formGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '25px',
            marginBottom: '25px'
        },
        formGroup: {
            marginBottom: '25px'
        },
        fullWidth: {
            gridColumn: '1 / -1'
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
        select: {
            width: '100%',
            padding: '15px',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '16px',
            backgroundColor: 'white',
            fontFamily: 'inherit'
        },
        checkboxContainer: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            marginBottom: '25px'
        },
        checkbox: {
            marginTop: '3px'
        },
        checkboxLabel: {
            fontSize: '14px',
            color: '#4A5568',
            lineHeight: '1.4'
        },
        consentLink: {
            color: '#8B4513',
            fontWeight: '600',
            textDecoration: 'none'
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
        loginLink: {
            textAlign: 'center',
            marginTop: '30px',
            color: '#718096'
        },
        loginText: {
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
        successMessage: {
            backgroundColor: '#C6F6D5',
            color: '#276749',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '25px',
            border: '1px solid #9AE6B4'
        }
    };

    const africanCountries = [
        'Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Ethiopia', 'Egypt',
        'Tanzania', 'Uganda', 'Morocco', 'Algeria', 'Senegal', 'Ivory Coast',
        'Cameroon', 'Zimbabwe', 'Zambia', 'Rwanda', 'Botswana', 'Namibia',
        'Mozambique', 'Madagascar', 'Angola', 'Sudan', 'Tunisia', 'Libya',
        'Other African Country'
    ];

    const qualifications = [
        'Primary School',
        'Secondary School',
        'High School',
        'Undergraduate',
        'Graduate',
        'Postgraduate',
        'Vocational Training',
        'Other'
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

                    <div style={styles.navLinks}>
                        <Link to="/login" style={styles.navLink}>
                            Already have an account?
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Signup Content */}
            <div style={styles.content}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Join Bloom Girl Africa</h1>
                    <p style={styles.subtitle}>
                        Create your account to start your journey in sustainable development education
                    </p>
                </div>

                <div style={styles.formContainer}>
                    {error && (
                        <div style={styles.errorMessage}>
                            {error}
                        </div>
                    )}
                    {success && (
                        <div style={styles.successMessage}>
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div style={styles.formGrid}>
                            {/* Name */}
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Full Name *</label>
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

                            {/* Age */}
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Age *</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    style={styles.input}
                                    placeholder="Enter your age"
                                    min="10"
                                    max="25"
                                    required
                                />
                            </div>

                            {/* Date of Birth */}
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Date of Birth *</label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    style={styles.input}
                                    required
                                />
                            </div>

                            {/* Country */}
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Country *</label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    style={styles.select}
                                    required
                                >
                                    <option value="">Select your country</option>
                                    {africanCountries.map(country => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Sex */}
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Sex *</label>
                                <select
                                    name="sex"
                                    value={formData.sex}
                                    onChange={handleChange}
                                    style={styles.select}
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Other">Other</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                </select>
                            </div>

                            {/* Qualification */}
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Qualification *</label>
                                <select
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    style={styles.select}
                                    required
                                >
                                    <option value="">Select your qualification</option>
                                    {qualifications.map(qual => (
                                        <option key={qual} value={qual}>
                                            {qual}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Email */}
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Email Address *</label>
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

                            {/* Phone Number */}
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    style={styles.input}
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Password *</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    style={styles.input}
                                    placeholder="Create a password (min. 6 characters)"
                                    minLength="6"
                                    required
                                />
                            </div>

                            {/* Confirm Password */}
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Confirm Password *</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    style={styles.input}
                                    placeholder="Confirm your password"
                                    required
                                />
                            </div>
                        </div>

                        {/* Consent Checkbox */}
                        <div style={styles.checkboxContainer}>
                            <input
                                type="checkbox"
                                name="consentGiven"
                                checked={formData.consentGiven}
                                onChange={handleChange}
                                style={styles.checkbox}
                                required
                            />
                            <label style={styles.checkboxLabel}>
                                I consent to BLOOM GIRL AFRICA and SNART FOUNDATION collecting and using my data 
                                for the purpose of this educational program and certificate issuance. 
                                I have read and agree to the <Link to="/privacy" style={styles.consentLink}>Privacy Policy</Link> 
                                and <Link to="/terms" style={styles.consentLink}>Terms of Service</Link>.
                            </label>
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
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>

                    <div style={styles.loginLink}>
                        Already have an account? <Link to="/login" style={styles.loginText}>Log in here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;