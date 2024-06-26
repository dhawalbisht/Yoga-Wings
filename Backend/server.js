const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const dbURI = 'mongodb+srv://alexstantall:yogawings@cluster0.nyzghfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  name: String,
  phone:Number,
  email: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/users', async (req, res) => {
  const { name, phone, email } = req.body;
  const newUser = new User({ name, phone,email  });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error saving user data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
