import React from 'react';

const CertificateModal = ({ user, showCertificate, setShowCertificate, courseProgress }) => {
    
    const generateCertificate = () => {
        const certificateData = {
            studentName: user?.name,
            completionDate: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            courseName: '17 UN Sustainable Development Goals',
            certificateId: `BGA-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        };

        const certificateHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Certificate of Completion</title>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap');
                    
                    body {
                        margin: 0;
                        padding: 40px;
                        background: linear-gradient(135deg, #fefaf0 0%, #fff5e6 100%);
                        font-family: 'Inter', sans-serif;
                    }
                    
                    .certificate {
                        width: 1000px;
                        height: 700px;
                        background: white;
                        border: 20px solid #8B4513;
                        border-radius: 20px;
                        padding: 50px;
                        text-align: center;
                        position: relative;
                        box-shadow: 0 20px 60px rgba(139, 69, 19, 0.3);
                        margin: 0 auto;
                    }
                    
                    .gold-border {
                        border: 3px solid #FFD700;
                        border-radius: 10px;
                        height: 100%;
                        padding: 40px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    .logo {
                        width: 80px;
                        height: 80px;
                        margin-bottom: 20px;
                    }
                    
                    .title {
                        font-family: 'Playfair Display', serif;
                        font-size: 48px;
                        color: #8B4513;
                        margin: 10px 0;
                        text-transform: uppercase;
                        letter-spacing: 3px;
                    }
                    
                    .subtitle {
                        font-size: 24px;
                        color: #D2691E;
                        margin-bottom: 40px;
                        font-weight: 600;
                    }
                    
                    .awarded-to {
                        font-size: 18px;
                        color: #666;
                        margin-bottom: 10px;
                    }
                    
                    .student-name {
                        font-family: 'Playfair Display', serif;
                        font-size: 42px;
                        color: #8B4513;
                        margin: 20px 0;
                        padding: 10px 40px;
                        border-bottom: 3px solid #FFD700;
                        display: inline-block;
                    }
                    
                    .completion-text {
                        font-size: 20px;
                        color: #555;
                        margin: 30px 0;
                        line-height: 1.6;
                    }
                    
                    .course-name {
                        font-size: 28px;
                        color: #8B4513;
                        font-weight: 700;
                        margin: 20px 0;
                    }
                    
                    .date {
                        font-size: 18px;
                        color: #666;
                        margin: 20px 0;
                    }
                    
                    .signatures {
                        display: flex;
                        justify-content: space-between;
                        width: 80%;
                        margin-top: 50px;
                    }
                    
                    .signature {
                        text-align: center;
                    }
                    
                    .signature-line {
                        width: 200px;
                        border-top: 2px solid #8B4513;
                        margin: 10px 0;
                    }
                    
                    .certificate-id {
                        position: absolute;
                        bottom: 20px;
                        right: 30px;
                        font-size: 14px;
                        color: #999;
                    }
                    
                    .watermark {
                        position: absolute;
                        opacity: 0.1;
                        font-size: 120px;
                        color: #8B4513;
                        transform: rotate(-45deg);
                        top: 30%;
                        left: 10%;
                        font-family: 'Playfair Display', serif;
                    }
                    
                    .achievement {
                        background: #FFD700;
                        color: #8B4513;
                        padding: 10px 30px;
                        border-radius: 25px;
                        font-weight: 600;
                        margin: 20px 0;
                        display: inline-block;
                    }
                </style>
            </head>
            <body>
                <div class="certificate">
                    <div class="gold-border">
                        <div class="watermark">BLOOM GIRL</div>
                        
                        <div style="color: #8B4513; font-size: 14px; margin-bottom: 10px;">CERTIFICATE OF EXCELLENCE</div>
                        <div class="title">Certificate of Completion</div>
                        <div class="subtitle">Awarded for Outstanding Achievement</div>
                        
                        <div class="awarded-to">This certificate is proudly presented to</div>
                        <div class="student-name">${certificateData.studentName}</div>
                        
                        <div class="completion-text">
                            has successfully completed all requirements and demonstrated exceptional commitment to learning about
                        </div>
                        
                        <div class="course-name">The 17 United Nations Sustainable Development Goals</div>
                        
                        <div class="achievement">
                            🏆 Master of Sustainable Development 🏆
                        </div>
                        
                        <div class="completion-text">
                            demonstrating comprehensive understanding of global sustainability challenges and solutions
                        </div>
                        
                        <div class="date">Completed on ${certificateData.completionDate}</div>
                        
                        <div class="signatures">
                            <div class="signature">
                                <div class="signature-line"></div>
                                <div>Director of Education</div>
                                <div style="color: #8B4513; font-weight: 600;">Bloom Girl Africa</div>
                            </div>
                            <div class="signature">
                                <div class="signature-line"></div>
                                <div>Executive Director</div>
                                <div style="color: #8B4513; font-weight: 600;">SNART Foundation</div>
                            </div>
                        </div>
                        
                        <div class="certificate-id">Certificate ID: ${certificateData.certificateId}</div>
                    </div>
                </div>
            </body>
            </html>
        `;

        const certificateWindow = window.open('', '_blank');
        certificateWindow.document.write(certificateHTML);
        certificateWindow.document.close();
        
        setTimeout(() => {
            certificateWindow.print();
        }, 1000);
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
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000
        },
        modal: {
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '20px',
            textAlign: 'center',
            maxWidth: '500px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            border: '3px solid #FFD700'
        },
        celebration: {
            fontSize: '4rem',
            marginBottom: '20px'
        },
        title: {
            fontSize: '2rem',
            fontWeight: '700',
            color: '#8B4513',
            marginBottom: '20px'
        },
        message: {
            fontSize: '1.2rem',
            color: '#718096',
            marginBottom: '30px',
            lineHeight: '1.6'
        },
        buttonGroup: {
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        primaryButton: {
            backgroundColor: '#8B4513',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '16px'
        },
        secondaryButton: {
            backgroundColor: '#D2691E',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '16px'
        }
    };

    if (!showCertificate) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <div style={styles.celebration}>🎓🏆✨</div>
                <h2 style={styles.title}>Amazing Achievement!</h2>
                <p style={styles.message}>
                    Congratulations, <strong>{user?.name}</strong>! You've successfully completed 
                    all 17 UN Sustainable Development Goals. Your dedication to learning about 
                    global sustainability is truly inspiring.
                </p>
                <p style={styles.message}>
                    You are now a certified <strong>Master of Sustainable Development</strong>!
                </p>
                <div style={styles.buttonGroup}>
                    <button 
                        style={styles.primaryButton}
                        onClick={generateCertificate}
                    >
                        🖨️ Download Certificate
                    </button>
                    <button 
                        style={styles.secondaryButton}
                        onClick={shareCertificate}
                    >
                        📢 Share Achievement
                    </button>
                    <button 
                        style={{...styles.secondaryButton, backgroundColor: '#718096'}}
                        onClick={() => setShowCertificate(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CertificateModal;