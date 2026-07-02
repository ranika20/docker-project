                                                

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectdb = require('./config/db');
require('dotenv').config();

const allowedOrigins = [
  'http://127.0.0.1:5501',
  'http://localhost:3000',
  'http://localhost:3001',
  process.env.RENDER_EXTERNAL_URL
].filter(Boolean);

const app = express();
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
const port = process.env.PORT || 3000;

app.use(express.json());
// מייבאים את הראוטר שכתבנו קודם
const userRouters = require('./routes/users');
connectdb();

if (!process.env.JWT_SECRET) {
  console.log('JWT_SECRET is not defined in the environment variables. Please set it to a secure value.');
  process.exit(1);
}

app.use('/api/users', userRouters);
// app.use('/api/users', userRouters);
// "http://localhost:3000/api/users"

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server.');
  console.log('Use the following endpoint to get the list of users:');
  console.log(`App is running on !!!!! ${port}`);
  console.log(`hello world`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the User Management API!');
});

app.get('/health', (req, res) => {
  const dbstatus = ['connected', 'disconnected', 'connecting', 'disconnecting'];
  const dbconnect = mongoose.connection.readyState === 1;
  res.status(dbconnect ? 200 : 500).json({
    status: dbconnect ? 'OK' : 'ERROR',
    database: dbstatus[dbconnect ? 0 : 1],
    message: dbconnect ? 'Database connection is healthy.' : 'Database connection is not healthy.',
  });
});

