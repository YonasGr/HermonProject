const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// User validation endpoint
app.post('/api/validate-user', (req, res) => {
  const { username, email, password } = req.body;
  
  const errors = {};
  
  // Username validation
  if (!username || username.trim() === '') {
    errors.username = 'Username is required';
  } else if (username.length < 3) {
    errors.username = 'Username must be at least 3 characters long';
  } else if (username.length > 20) {
    errors.username = 'Username must not exceed 20 characters';
  } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    errors.username = 'Username can only contain letters, numbers, and underscores';
  }
  
  // Email validation
  if (!email || email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Password validation
  if (!password || password.trim() === '') {
    errors.password = 'Password is required';
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
  }
  
  // Check if there are any errors
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      errors: errors
    });
  }
  
  // If validation passes
  res.status(200).json({
    success: true,
    message: 'User validation successful!',
    user: {
      username: username,
      email: email
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
