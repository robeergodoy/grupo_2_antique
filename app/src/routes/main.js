// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
<<<<<<< HEAD
const productsRoute = require('./products')
const userController = require('../controllers/userController')
const userMiddleware = require('../database/middlewares/auth')
=======

function validateUser(usersList, userEmail, userPassword) {
	// si el usuario no existe, devolvemos -1
	// si el usuario existe, devolvemos el index del array

	for(let i = 0; i < usersList.length; i++) {
		if(usersList[i].email == userEmail) {
			if(bcrypt.compareSync(userPassword, usersList[i].password) == true) {
				return i
			}
		}
	}

	return -1
}
>>>>>>> d2106a57808c7550fc1feac4de29fed0d35ba0bb

/* GET - home page. */
router.get('/', mainController.root);

/* GET - register page. */
router.get('/register', userController.register);

router.post('/register', userController.registerSaveUser)

<<<<<<< HEAD
router.get('/login', userController.login)
router.post('/login', userController.validateUser)

router.get('/logout', userController.logout)

router.use('/products', productsRoute)

=======
>>>>>>> d2106a57808c7550fc1feac4de29fed0d35ba0bb
module.exports = router;
