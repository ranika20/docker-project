const User = require('../model/User');

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
async function getUserById(req, res) {
    try {
     const user = await User.findById(req.params.id);
      console.log(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user); 
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};


async function createUser(req, res) {
    try {  
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: "Failed to create user", error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser
};