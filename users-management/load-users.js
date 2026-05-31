
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./model/User");
const connectdb = require("./config/db");

const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    age: 25,
    password: "password123",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    age: 30,
    password: "securePass456",
  },
  {
    name: "Mike Johnson",
    email: "mike@example.com",
    age: 22,
    password: "mike789",
  },
  {
    name: "Sarah Wilson",
    email: "sarah@example.com",
    age: 28,
    password: "sarah321",
  },
  {
    name: "David Brown",
    email: "david@example.com",
    age: 35,
    password: "david654",
  },
  {
    name: "ran karasenti",
    email: "ran@example.com",
    age: 30,
    password: "ran123",
  },
];
async function insertUsers() {
  try {
   
    await connectdb();

    await User.deleteMany({});
    console.log("Existing users deleted successfully");
    await User.insertMany(users);
    console.log("Users inserted successfully");
  } catch (error) {
    console.error("Error inserting users:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Closed connection bye bye");
  }
}

insertUsers();
