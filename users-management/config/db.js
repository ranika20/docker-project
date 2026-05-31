const dns = require('node:dns');


const mongoose = require('mongoose');

async function connectdb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('Connected to MongoDB Atlas successfully! ☁️🎉');
  } catch (error) {
    console.error('db connection error ❌:', error);
  }
}

module.exports = connectdb;