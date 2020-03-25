const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/register', userController.register);
router.post('/register', userController.registerSaveUser)

router.get('/login', userController.login)
router.post('/login', userController.validateUser)

router.get('/logout', userController.logout)

router.get('/profile', userController.profile)
router.put('/profile/:email', userController.profileUpdate)

router.delete('/delete/:email', userController.deleteUser)

module.exports = router