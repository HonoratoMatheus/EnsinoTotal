const express = require('express')
const { getAllUsers, createUser } = require('./../controllers/userController')
const { signup, login } = require('./../controllers/authController')
const router = express.Router();

router.route('/signup').post(signup)

router.route('/login').post(login)

router.route('/')
    .get(getAllUsers)
    .post(createUser)

module.exports = router; 