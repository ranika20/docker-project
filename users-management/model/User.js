const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'user name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    lowercase: true,
    trim: true  
  },
  age: {
    type: Number,
    required: [true, 'age is required'],
    min: [0, 'Age cannot be negative']
  },
  
  password: {
    type: String,
    required: [true, 'password is required']
  }

}, { timestamps: true }

);

module.exports = mongoose.model('User', userSchema);