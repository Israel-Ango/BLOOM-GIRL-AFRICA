import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const leadership = [
        {
            id: 1,
            name: "ISRAEL ANGO",
            title: "Founder",
            image: "/images/founder 2.jpg",
            bio: "Visionary leader and a software developer with experience in humaniterian sector. Passionate about empowering young African women through innovative learning solutions that combine traditional wisdom with modern knowledge.",
            achievement: "GirlChild advocate and sustainable development"
        },
        {
            id: 2,
            name: "JENNIFER OMOREGIE", 
            title: "Co-Founder",
            image: "/images/co-founder 2.jpg",
            bio: "A seasoned analyst and software develper with a strong commitment to gender equality and youth empowerment. Brings expertise in curriculum development and African educational systems.",
            achievement: "Expert in analysis and mentoring"
        }
    ];

    const sdgGoals = [
        "No Poverty", "Zero Hunger", "Good Health", "Quality Education", "Gender Equality",
        "Clean Water", "Affordable Energy", "Economic Growth", "Innovation", "Reduced Inequality",
        "Sustainable Cities", "Responsible Consumption", "Climate Action", "Life Below Water",
        "Life on Land", "Peace & Justice", "Partnerships"
    ];

    const styles = {
        container: {
            position: 'relative',
            minHeight: '100vh',
            backgroundColor: '#fffaf0'
        },
        backgroundElements: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #FFD700 100%)',
            opacity: 0.1,
            zIndex: 0
        },
        nav: {
            position: 'relative',
            backgroundColor: 'rgba(255, 250, 240, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '2px solid rgba(139, 69, 19, 0.1)',
            padding: '20px 0'
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
            width: '50px',
            height: '50px',
            borderRadius: '10px'
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
        hero: {
            position: 'relative',
            padding: '120px 40px',
            background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #FFD700 100%)'
        },
        heroContent: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
        },
        heroText: {
            color: 'white'
        },
        heroBadge: {
            display: 'inline-block',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '8px 20px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            marginBottom: '30px',
            backdropFilter: 'blur(10px)'
        },
        heroTitle: {
            fontSize: '3.5rem',
            fontWeight: 'bold',
            lineHeight: '1.2',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        },
        heroSubtitle: {
            fontSize: '1.2rem',
            lineHeight: '1.6',
            marginBottom: '40px',
            opacity: 0.9
        },
        heroStats: {
            display: 'flex',
            gap: '40px',
            marginBottom: '40px'
        },
        heroStat: {
            textAlign: 'center'
        },
        heroStatNumber: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '5px'
        },
        heroStatLabel: {
            fontSize: '0.9rem',
            opacity: 0.8
        },
        buttonGroup: {
            display: 'flex',
            gap: '20px',
            alignItems: 'center'
        },
        heroVisual: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        africanPattern: {
            width: '400px',
            height: '400px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 255, 255, 0.2)'
        },
        patternInner: {
            fontSize: '8rem',
            opacity: 0.7
        },
        partners: {
            backgroundColor: 'white',
            padding: '60px 40px'
        },
        partnersContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
        },
        partnersTitle: {
            fontSize: '1rem',
            fontWeight: '600',
            color: '#718096',
            marginBottom: '30px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
        },
        partnersLogos: {
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
        partnerLogo: {
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#8B4513',
            padding: '15px 25px',
            border: '2px solid #FFD700',
            borderRadius: '10px',
            backgroundColor: '#fefaf0'
        },
        features: {
            backgroundColor: '#fefaf0',
            padding: '100px 40px'
        },
        featuresContainer: {
            maxWidth: '1200px',
            margin: '0 auto'
        },
        sectionHeader: {
            textAlign: 'center',
            marginBottom: '80px'
        },
        sectionTitle: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#8B4513',
            marginBottom: '20px'
        },
        sectionSubtitle: {
            fontSize: '1.1rem',
            color: '#718096',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
        },
        featuresGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
        },
        featureCard: {
            backgroundColor: 'white',
            padding: '40px 30px',
            borderRadius: '20px',
            textAlign: 'center',
            border: '2px solid #FFD700',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
            ':hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 20px 40px rgba(139, 69, 19, 0.2)'
            }
        },
        featureIcon: {
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            margin: '0 auto 25px',
            color: 'white'
        },
        featureTitle: {
            fontSize: '1.4rem',
            fontWeight: 'bold',
            color: '#8B4513',
            marginBottom: '15px'
        },
        featureText: {
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#4A5568'
        },
        leadershipSection: {
            backgroundColor: 'white',
            padding: '100px 40px'
        },
        leadershipContainer: {
            maxWidth: '1200px',
            margin: '0 auto'
        },
        leadershipGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '50px',
            marginTop: '60px'
        },
        leaderCard: {
            backgroundColor: '#fefaf0',
            padding: '40px 30px',
            borderRadius: '20px',
            textAlign: 'center',
            border: '3px solid #FFD700',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)'
        },
        leaderImageContainer: {
            width: '200px',
            height: '200px',
            borderRadius: '15px',
            margin: '0 auto 25px',
            border: '4px solid #8B4513',
            overflow: 'hidden',
            backgroundColor: '#e2e8f0',
            boxShadow: '0 8px 25px rgba(139, 69, 19, 0.2)'
        },
        leaderImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        },
        placeholderImage: {
            width: '100%',
            height: '100%',
            backgroundColor: '#e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#718096',
            fontSize: '0.9rem',
            textAlign: 'center',
            borderRadius: '15px'
        },
        leaderName: {
            fontSize: '1.6rem',
            fontWeight: '700',
            marginBottom: '8px',
            color: '#8B4513'
        },
        leaderTitle: {
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#D2691E',
            marginBottom: '20px',
            padding: '8px 20px',
            backgroundColor: '#FFD700',
            borderRadius: '25px',
            display: 'inline-block'
        },
        leaderBio: {
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#4A5568',
            marginBottom: '15px',
            textAlign: 'left'
        },
        leaderAchievement: {
            fontSize: '0.9rem',
            color: '#718096',
            fontStyle: 'italic',
            textAlign: 'left',
            borderLeft: '3px solid #8B4513',
            paddingLeft: '15px',
            marginTop: '15px'
        },
        culturalSection: {
            backgroundColor: '#8B4513',
            padding: '100px 40px',
            textAlign: 'center',
            color: 'white'
        },
        culturalContainer: {
            maxWidth: '800px',
            margin: '0 auto'
        },
        culturalTitle: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#FFD700'
        },
        culturalText: {
            fontSize: '1.2rem',
            lineHeight: '1.8',
            marginBottom: '40px',
            fontStyle: 'italic',
            opacity: 0.9
        },
        sdgShowcase: {
            backgroundColor: '#fefaf0',
            padding: '100px 40px'
        },
        sdgContainer: {
            maxWidth: '1200px',
            margin: '0 auto'
        },
        sdgGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '60px'
        },
        sdgItem: {
            backgroundColor: 'white',
            padding: '25px 20px',
            borderRadius: '15px',
            textAlign: 'center',
            border: '2px solid #FFD700',
            transition: 'all 0.3s ease',
            boxShadow: '0 5px 15px rgba(139, 69, 19, 0.1)',
            ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(139, 69, 19, 0.2)'
            }
        },
        sdgNumber: {
            width: '40px',
            height: '40px',
            backgroundColor: '#8B4513',
            color: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            margin: '0 auto 15px'
        },
        sdgName: {
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#4A5568',
            lineHeight: '1.4'
        },
        cta: {
            backgroundColor: '#D2691E',
            padding: '100px 40px',
            textAlign: 'center'
        },
        ctaContainer: {
            maxWidth: '600px',
            margin: '0 auto',
            color: 'white'
        },
        ctaTitle: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '20px'
        },
        ctaText: {
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '40px',
            opacity: 0.9
        },
        footer: {
            backgroundColor: '#2D3748',
            color: 'white',
            padding: '60px 40px 30px'
        },
        footerContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
        },
        footerLogo: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '20px'
        },
        footerLogoImage: {
            width: '40px',
            height: '40px',
            borderRadius: '8px'
        },
        footerLogoText: {
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: '#FFD700'
        },
        footerDescription: {
            fontSize: '0.9rem',
            lineHeight: '1.6',
            color: '#A0AEC0',
            marginBottom: '20px'
        },
        footerHeading: {
            fontSize: '1.1rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#FFD700'
        },
        footerLinks: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
        },
        footerLink: {
            color: '#A0AEC0',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'color 0.3s ease',
            ':hover': {
                color: '#FFD700'
            }
        },
        footerBottom: {
            maxWidth: '1200px',
            margin: '0 auto',
            paddingTop: '30px',
            borderTop: '1px solid #4A5568',
            textAlign: 'center',
            color: '#A0AEC0',
            fontSize: '0.9rem'
        }
    };

    return (
        <div style={styles.container}>
            {/* Background Elements */}
            <div style={styles.backgroundElements}></div>
            
            {/* Navigation */}
            <nav style={styles.nav}>
                <div style={styles.navContainer}>
                    <div style={styles.logoContainer}>
                        <img 
                            src="/images/logo.png" 
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

            {/* Hero Section */}
            <div style={styles.hero}>
                <div style={styles.heroContent}>
                    <div style={styles.heroText}>
                        <div style={styles.heroBadge}>
                            🌍 Pan-African Initiative • 54 Nations
                        </div>
                        <h1 style={styles.heroTitle}>
                            Cultivating Africa's Future Women Leaders
                        </h1>
                        <p style={styles.heroSubtitle}>
                            A transformative educational movement empowering young African women 
                            through culturally-relevant UN Sustainable Development Goals curriculum 
                            and African-centered certification.
                        </p>
                        
                        <div style={styles.heroStats}>
                            <div style={styles.heroStat}>
                                <div style={styles.heroStatNumber}>17</div>
                                <div style={styles.heroStatLabel}>SDG Modules</div>
                            </div>
                            <div style={styles.heroStat}>
                                <div style={styles.heroStatNumber}>25K+</div>
                                <div style={styles.heroStatLabel}>African Scholars</div>
                            </div>
                            <div style={styles.heroStat}>
                                <div style={styles.heroStatNumber}>54</div>
                                <div style={styles.heroStatLabel}>African Nations</div>
                            </div>
                        </div>

                        <div style={styles.buttonGroup}>
                            <Link 
                                to="/signup" 
                                style={{
                                    ...styles.buttonPrimary,
                                    fontSize: '16px',
                                    padding: '16px 40px'
                                }}
                            >
                                Begin Your Journey
                            </Link>
                            <Link 
                                to="/courses" 
                                style={{
                                    ...styles.buttonSecondary,
                                    fontSize: '16px',
                                    padding: '16px 40px',
                                    color: 'white',
                                    borderColor: 'rgba(255,255,255,0.3)'
                                }}
                            >
                                Explore Curriculum
                            </Link>
                        </div>
                    </div>
                    
                    <div style={styles.heroVisual}>
                        <div style={styles.africanPattern}>
                            <div style={styles.patternInner}>🌺</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partners Section */}
            <div style={styles.partners}>
                <div style={styles.partnersContainer}>
                    <div style={styles.partnersTitle}>In Partnership With</div>
                    <div style={styles.partnersLogos}>
                        <div style={styles.partnerLogo}>SNART FOUNDATION</div>
                        <div style={styles.partnerLogo}>AFRICAN UNION</div>
                        <div style={styles.partnerLogo}>EDUCATE AFRICA</div>
                        <div style={styles.partnerLogo}>WOMEN IN TECH AFRICA</div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div style={styles.features}>
                <div style={styles.featuresContainer}>
                    <div style={styles.sectionHeader}>
                        <h2 style={styles.sectionTitle}>African-Centered Educational Excellence</h2>
                        <p style={styles.sectionSubtitle}>
                            Designed by Africans for Africans, our platform delivers culturally relevant 
                            learning experiences that honor our heritage while building our future.
                        </p>
                    </div>
                    
                    <div style={styles.featuresGrid}>
                        <div style={styles.featureCard}>
                            <div style={styles.featureIcon}>📚</div>
                            <h3 style={styles.featureTitle}>Culturally Relevant Curriculum</h3>
                            <p style={styles.featureText}>
                                SDG education tailored to African contexts, incorporating local examples, 
                                languages, and cultural perspectives from across the continent.
                            </p>
                        </div>
                        
                        <div style={styles.featureCard}>
                            <div style={{...styles.featureIcon, background: 'linear-gradient(135deg, #D2691E 0%, #CD853F 100%)'}}>🏆</div>
                            <h3 style={styles.featureTitle}>African Recognition</h3>
                            <p style={styles.featureText}>
                                Earn respected certification from SNART FOUNDATION, recognized 
                                by educational institutions and employers across Africa.
                            </p>
                        </div>
                        
                        <div style={styles.featureCard}>
                            <div style={{...styles.featureIcon, background: 'linear-gradient(135deg, #FFD700 0%, #DAA520 100%)'}}>🤝</div>
                            <h3 style={styles.featureTitle}>Continental Network</h3>
                            <p style={styles.featureText}>
                                Connect with sisters across 54 African nations and join a growing 
                                community of women shaping Africa's sustainable development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Section */}
            <div style={styles.leadershipSection}>
                <div style={styles.leadershipContainer}>
                    <div style={styles.sectionHeader}>
                        <h2 style={styles.sectionTitle}>Meet Our Visionary Leaders</h2>
                        <p style={styles.sectionSubtitle}>
                            The passionate founders behind Bloom Girl Africa, dedicated to transforming 
                            education for young African women through sustainable development.
                        </p>
                    </div>
                    
                    <div style={styles.leadershipGrid}>
                        {leadership.map(leader => (
                            <div key={leader.id} style={styles.leaderCard}>
                                <div style={styles.leaderImageContainer}>
                                    <img 
                                        src={leader.image} 
                                        alt={leader.name}
                                        style={styles.leaderImage}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            const placeholder = e.target.parentElement.querySelector('.placeholder-image');
                                            if (placeholder) {
                                                placeholder.style.display = 'flex';
                                            }
                                        }}
                                    />
                                    <div 
                                        className="placeholder-image"
                                        style={{
                                            ...styles.placeholderImage,
                                            display: 'none'
                                        }}
                                    >
                                        Upload Photo<br/>(200x200px)
                                    </div>
                                </div>
                                
                                <h3 style={styles.leaderName}>{leader.name}</h3>
                                <div style={styles.leaderTitle}>{leader.title}</div>
                                <p style={styles.leaderBio}>{leader.bio}</p>
                                <div style={styles.leaderAchievement}>
                                    {leader.achievement}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cultural Heritage Section */}
            <div style={styles.culturalSection}>
                <div style={styles.culturalContainer}>
                    <h2 style={styles.culturalTitle}>Rooted in African Excellence</h2>
                    <p style={styles.culturalText}>
                        "At Bloom Girl Africa, we believe that educating a girl is educating a nation. 
                        Our approach combines global knowledge with African wisdom, ensuring our scholars 
                        are equipped to lead with cultural pride and global competence. We celebrate the 
                        diversity of our continent while building unity through shared learning experiences."
                    </p>
                    <div style={styles.buttonGroup}>
                        <Link 
                            to="/about" 
                            style={{
                                ...styles.buttonPrimary,
                                backgroundColor: '#FFD700',
                                color: '#8B4513'
                            }}
                        >
                            Learn Our Story
                        </Link>
                    </div>
                </div>
            </div>

            {/* SDG Showcase */}
            <div style={styles.sdgShowcase}>
                <div style={styles.sdgContainer}>
                    <div style={styles.sectionHeader}>
                        <h2 style={styles.sectionTitle}>African Solutions for Global Goals</h2>
                        <p style={styles.sectionSubtitle}>
                            Master all 17 United Nations Sustainable Development Goals through 
                            African perspectives and locally-relevant case studies.
                        </p>
                    </div>
                    
                    <div style={styles.sdgGrid}>
                        {sdgGoals.map((goal, index) => (
                            <div key={index} style={styles.sdgItem}>
                                <div style={styles.sdgNumber}>{index + 1}</div>
                                <div style={styles.sdgName}>{goal}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div style={styles.cta}>
                <div style={styles.ctaContainer}>
                    <h2 style={styles.ctaTitle}>Ready to Bloom With Us?</h2>
                    <p style={styles.ctaText}>
                        Join thousands of African girls who are transforming their communities 
                        and shaping the future of our beautiful continent.
                    </p>
                    <Link 
                        to="/signup" 
                        style={{
                            ...styles.buttonPrimary,
                            fontSize: '16px',
                            padding: '18px 50px',
                            backgroundColor: '#FFD700',
                            color: '#8B4513'
                        }}
                    >
                        Start Your African Journey
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <div style={styles.footer}>
                <div style={styles.footerContainer}>
                    <div>
                        <div style={styles.footerLogo}>
                            <img 
                                src="/images/logo.png" 
                                alt="Bloom Girl Africa" 
                                style={styles.footerLogoImage}
                            />
                            <div style={styles.footerLogoText}>
                                BloomGirl AFRICA
                            </div>
                        </div>
                        <p style={styles.footerDescription}>
                            Cultivating the next generation of African women leaders through 
                            culturally-relevant education and sustainable development training.
                        </p>
                    </div>
                    
                    <div>
                        <h4 style={styles.footerHeading}>Our Program</h4>
                        <div style={styles.footerLinks}>
                            <Link to="/courses" style={styles.footerLink}>Courses</Link>
                            <Link to="/curriculum" style={styles.footerLink}>Curriculum</Link>
                            <Link to="/certification" style={styles.footerLink}>Certification</Link>
                            <Link to="/partners" style={styles.footerLink}>Partners</Link>
                        </div>
                    </div>
                    
                    <div>
                        <h4 style={styles.footerHeading}>Our Story</h4>
                        <div style={styles.footerLinks}>
                            <Link to="/about" style={styles.footerLink}>About Us</Link>
                            <Link to="/impact" style={styles.footerLink}>Our Impact</Link>
                            <Link to="/team" style={styles.footerLink}>Leadership</Link>
                            <Link to="/careers" style={styles.footerLink}>Careers</Link>
                        </div>
                    </div>
                    
                    <div>
                        <h4 style={styles.footerHeading}>Connect</h4>
                        <div style={styles.footerLinks}>
                            <Link to="/contact" style={styles.footerLink}>Contact</Link>
                            <Link to="/support" style={styles.footerLink}>Support</Link>
                            <Link to="/blog" style={styles.footerLink}>Blog</Link>
                            <Link to="/events" style={styles.footerLink}>Events</Link>
                        </div>
                    </div>
                </div>
                
                <div style={styles.footerBottom}>
                    © 2025 Bloom Girl Africa. In partnership with SNART FOUNDATION. Empowering Africa's daughters.
                </div>
            </div>
        </div>
    );
};

export default LandingPage;