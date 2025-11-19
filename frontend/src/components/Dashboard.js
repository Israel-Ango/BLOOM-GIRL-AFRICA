import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CertificateModal from './CertificateModal';
import ProfileAchievements from './ProfileAchievements';
import ProgressTracker from './ProgressTracker';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('courses');
    const [activeCourse, setActiveCourse] = useState(null);
    const [courseProgress, setCourseProgress] = useState({});
    const [showCertificate, setShowCertificate] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                if (response.data.success) {
                    setUser(response.data.user);
                    const savedProgress = localStorage.getItem('courseProgress');
                    if (savedProgress) {
                        setCourseProgress(JSON.parse(savedProgress));
                    }
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    };

    const startCourse = (courseId) => {
        setActiveCourse(courseId);
        if (!courseProgress[courseId]) {
            const newProgress = { ...courseProgress, [courseId]: 0 };
            setCourseProgress(newProgress);
            localStorage.setItem('courseProgress', JSON.stringify(newProgress));
        }
    };

    const continueCourse = (courseId) => {
        setActiveCourse(courseId);
    };

    const completeLesson = (courseId) => {
        const currentProgress = courseProgress[courseId] || 0;
        const newProgress = Math.min(currentProgress + 25, 100);
        const updatedProgress = { ...courseProgress, [courseId]: newProgress };
        
        setCourseProgress(updatedProgress);
        localStorage.setItem('courseProgress', JSON.stringify(updatedProgress));
        
        checkAllCoursesCompleted(updatedProgress);
        
        if (newProgress === 100) {
            setTimeout(() => {
                alert(`🎉 Congratulations! You've completed "${courses.find(c => c.id === courseId)?.title}"`);
                setActiveCourse(null);
            }, 500);
        }
    };

    const checkAllCoursesCompleted = (progress) => {
        const allCompleted = courses.every(course => progress[course.id] === 100);
        if (allCompleted && !localStorage.getItem('certificateEarned')) {
            setTimeout(() => {
                setShowCertificate(true);
                localStorage.setItem('certificateEarned', 'true');
            }, 1000);
        }
    };

    const exitCourse = () => {
        setActiveCourse(null);
    };

    // Certificate functions to pass to components
    const generateCertificate = () => {
        setShowCertificate(true);
    };

    const shareCertificate = () => {
        if (navigator.share) {
            navigator.share({
                title: 'My SDG Completion Certificate',
                text: `I just completed all 17 UN Sustainable Development Goals on Bloom Girl Africa! 🎓`,
                url: window.location.href,
            })
            .catch(console.error);
        } else {
            navigator.clipboard.writeText(`I completed all 17 UN Sustainable Development Goals on Bloom Girl Africa! Certificate ID: BGA-${Date.now()}`);
            alert('Certificate message copied to clipboard! 📋');
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
        content: {
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '40px'
        },
        welcomeCard: {
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
            textAlign: 'center',
            marginBottom: '40px',
            border: '3px solid #FFD700'
        },
        welcomeTitle: {
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '10px',
            color: '#8B4513'
        },
        welcomeText: {
            fontSize: '1.2rem',
            color: '#718096',
            marginBottom: '20px'
        },
        tabContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px',
            gap: '20px'
        },
        tabButton: {
            backgroundColor: 'transparent',
            color: '#8B4513',
            padding: '12px 30px',
            border: '2px solid #8B4513',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease'
        },
        activeTab: {
            backgroundColor: '#8B4513',
            color: 'white'
        },
        profileSection: {
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(139, 69, 19, 0.1)',
            marginBottom: '30px'
        },
        profileTitle: {
            fontSize: '1.8rem',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#8B4513',
            textAlign: 'center'
        },
        userInfoGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '20px'
        },
        userDetail: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '15px',
            backgroundColor: '#f8f8f8',
            borderRadius: '8px',
            borderLeft: '4px solid #8B4513'
        },
        detailLabel: {
            fontWeight: '600',
            color: '#4A5568'
        },
        detailValue: {
            color: '#2D3748'
        },
        coursesSection: {
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(139, 69, 19, 0.1)'
        },
        coursesTitle: {
            fontSize: '1.8rem',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#8B4513',
            textAlign: 'center'
        },
        courseGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '25px'
        },
        courseCard: {
            backgroundColor: '#fefaf0',
            padding: '25px',
            borderRadius: '12px',
            border: '2px solid #FFD700',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        courseTitle: {
            fontSize: '1.3rem',
            fontWeight: '700',
            marginBottom: '10px',
            color: '#8B4513'
        },
        courseDescription: {
            color: '#718096',
            marginBottom: '15px',
            fontSize: '0.95rem',
            lineHeight: '1.4'
        },
        progressBar: {
            width: '100%',
            height: '10px',
            backgroundColor: '#e2e8f0',
            borderRadius: '5px',
            marginBottom: '10px',
            overflow: 'hidden'
        },
        progressFill: {
            height: '100%',
            backgroundColor: '#8B4513',
            transition: 'width 0.3s ease'
        },
        button: {
            backgroundColor: '#8B4513',
            color: 'white',
            padding: '12px 30px',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '14px',
            margin: '0 10px',
            transition: 'all 0.3s ease'
        },
        courseButton: {
            backgroundColor: '#8B4513',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            fontWeight: '600',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '14px',
            margin: '5px'
        },
        courseContent: {
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(139, 69, 19, 0.1)',
            marginBottom: '30px'
        },
        courseHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            paddingBottom: '20px',
            borderBottom: '2px solid #e2e8f0'
        },
        courseContentTitle: {
            fontSize: '2rem',
            fontWeight: '700',
            color: '#8B4513',
            margin: 0
        },
        lessonContent: {
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: '#4A5568',
            marginBottom: '30px'
        },
        lessonVideo: {
            width: '100%',
            height: '400px',
            backgroundColor: '#2D3748',
            borderRadius: '10px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem'
        },
        quizSection: {
            backgroundColor: '#f7fafc',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px'
        },
        quizQuestion: {
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '15px',
            color: '#2D3748'
        },
        quizOption: {
            display: 'block',
            width: '100%',
            padding: '15px',
            marginBottom: '10px',
            backgroundColor: 'white',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
        },
        completionMessage: {
            textAlign: 'center',
            padding: '15px',
            backgroundColor: '#C6F6D5',
            borderRadius: '8px',
            marginBottom: '15px',
            color: '#276749',
            fontWeight: '600'
        },
        sdgNumber: {
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#718096',
            marginBottom: '5px'
        }
    };

    // All 17 UN Sustainable Development Goals
    const courses = [
        {
            id: 1,
            number: "SDG 1",
            title: "No Poverty",
            description: "End poverty in all its forms everywhere",
            color: "#E5243B"
        },
        {
            id: 2,
            number: "SDG 2",
            title: "Zero Hunger",
            description: "End hunger, achieve food security and improved nutrition",
            color: "#DDA63A"
        },
        {
            id: 3,
            number: "SDG 3",
            title: "Good Health & Well-being",
            description: "Ensure healthy lives and promote well-being for all",
            color: "#4C9F38"
        },
        {
            id: 4,
            number: "SDG 4",
            title: "Quality Education",
            description: "Ensure inclusive and equitable quality education",
            color: "#C5192D"
        },
        {
            id: 5,
            number: "SDG 5",
            title: "Gender Equality",
            description: "Achieve gender equality and empower all women and girls",
            color: "#FF3A21"
        },
        {
            id: 6,
            number: "SDG 6",
            title: "Clean Water & Sanitation",
            description: "Ensure availability of water and sanitation for all",
            color: "#26BDE2"
        },
        {
            id: 7,
            number: "SDG 7",
            title: "Affordable & Clean Energy",
            description: "Ensure access to affordable, reliable, sustainable energy",
            color: "#FCC30B"
        },
        {
            id: 8,
            number: "SDG 8",
            title: "Decent Work & Economic Growth",
            description: "Promote sustained, inclusive and sustainable economic growth",
            color: "#A21942"
        },
        {
            id: 9,
            number: "SDG 9",
            title: "Industry, Innovation & Infrastructure",
            description: "Build resilient infrastructure, promote sustainable industrialization",
            color: "#FD6925"
        },
        {
            id: 10,
            number: "SDG 10",
            title: "Reduced Inequalities",
            description: "Reduce inequality within and among countries",
            color: "#DD1367"
        },
        {
            id: 11,
            number: "SDG 11",
            title: "Sustainable Cities & Communities",
            description: "Make cities and human settlements inclusive, safe, resilient and sustainable",
            color: "#FD9D24"
        },
        {
            id: 12,
            number: "SDG 12",
            title: "Responsible Consumption & Production",
            description: "Ensure sustainable consumption and production patterns",
            color: "#BF8B2E"
        },
        {
            id: 13,
            number: "SDG 13",
            title: "Climate Action",
            description: "Take urgent action to combat climate change and its impacts",
            color: "#3F7E44"
        },
        {
            id: 14,
            number: "SDG 14",
            title: "Life Below Water",
            description: "Conserve and sustainably use the oceans, seas and marine resources",
            color: "#0A97D9"
        },
        {
            id: 15,
            number: "SDG 15",
            title: "Life on Land",
            description: "Protect, restore and promote sustainable use of terrestrial ecosystems",
            color: "#56C02B"
        },
        {
            id: 16,
            number: "SDG 16",
            title: "Peace, Justice & Strong Institutions",
            description: "Promote peaceful and inclusive societies for sustainable development",
            color: "#00689D"
        },
        {
            id: 17,
            number: "SDG 17",
            title: "Partnerships for the Goals",
            description: "Strengthen the means of implementation and revitalize partnerships",
            color: "#19486A"
        }
    ];

    // Sample lesson content for all SDGs
    const getLessonContent = (courseId) => {
        const course = courses.find(c => c.id === courseId);
        return [
            {
                title: `Introduction to ${course.title}`,
                content: `This goal focuses on ${course.description.toLowerCase()}. It addresses key challenges and opportunities in achieving sustainable development in this area.`,
                video: `${course.title} Introduction Video`,
                quiz: {
                    question: `What is the main focus of ${course.number}?`,
                    options: [
                        "Economic growth only",
                        course.description,
                        "Technological advancement",
                        "Political reforms"
                    ],
                    correct: 1
                }
            },
            {
                title: `Key Targets of ${course.title}`,
                content: `The specific targets for ${course.number} include measurable objectives that contribute to the overall achievement of this sustainable development goal by 2030.`,
                video: `${course.title} Targets Video`,
                quiz: {
                    question: `By what year are the SDGs targeted to be achieved?`,
                    options: ["2025", "2030", "2040", "2050"],
                    correct: 1
                }
            },
            {
                title: `Implementation Strategies`,
                content: `Various strategies and approaches are being implemented globally to achieve ${course.number}. These include policy changes, community engagement, and international cooperation.`,
                video: `${course.title} Strategies Video`,
                quiz: {
                    question: "Which organization leads the global SDG initiative?",
                    options: ["World Bank", "United Nations", "WHO", "UNESCO"],
                    correct: 1
                }
            },
            {
                title: `Success Stories & Case Studies`,
                content: `Several countries and organizations have made significant progress in achieving ${course.number}. This lesson explores successful implementations and best practices.`,
                video: `${course.title} Case Studies Video`,
                quiz: {
                    question: "Why are case studies important for SDG implementation?",
                    options: [
                        "They provide proven strategies",
                        "They help avoid past mistakes", 
                        "They inspire new approaches",
                        "All of the above"
                    ],
                    correct: 3
                }
            }
        ];
    };

    // If a course is active, show course content
    if (activeCourse) {
        const course = courses.find(c => c.id === activeCourse);
        const currentProgress = courseProgress[activeCourse] || 0;
        const lessons = getLessonContent(activeCourse);
        const currentLessonIndex = Math.floor(currentProgress / 25);
        const currentLesson = lessons[currentLessonIndex];

        return (
            <div style={styles.container}>
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
                        <button 
                            style={styles.button}
                            onClick={exitCourse}
                        >
                            Back to Dashboard
                        </button>
                    </div>
                </nav>

                <div style={styles.content}>
                    <div style={styles.courseContent}>
                        <div style={styles.courseHeader}>
                            <div>
                                <div style={styles.sdgNumber}>{course.number}</div>
                                <h1 style={styles.courseContentTitle}>{course.title}</h1>
                                <p style={{color: '#718096', margin: 0}}>{course.description}</p>
                            </div>
                            <div style={{textAlign: 'right'}}>
                                <div style={styles.progressBar}>
                                    <div 
                                        style={{
                                            ...styles.progressFill,
                                            width: `${currentProgress}%`
                                        }} 
                                    />
                                </div>
                                <span>Progress: {currentProgress}%</span>
                            </div>
                        </div>

                        <div style={styles.lessonVideo}>
                            🎥 {currentLesson.video}
                        </div>

                        <div style={styles.lessonContent}>
                            <h3>{currentLesson.title}:</h3>
                            <p>{currentLesson.content}</p>
                        </div>

                        <div style={styles.quizSection}>
                            <h3>Quick Quiz:</h3>
                            <div style={styles.quizQuestion}>
                                {currentLesson.quiz.question}
                            </div>
                            {currentLesson.quiz.options.map((option, index) => (
                                <button
                                    key={index}
                                    style={styles.quizOption}
                                    onClick={() => completeLesson(activeCourse)}
                                    onMouseOver={(e) => {
                                        e.target.style.backgroundColor = '#fefaf0';
                                        e.target.style.borderColor = '#8B4513';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundColor = 'white';
                                        e.target.style.borderColor = '#e2e8f0';
                                    }}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        <div style={{textAlign: 'center', marginTop: '30px'}}>
                            <button 
                                style={styles.courseButton}
                                onClick={() => completeLesson(activeCourse)}
                            >
                                Complete Lesson & Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div style={styles.container}>
                <div style={styles.content}>
                    <div style={styles.welcomeCard}>
                        <h2>Loading...</h2>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
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
                    <button 
                        style={styles.button}
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </nav>

            <div style={styles.content}>
                {/* Welcome Section with Progress Tracker */}
                <div style={styles.welcomeCard}>
                    <h1 style={styles.welcomeTitle}>
                        Welcome back, {user?.name}! 👋
                    </h1>
                    <p style={styles.welcomeText}>
                        Explore all 17 UN Sustainable Development Goals and continue your learning journey
                    </p>
                    
                    {/* Progress Tracker Component */}
                    <ProgressTracker courseProgress={courseProgress} />
                </div>

                {/* Tab Navigation */}
                <div style={styles.tabContainer}>
                    <button 
                        style={{
                            ...styles.tabButton,
                            ...(activeSection === 'courses' && styles.activeTab)
                        }}
                        onClick={() => setActiveSection('courses')}
                    >
                        All SDGs ({courses.length})
                    </button>
                    <button 
                        style={{
                            ...styles.tabButton,
                            ...(activeSection === 'profile' && styles.activeTab)
                        }}
                        onClick={() => setActiveSection('profile')}
                    >
                        My Profile
                    </button>
                </div>

                {/* Courses Section */}
                {activeSection === 'courses' && (
                    <div style={styles.coursesSection}>
                        <h2 style={styles.coursesTitle}>The 17 UN Sustainable Development Goals</h2>
                        <div style={styles.courseGrid}>
                            {courses.map(course => {
                                const progress = courseProgress[course.id] || 0;
                                return (
                                    <div key={course.id} style={styles.courseCard}>
                                        <div>
                                            <div style={styles.sdgNumber}>{course.number}</div>
                                            <h3 style={styles.courseTitle}>{course.title}</h3>
                                            <p style={styles.courseDescription}>{course.description}</p>
                                        </div>
                                        
                                        <div>
                                            <div style={styles.progressBar}>
                                                <div 
                                                    style={{
                                                        ...styles.progressFill,
                                                        width: `${progress}%`
                                                    }} 
                                                />
                                            </div>
                                            <div style={{marginBottom: '15px'}}>
                                                <strong>Progress: {progress}%</strong>
                                            </div>
                                            
                                            {progress === 0 ? (
                                                <button 
                                                    style={styles.courseButton}
                                                    onClick={() => startCourse(course.id)}
                                                >
                                                    Start Learning
                                                </button>
                                            ) : progress === 100 ? (
                                                <div style={styles.completionMessage}>
                                                    ✅ Course Completed!
                                                </div>
                                            ) : (
                                                <button 
                                                    style={styles.courseButton}
                                                    onClick={() => continueCourse(course.id)}
                                                >
                                                    Continue ({progress}%)
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Profile Section with Achievements */}
                {activeSection === 'profile' && (
                    <div style={styles.profileSection}>
                        <h2 style={styles.profileTitle}>Your Profile Information</h2>
                        <div style={styles.userInfoGrid}>
                            <div style={styles.userDetail}>
                                <span style={styles.detailLabel}>Full Name:</span>
                                <span style={styles.detailValue}>{user?.name}</span>
                            </div>
                            <div style={styles.userDetail}>
                                <span style={styles.detailLabel}>Email:</span>
                                <span style={styles.detailValue}>{user?.email}</span>
                            </div>
                            <div style={styles.userDetail}>
                                <span style={styles.detailLabel}>Age:</span>
                                <span style={styles.detailValue}>{user?.age} years</span>
                            </div>
                            <div style={styles.userDetail}>
                                <span style={styles.detailLabel}>Country:</span>
                                <span style={styles.detailValue}>{user?.country}</span>
                            </div>
                            <div style={styles.userDetail}>
                                <span style={styles.detailLabel}>Qualification:</span>
                                <span style={styles.detailValue}>{user?.qualification}</span>
                            </div>
                            <div style={styles.userDetail}>
                                <span style={styles.detailLabel}>Member Since:</span>
                                <span style={styles.detailValue}>
                                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                                </span>
                            </div>
                        </div>
                        
                        {/* Profile Achievements Component */}
                        <ProfileAchievements 
                            user={user}
                            courseProgress={courseProgress}
                            generateCertificate={generateCertificate}
                            shareCertificate={shareCertificate}
                        />
                        
                        <div style={{textAlign: 'center', marginTop: '20px'}}>
                            <button style={styles.button}>
                                Edit Profile
                            </button>
                        </div>
                    </div>
                )}

                {/* Certificate Modal Component */}
                <CertificateModal 
                    user={user}
                    showCertificate={showCertificate}
                    setShowCertificate={setShowCertificate}
                    courseProgress={courseProgress}
                />
            </div>
        </div>
    );
};

export default Dashboard;