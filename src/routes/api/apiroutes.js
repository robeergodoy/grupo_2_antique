const express = require('express')
const router = express.Router()

var apiProductsController = require('../../controllers/api/apiProductsController')
var apiUsersController = require('../../controllers/api/apiUsersControllers')

router.get('/products', apiProductsController.products)

router.get('/users', apiUsersController.users)
router.get('/users/:id', apiUsersController.findUser)


module.exports = router