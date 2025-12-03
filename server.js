const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Subscriber Schema
const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
  ipAddress: String,
  userAgent: String,
}, { timestamps: true });

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Sheen Coming Soon API',
    version: '1.0.0',
    endpoints: {
      subscribe: 'POST /api/subscribe',
      count: 'GET /api/subscribers/count',
      list: 'GET /api/subscribers (admin only)'
    }
  });
});

// Subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.match(/^\S+@\S+\.\S+$/)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    const existingSubscriber = await Subscriber.findOne({ 
      email: email.toLowerCase() 
    });

    if (existingSubscriber) {
      return res.status(409).json({
        success: false,
        message: 'This email is already subscribed!'
      });
    }

    const subscriber = await Subscriber.create({
      email: email.toLowerCase(),
      ipAddress: req.ip,
      userAgent: req.get('user-agent')
    });

    // Here you would integrate NodeMailer
    // await sendWelcomeEmail(email);
    // await sendAdminNotification(email);

    res.status(201).json({
      success: true,
      message: 'Thank you for subscribing!',
      data: {
        email: subscriber.email,
        subscribedAt: subscriber.subscribedAt
      }
    });

  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
});

// Get subscriber count
app.get('/api/subscribers/count', async (req, res) => {
  try {
    const count = await Subscriber.countDocuments();
    res.json({ success: true, count });
  } catch (error) {
    console.error('Error fetching count:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch subscriber count'
    });
  }
});

// Get all subscribers (admin only - add authentication in production)
app.get('/api/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
      .select('-__v')
      .sort({ subscribedAt: -1 });
    
    res.json({
      success: true,
      count: subscribers.length,
      data: subscribers
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch subscribers'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Express server running on http://localhost:${PORT}`);
  console.log(`📧 Ready to accept subscriptions!`);
});

module.exports = app;
