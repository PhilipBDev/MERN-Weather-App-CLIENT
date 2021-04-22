const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

// Express + ENV
const app = express();
const PORT = process.env.PORT;

// Initialize Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('users', require('./routes/user'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => res.send('API Running now'));
