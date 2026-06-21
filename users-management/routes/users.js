const express = require('express');
const router = express.Router();
const { getAllUsers, createUser , getUserById , deleteUser } = require('../controllers/users.controller');

    
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUser);

// מייצאים את הראוטר כדי שנוכל לחבר אותו לקובץ המרכזי (server.js או app.js)
module.exports = router;