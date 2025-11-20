# Bloom Girl Africa - Educational Platform

## 🌸 Project Overview
Bloom Girl Africa is a transformative educational platform dedicated to empowering young African girls through comprehensive education about the United Nations Sustainable Development Goals (SDGs). The platform provides culturally-relevant learning experiences and awards certificates upon completion.

## 🎯 Mission & Vision
Mission: To educate and empower African girls about sustainable development through engaging, culturally-relevant content and recognized certification.

Vision: Creating a generation of informed African women leaders who understand and can contribute to achieving the UN Sustainable Development Goals.

## 🌍 Deployment

frontend - https://bloom-girl-africa.vercel.app/

backend - https://bloom-girl-africa.onrender.com

presentation slide - https://gamma.app/docs/Bloom-Girl-Africa-Cultivating-Future-Leaders-k2xvs7t5bsydwzw

## 🚀 Core Features

### A. Application Pages

#### 1. Landing Page (/)
Hero Section: Impactful banner with logo and mission-focused tagline

Content Section: Inspirational content about girl child education and gender equality

Image Gallery: Placeholder images showcasing African girls in educational settings

Call-to-Action: "Log In" and "Sign Up" buttons

#### 2. User Registration Page (/signup)
Comprehensive Form Fields:

Full Name, Age, Date of Birth

Country (African nations dropdown)

Sex (Inclusive options)

Qualification (Educational background)

Email, Phone Number, Password

Data Consent: Required consent checkbox for data usage

Auto-Login: Automatic login and dashboard redirect upon successful registration

#### 3. User Login Page (/login)
Simple Authentication: Email and password login

Error Handling: Clear feedback for failed attempts

Secure Redirect: Dashboard access upon successful authentication

#### 4. User Dashboard (/dashboard)
Personalized Welcome: "Welcome back, [User's Name]!"

Child-Friendly Design: Bright, engaging color scheme (oranges, yellows, greens, purples)

SDG Progress Grid: All 17 SDG modules with visual progress indicators

Progress Tracking: Overall completion summary and individual module status

### B. Course & Certificate System
#### 1. Course Modules (/module/:id)
17 Comprehensive Modules: One for each UN Sustainable Development Goal

Educational Content: Placeholder text with structured learning material

Quiz Integration: "Take Quiz" button at module completion

#### 2. Quiz Functionality (/module/:id/quiz)
Assessment: 5 multiple-choice questions per module

Progression Logic: 80% passing score required

Retake Option: Unlimited attempts with material review

#### 3. Certificate System
Automatic Trigger: Completion of all 17 modules

Professional Design: PDF certificate with:

Organization logos

Student's full name

Completion date

Unique certificate ID

Email Delivery: Automated certificate delivery via Nodemailer

## 🛠 Technical Stack
### Frontend
React.js with functional components and hooks

React Router DOM for navigation

Axios for API communication

Inline CSS with JavaScript objects for styling

### Backend
Node.js with Express.js framework

MongoDB with Mongoose ODM

JWT for authentication

bcryptjs for password hashing

PDFKit/jSPDF for certificate generation

Nodemailer for email services

### Database Models
User Model
Personal information (name, age, DOB, country, sex, qualification)

Contact details (email, phone)

Authentication (hashed password)

Consent tracking

Progress Model
User ID reference

Module completion status

Quiz scores and attempts

Overall progress tracking

## 📁 Project Structure
```bash
bloom-girl-africa/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LandingPage.js
│   │   │   ├── SignUp.js
│   │   │   ├── Login.js
│   │   │   ├── Dashboard.js
│   │   │   ├── CourseModule.js
│   │   │   ├── Quiz.js
│   │   │   ├── CertificateModal.js
│   │   │   ├── ProgressTracker.js
│   │   │   └── ProfileAchievements.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   ├── public/
│   │   ├── images/
│   │   └── index.html
│   └── package.json
├── backend/
│   ├── server.js
│   ├── models/
│   │   ├── User.js
│   │   └── Progress.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── progress.js
│   │   └── certificate.js
│   ├── middleware/
│   │   └── auth.js
│   └── package.json
└── README.md
```

## 🎨 Design Philosophy
### Color Scheme
Primary: Warm earth tones reflecting African heritage

Secondary: Bright, hopeful colors (oranges, yellows, greens, purples)

Accents: Gold (#FFD700) and bronze (#D2691E) highlights

### User Experience
Child-Friendly: Engaging visuals, simple navigation

Culturally Relevant: African-centered content and imagery

Progressive Disclosure: Step-by-step learning approach

Gamification: Progress tracking and achievement recognition

## 🔐 Security Features
Password Hashing: bcryptjs with salt rounds

JWT Authentication: Secure session management

Protected Routes: Authentication-required access

Input Validation: Comprehensive form validation

Data Encryption: Secure user data storage

## 📊 SDG Modules Coverage
All 17 United Nations Sustainable Development Goals:

No Poverty

Zero Hunger

Good Health & Well-being

Quality Education

Gender Equality

Clean Water & Sanitation

Affordable & Clean Energy

Decent Work & Economic Growth

Industry, Innovation & Infrastructure

Reduced Inequalities

Sustainable Cities & Communities

Responsible Consumption & Production

Climate Action

Life Below Water

Life on Land

Peace, Justice & Strong Institutions

Partnerships for the Goals

## 🚀 Installation & Setup
Prerequisites
Node.js (v14 or higher)

MongoDB (local or Atlas)

npm or yarn

Backend Setup
```bash
cd backend
npm install
# Create .env file with:
# MONGODB_URI=mongodb://localhost:27017/bloomgirl
# JWT_SECRET=your_jwt_secret
# EMAIL_SERVICE=gmail
# EMAIL_USER=your_email@gmail.com
# EMAIL_PASS=your_app_password
npm start
```
Frontend Setup
```bash
cd frontend
npm install
npm start
```
Database Population
The application will automatically create necessary collections. Sample SDG data is hardcoded in the frontend components.

## 📧 Email Configuration
The system uses Nodemailer for certificate delivery. Configure in backend .env:

env
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

## 🎯 Target Audience
Primary: African girls aged 10-25

Educational Background: Primary school to undergraduate level

Geographic Focus: All 54 African nations

Language: English (with potential for multi-language expansion)

## 🌟 Unique Value Propositions
Culturally Relevant Content: African perspectives on global goals

Recognized Certification: Partnership with SNART FOUNDATION

Progressive Learning: Structured module-based education

Child-Centric Design: Engaging interface for young learners

Comprehensive Coverage: All 17 UN SDGs in one platform

## 🔄 Future Enhancements
Multi-language support for African languages

Mobile app development

Offline learning capabilities

Community features and forums

Advanced analytics and reporting

Integration with local educational systems

## 👥 Team Members
| Name              | Email                                                 | Role                       |
| ----------------- | ----------------------------------------------------- | -------------------------- |
| Jennifer Omoregie | jennylightomoregie@gmail.com                          |  Backend Developer         |
| Israel Ango       | angoyacham007@gmail.com                               | Frontend Developer         |

## 🤝 Partnerships
SNART FOUNDATION: Primary certification partner

African Educational Institutions: Content validation and recognition

Local Communities: Implementation and outreach

## 📞 Support & Contact
For technical support or partnership inquiries, contact the development team through the platform's contact form.

##  Authors
ISRAEL ANGO - FOUNDER

JENNIFER OMOREGIE - CO-FOUNDER
