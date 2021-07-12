const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// .env Access
dotenv.config();

// Express Setup
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Testing Initial Connection
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// Connect to MongoDB
mongoose.connect(
  process.env.MDB_CONNECT_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log('Connected to MongoDB');
  }
);
