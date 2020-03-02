// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const productsRoute = require('./products')

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



/* GET - home page. */
router.get('/', mainController.root);

/* GET - register page. */
router.get('/register', mainController.register);

router.post('/register', mainController.registerSaveUser)

router.get('/login', mainController.login)
router.post('/login', mainController.validateUser)

router.use('/products', productsRoute)



module.exports = router;
