const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const twilio = require('twilio');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
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
  let { name, phone, email } = req.body;

  // Add +91 to the phone number if it does not start with +
  if (!phone.startsWith('+')) {
    phone = `+91${phone}`;
  }

  // Validate phone number using Abstract API
  const apiKey = process.env.ABSTRACT_API_KEY;
  const url = `https://phonevalidation.abstractapi.com/v1/?api_key=${apiKey}&phone=${phone}`;

  try {
    const validationResponse = await axios.get(url);
    const isValid = validationResponse.data.valid;

    if (!isValid) {
      return res.status(400).json({ error: 'Invalid phone number' });
    }

    const newUser = new User({ name, phone, email });
    await newUser.save();

    // Send WhatsApp message (example using Twilio)
    client.messages.create({
      body: `New user information:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`,
      from: 'whatsapp:+14155238886', // Twilio Sandbox number
      to: 'whatsapp:+919310827509' // Your verified number
    })
    .then(message => console.log(`WhatsApp message sent: ${message.sid}`))
    .catch(err => console.error('Error sending WhatsApp message:', err));

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ error: 'Error saving user data' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
