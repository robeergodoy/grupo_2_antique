// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const productsRoute = require('./products')
const userController = require('../controllers/userController')
const userMiddleware = require('../database/middlewares/auth')

/* GET - home page. */
router.get('/', mainController.root);

/* GET - register page. */
router.get('/register', userController.register);

router.post('/register', userController.registerSaveUser)

router.get('/login', userController.login)
router.post('/login', userController.validateUser)

router.get('/logout', userController.logout)

router.use('/products', productsRoute)

module.exports = router;
