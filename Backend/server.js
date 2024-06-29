const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const twilio = require('twilio');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: 'https://yoga-wings-palv0ybsq-dhawals-projects-bd06e0d1.vercel.app', // Vercel frontend domain
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection setup
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Twilio setup using environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Define your MongoDB schema and model here
const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

// Endpoint to handle user data submission
app.post('/api/users', async (req, res) => {
  const { name, phone, email } = req.body;
  const newUser = new User({ name, phone, email });

  try {
    await newUser.save();

    // Send WhatsApp message
    client.messages.create({
      body: `New user information:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`,
      from: 'whatsapp:+14155238886', // Twilio Sandbox number
      to: 'whatsapp:+919310827509' // Your verified number
    })
    .then(message => console.log(`WhatsApp message sent: ${message.sid}`))
    .catch(err => console.error('Error sending WhatsApp message:', err));

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error saving user data' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
