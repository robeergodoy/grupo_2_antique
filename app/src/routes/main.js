// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const productsRoute = require('./products')

/* GET - home page. */
router.get('/', mainController.root);

/* GET - register page. */
router.get('/register', mainController.register);

router.post('/register', mainController.registerSaveUser)

router.use('/products', productsRoute)


module.exports = router;
