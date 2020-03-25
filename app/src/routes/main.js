// ************ Require's ************
const express = require('express');
const router = express.Router();
const userRouter = require('./user')

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const userController = require('../controllers/userController')

/* GET - home page. */
router.get('/', mainController.root);

/* GET - register page. */
router.use('/user', userRouter)

module.exports = router;
