const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

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