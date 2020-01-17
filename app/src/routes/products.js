const express = require('express')
const router = express.Router()

const productsController = require('../controllers/productsController')

router.get('/', productsController.products)

router.get('/:id', productsController.productDetail)

router.get('/create', productsController.productCreate)

router.get('/:id/edit', productsController.productEdit)



module.exports = router