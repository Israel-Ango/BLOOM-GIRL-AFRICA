import React from 'react';

const ProfileAchievements = ({ user, courseProgress, generateCertificate, shareCertificate }) => {
    
    const styles = {
        achievementsSection: {
            backgroundColor: '#f8f8f8',
            padding: '20px',
            borderRadius: '10px',
            marginTop: '20px',
            borderLeft: '4px solid #FFD700'
        },
        achievementsTitle: {
            color: '#8B4513',
            marginBottom: '15px',
            fontSize: '1.3rem',
            fontWeight: '600'
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
        completionMessage: {
            color: '#276749',
            fontWeight: '600',
            marginBottom: '15px'
        },
        progressText: {
            color: '#718096',
            marginBottom: '10px',
            fontSize: '0.95rem'
        },
        progressStats: {
            color: '#4A5568',
            fontSize: '14px',
            marginTop: '5px'
        }
    };

    const completedSDGs = Object.values(courseProgress).filter(p => p === 100).length;
    const certificateEarned = localStorage.getItem('certificateEarned');

    return (
        <div style={styles.achievementsSection}>
            <h3 style={styles.achievementsTitle}>🎓 Your Achievements</h3>
            
            {certificateEarned ? (
                <div>
                    <p style={styles.completionMessage}>
                        ✅ Master of Sustainable Development - Completed all 17 SDGs
                    </p>
                    <button 
                        style={styles.courseButton}
                        onClick={generateCertificate}
                    >
                        View Certificate
                    </button>
                    <button 
                        style={{...styles.courseButton, backgroundColor: '#D2691E', marginLeft: '10px'}}
                        onClick={shareCertificate}
                    >
                        Share Achievement
                    </button>
                </div>
            ) : (
                <div>
                    <p style={styles.progressText}>
                        Complete all 17 Sustainable Development Goals to earn your certificate!
                    </p>
                    <div style={styles.progressBar}>
                        <div 
                            style={{
                                ...styles.progressFill,
                                width: `${(completedSDGs / 17) * 100}%`
                            }} 
                        />
                    </div>
                    <p style={styles.progressStats}>
                        Progress: {completedSDGs} of 17 SDGs completed
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProfileAchievements;