                                                

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectdb = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json());
// מייבאים את הראוטר שכתבנו קודם
const userRouters = require('./routes/users');
connectdb();

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
