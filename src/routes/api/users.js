const express = require('express')
const router = express.Router()

var usersRouters = require('../../../public/javascripts/users');

router.use('/users', usersRouters)


module.exports = router