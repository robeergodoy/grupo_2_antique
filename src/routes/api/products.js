const express = require('express')
const router = express.Router()

var productsRouters = require('../../../public/javascripts/products');

router.use('/products', productsRouters)


module.exports = router