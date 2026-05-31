                                                

const express = require('express');
const connectdb = require('./config/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
connectdb();

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
