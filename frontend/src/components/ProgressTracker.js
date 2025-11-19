import React from 'react';

const ProgressTracker = ({ courseProgress }) => {
    
    const styles = {
        progressContainer: {
            backgroundColor: '#f7fafc',
            padding: '15px',
            borderRadius: '10px',
            marginTop: '20px',
            border: '1px solid #e2e8f0'
        },
        progressHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px'
        },
        progressLabel: {
            fontWeight: '600',
            color: '#4A5568'
        },
        progressCount: {
            fontWeight: '700',
            color: '#8B4513'
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
        certificateEarned: {
            textAlign: 'center',
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#C6F6D5',
            borderRadius: '5px',
            color: '#276749',
            fontWeight: '600'
        }
    };

    const completedSDGs = Object.values(courseProgress).filter(p => p === 100).length;
    const certificateEarned = localStorage.getItem('certificateEarned');

    return (
        <div style={styles.progressContainer}>
            <div style={styles.progressHeader}>
                <span style={styles.progressLabel}>SDG Completion Progress</span>
                <span style={styles.progressCount}>{completedSDGs}/17</span>
            </div>
            <div style={styles.progressBar}>
                <div 
                    style={{
                        ...styles.progressFill,
                        width: `${(completedSDGs / 17) * 100}%`
                    }} 
                />
            </div>
            {certificateEarned && (
                <div style={styles.certificateEarned}>
                    🎓 Certificate Earned! View in Profile
                </div>
            )}
        </div>
    );
};

export default ProgressTracker;