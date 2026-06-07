const express = require('express');
const router = express.Router();
const { getAllUsers, createUser , getUserById} = require('../controllers/users.controller');

    
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);

// מייצאים את הראוטר כדי שנוכל לחבר אותו לקובץ המרכזי (server.js או app.js)
module.exports = router;