// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);

/* GET - register page. */
router.get('/register', mainController.register);

router.post('/register', mainController.registerSaveUser)

router.get('/products', mainController.products);

router.get('/productDetail/:id', mainController.productDetail);

router.get('/productCart', mainController.productCart);

module.exports = router;
