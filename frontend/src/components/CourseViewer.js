import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sdgCourses } from '../data/courseContent';

const CourseViewer = () => {
    const { courseId } = useParams();
    const [currentModule, setCurrentModule] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [moduleCompleted, setModuleCompleted] = useState(false);

    const course = sdgCourses.find(c => c.id === parseInt(courseId));
    
    if (!course) {
        return (
            <div style={{ padding: '100px 20px', textAlign: 'center', background: '#fefaf0', minHeight: '100vh' }}>
                <h1 style={{ color: '#8B4513' }}>Course Not Found</h1>
                <Link 
                    to="/courses" 
                    style={{
                        backgroundColor: '#8B4513',
                        color: 'white',
                        padding: '12px 30px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        marginTop: '20px'
                    }}
                >
                    Back to Courses
                </Link>
            </div>
        );
    }

    const currentModuleData = course.modules[currentModule];

    const handleQuizAnswer = (questionIndex, answerIndex) => {
        setQuizAnswers(prev => ({
            ...prev,
            [questionIndex]: answerIndex
        }));
    };

    const calculateScore = () => {
        let correct = 0;
        course.quiz.forEach((question, index) => {
            if (quizAnswers[index] === question.correctAnswer) {
                correct++;
            }
        });
        return Math.round((correct / course.quiz.length) * 100);
    };

    const handleQuizSubmit = () => {
        setQuizSubmitted(true);
        const score = calculateScore();
        if (score >= 80) {
            setModuleCompleted(true);
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
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px'
        },
        header: {
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
            marginBottom: '30px',
            textAlign: 'center',
            border: `3px solid ${course.color}`
        },
        courseIcon: {
            fontSize: '4rem',
            marginBottom: '20px'
        },
        courseTitle: {
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '10px',
            color: course.color
        },
        courseDescription: {
            fontSize: '1.2rem',
            color: '#718096',
            marginBottom: '20px'
        },
        progressContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '30px',
            justifyContent: 'center'
        },
        progressText: {
            fontSize: '1rem',
            color: '#718096',
            fontWeight: '500'
        },
        moduleNav: {
            display: 'flex',
            gap: '10px',
            marginBottom: '30px',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        moduleButton: {
            padding: '12px 20px',
            border: '2px solid #8B4513',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            color: '#8B4513',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '14px'
        },
        activeModuleButton: {
            backgroundColor: '#8B4513',
            color: 'white'
        },
        completedModuleButton: {
            backgroundColor: '#38A169',
            borderColor: '#38A169',
            color: 'white'
        },
        moduleContent: {
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
            marginBottom: '30px',
            lineHeight: '1.6'
        },
        moduleHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            paddingBottom: '20px',
            borderBottom: '2px solid #e2e8f0'
        },
        moduleTitle: {
            fontSize: '1.8rem',
            fontWeight: '600',
            color: course.color,
            margin: 0
        },
        moduleDuration: {
            backgroundColor: course.color,
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '500'
        },
        contentBody: {
            fontSize: '1.1rem',
            color: '#2D3748'
        },
        actionButtons: {
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            marginTop: '40px'
        },
        primaryButton: {
            backgroundColor: course.color,
            color: 'white',
            padding: '15px 40px',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block'
        },
        secondaryButton: {
            backgroundColor: 'transparent',
            color: course.color,
            padding: '15px 40px',
            border: `2px solid ${course.color}`,
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block'
        },
        quizSection: {
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
            maxWidth: '800px',
            margin: '0 auto'
        },
        quizTitle: {
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '10px',
            color: course.color,
            textAlign: 'center'
        },
        quizSubtitle: {
            textAlign: 'center',
            color: '#718096',
            marginBottom: '30px',
            fontSize: '1.1rem'
        },
        questionCard: {
            marginBottom: '30px',
            padding: '25px',
            border: '2px solid #e2e8f0',
            borderRadius: '15px',
            backgroundColor: '#f8fafc'
        },
        questionHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '20px'
        },
        questionNumber: {
            backgroundColor: course.color,
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '600',
            fontSize: '16px'
        },
        questionText: {
            fontSize: '1.2rem',
            fontWeight: '600',
            color: '#2D3748',
            margin: 0,
            flex: 1
        },
        optionsContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        },
        optionButton: {
            display: 'block',
            width: '100%',
            padding: '15px 20px',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            backgroundColor: 'white',
            textAlign: 'left',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '1rem'
        },
        selectedOption: {
            borderColor: course.color,
            backgroundColor: `${course.color}15`
        },
        correctOption: {
            borderColor: '#38A169',
            backgroundColor: '#F0FFF4'
        },
        incorrectOption: {
            borderColor: '#E53E3E',
            backgroundColor: '#FED7D7'
        },
        explanation: {
            marginTop: '15px',
            padding: '15px',
            backgroundColor: '#F7FAFC',
            borderRadius: '8px',
            borderLeft: `4px solid ${course.color}`,
            fontSize: '1rem',
            lineHeight: '1.5'
        },
        submitButton: {
            backgroundColor: course.color,
            color: 'white',
            padding: '15px 40px',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            margin: '20px auto',
            display: 'block'
        },
        resultsCard: {
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
            textAlign: 'center',
            border: `3px solid ${course.color}`,
            maxWidth: '600px',
            margin: '0 auto'
        },
        score: {
            fontSize: '3rem',
            fontWeight: '700',
            color: course.color,
            marginBottom: '20px'
        },
        passMessage: {
            fontSize: '1.5rem',
            color: '#38A169',
            marginBottom: '20px',
            fontWeight: '600'
        },
        failMessage: {
            fontSize: '1.5rem',
            color: '#E53E3E',
            marginBottom: '20px',
            fontWeight: '600'
        },
        completionBadge: {
            backgroundColor: '#38A169',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '20px',
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '20px',
            display: 'inline-block'
        }
    };

    // Quiz in progress
    if (showQuiz && !quizSubmitted) {
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
                            style={styles.secondaryButton}
                            onClick={() => setShowQuiz(false)}
                        >
                            Back to Module
                        </button>
                    </div>
                </nav>

                <div style={styles.content}>
                    <div style={styles.quizSection}>
                        <h2 style={styles.quizTitle}>{course.title} - Knowledge Check</h2>
                        <p style={styles.quizSubtitle}>
                            Test your understanding of the module content. You need 80% to pass.
                        </p>
                        
                        {course.quiz.map((question, qIndex) => (
                            <div key={qIndex} style={styles.questionCard}>
                                <div style={styles.questionHeader}>
                                    <div style={styles.questionNumber}>{qIndex + 1}</div>
                                    <h3 style={styles.questionText}>{question.question}</h3>
                                </div>
                                <div style={styles.optionsContainer}>
                                    {question.options.map((option, oIndex) => (
                                        <button
                                            key={oIndex}
                                            style={{
                                                ...styles.optionButton,
                                                ...(quizAnswers[qIndex] === oIndex && styles.selectedOption)
                                            }}
                                            onClick={() => handleQuizAnswer(qIndex, oIndex)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                        
                        <button 
                            style={{
                                ...styles.submitButton,
                                backgroundColor: Object.keys(quizAnswers).length === course.quiz.length ? course.color : '#A0AEC0',
                                cursor: Object.keys(quizAnswers).length === course.quiz.length ? 'pointer' : 'not-allowed'
                            }}
                            onClick={handleQuizSubmit}
                            disabled={Object.keys(quizAnswers).length !== course.quiz.length}
                        >
                            {Object.keys(quizAnswers).length === course.quiz.length 
                                ? 'Submit Quiz' 
                                : `Answer all questions (${Object.keys(quizAnswers).length}/${course.quiz.length})`
                            }
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Quiz results
    if (showQuiz && quizSubmitted) {
        const score = calculateScore();
        const passed = score >= 80;

        return (
            <div style={styles.container}>
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
                        <Link to="/courses" style={styles.secondaryButton}>
                            Back to Courses
                        </Link>
                    </div>
                </nav>

                <div style={styles.content}>
                    <div style={styles.resultsCard}>
                        <div style={styles.score}>{score}%</div>
                        
                        {passed ? (
                            <>
                                <div style={styles.passMessage}>
                                    🎉 Congratulations! You passed the quiz!
                                </div>
                                <div style={styles.completionBadge}>
                                    Module Completed ✅
                                </div>
                            </>
                        ) : (
                            <div style={styles.failMessage}>
                                📚 Keep learning! You need 80% to pass.
                            </div>
                        )}
                        
                        <div style={{marginBottom: '30px', textAlign: 'left'}}>
                            <h3 style={{color: course.color, marginBottom: '20px'}}>Quiz Review</h3>
                            {course.quiz.map((question, qIndex) => (
                                <div key={qIndex} style={styles.questionCard}>
                                    <div style={styles.questionHeader}>
                                        <div style={styles.questionNumber}>{qIndex + 1}</div>
                                        <h3 style={styles.questionText}>{question.question}</h3>
                                    </div>
                                    <div style={styles.optionsContainer}>
                                        {question.options.map((option, oIndex) => {
                                            let optionStyle = {...styles.optionButton, cursor: 'default'};
                                            if (oIndex === question.correctAnswer) {
                                                optionStyle = {...optionStyle, ...styles.correctOption};
                                            } else if (quizAnswers[qIndex] === oIndex && oIndex !== question.correctAnswer) {
                                                optionStyle = {...optionStyle, ...styles.incorrectOption};
                                            }
                                            
                                            return (
                                                <div key={oIndex} style={optionStyle}>
                                                    {option}
                                                    {oIndex === question.correctAnswer && " ✅"}
                                                    {quizAnswers[qIndex] === oIndex && oIndex !== question.correctAnswer && " ❌"}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div style={styles.explanation}>
                                        <strong>Explanation:</strong> {question.explanation}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <button 
                                style={styles.secondaryButton}
                                onClick={() => {
                                    setShowQuiz(false);
                                    setQuizSubmitted(false);
                                    setQuizAnswers({});
                                }}
                            >
                                Retake Quiz
                            </button>
                            {passed ? (
                                currentModule < course.modules.length - 1 ? (
                                    <button 
                                        style={styles.primaryButton}
                                        onClick={() => {
                                            setCurrentModule(currentModule + 1);
                                            setShowQuiz(false);
                                            setQuizSubmitted(false);
                                            setQuizAnswers({});
                                            setModuleCompleted(false);
                                        }}
                                    >
                                        Next Module
                                    </button>
                                ) : (
                                    <Link 
                                        to="/courses"
                                        style={styles.primaryButton}
                                    >
                                        Complete Course
                                    </Link>
                                )
                            ) : (
                                <button 
                                    style={styles.primaryButton}
                                    onClick={() => setShowQuiz(false)}
                                >
                                    Review Module
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Main module content view
    return (
        <div style={styles.container}>
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
                    <Link to="/courses" style={styles.secondaryButton}>
                        Back to Courses
                    </Link>
                </div>
            </nav>

            <div style={styles.content}>
                <div style={styles.header}>
                    <div style={styles.courseIcon}>{course.icon}</div>
                    <h1 style={styles.courseTitle}>{course.title}</h1>
                    <p style={styles.courseDescription}>{course.description}</p>
                    <div style={styles.progressContainer}>
                        <span style={styles.progressText}>
                            Module {currentModule + 1} of {course.modules.length}
                        </span>
                    </div>
                </div>

                <div style={styles.moduleNav}>
                    {course.modules.map((module, index) => (
                        <button
                            key={index}
                            style={{
                                ...styles.moduleButton,
                                ...(currentModule === index && styles.activeModuleButton),
                                ...(moduleCompleted && index === currentModule && styles.completedModuleButton)
                            }}
                            onClick={() => {
                                setCurrentModule(index);
                                setModuleCompleted(false);
                            }}
                        >
                            Module {index + 1}
                            {moduleCompleted && index === currentModule && " ✓"}
                        </button>
                    ))}
                </div>

                <div style={styles.moduleContent}>
                    <div style={styles.moduleHeader}>
                        <h2 style={styles.moduleTitle}>{currentModuleData.title}</h2>
                        <span style={styles.moduleDuration}>{currentModuleData.duration}</span>
                    </div>
                    
                    <div 
                        style={styles.contentBody}
                        dangerouslySetInnerHTML={{ __html: currentModuleData.content }} 
                    />
                    
                    <div style={styles.actionButtons}>
                        {currentModule > 0 && (
                            <button 
                                style={styles.secondaryButton}
                                onClick={() => {
                                    setCurrentModule(currentModule - 1);
                                    setModuleCompleted(false);
                                }}
                            >
                                Previous Module
                            </button>
                        )}
                        <button 
                            style={styles.primaryButton}
                            onClick={() => setShowQuiz(true)}
                        >
                            Take Quiz ({course.quiz.length} questions)
                        </button>
                        {currentModule < course.modules.length - 1 && (
                            <button 
                                style={styles.secondaryButton}
                                onClick={() => {
                                    setCurrentModule(currentModule + 1);
                                    setModuleCompleted(false);
                                }}
                            >
                                Next Module
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseViewer;