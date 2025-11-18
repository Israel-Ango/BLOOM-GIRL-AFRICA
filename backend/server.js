const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// ---------------------
// CORS CONFIGURATION
// ---------------------

const allowedOrigins = [
    'http://localhost:3000',
    process.env.FRONTEND_URL   // Your deployed frontend URL on Render
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (e.g., mobile apps, curl)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error(`CORS blocked for origin: ${origin}`));
        }
    },
    credentials: true
}));

app.use(express.json());

// ---------------------
// DATABASE CONNECTION
// ---------------------

// Use Cloud DB if available, otherwise fallback to local DB for development
const MONGO_URI = process.env.MONGO_URI || process.env.MONGO_URI_LOCAL;

if (!MONGO_URI) {
    console.error('❌ ERROR: No MongoDB URI found in environment variables.');
    process.exit(1);
}

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB!');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
        console.error(error);
        process.exit(1);
    }
};

connectDB();

// ---------------------
// SCHEMAS AND MODELS
// ---------------------

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    dateOfBirth: Date,
    country: String,
    sex: String,
    qualification: String,
    email: { type: String, unique: true },
    phoneNumber: String,
    password: String,
    consentGiven: Boolean,
    createdAt: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
    status: { type: String, default: 'new' }
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.correctPassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
const Contact = mongoose.model('Contact', contactSchema);

// ---------------------
// ROUTES
// ---------------------

app.get('/api/health', (req, res) => {
    res.json({ success: true, message: 'Server is running 🚀' });
});

// CONTACT FORM
app.post('/api/contact', async (req, res) => {
    try {
        const newMessage = await Contact.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Message received!',
            data: newMessage
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error saving message' });
    }
});

// SIGNUP
app.post('/api/auth/signup', async (req, res) => {
    try {
        const user = await User.create(req.body);

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.status(201).json({
            success: true,
            message: 'User created',
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Signup error' });
    }
});

// LOGIN
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials' });

        const valid = await user.correctPassword(password);
        if (!valid) return res.status(401).json({ success: false, message: 'Invalid credentials' });

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({ success: true, token, user });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Login error' });
    }
});

// ---------------------
// START SERVER
// ---------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
