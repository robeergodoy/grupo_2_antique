// function findUserIndex(usersList, userEmail, userPassword) {
// 	// si el usuario no existe, devolvemos -1
// 	// si el usuario existe, devolvemos el index del array

// 	for(let i = 0; i < usersList.length; i++) {
// 		if(usersList[i].email == userEmail) {
// 			if(bcrypt.compareSync(userPassword, usersList[i].password) == true) {
// 				return i
// 			}
// 		}
// 	}

// 	return -1
// }

let db = require('../database/models')
let bcrypt = require('bcrypt')
// let moment = require('moment')

let userController = {
    register: (req,res) => {
		res.render('register');
	},

	registerSaveUser: (req, res, next) => {
		let newUser = req.body
        newUser.password = bcrypt.hashSync(newUser.password, 10)

		db.user.create({
			email: newUser.email,
			password: newUser.password,
			firstName: newUser.firstName,
			lastName: newUser.lastName,
			// createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
			// updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
		})

		res.redirect('/')

		// db.seller.findOrCreate({
		// 	where: { },
		// 	include: [ {
		// 		model: db.user,
		// 		as: 'profile',
		// 		where: {
		// 		    email: newUser.email
		// 		}
		// 	}],
		// 	defaults: {
		// 		name: "",
		// 		isActive: false,
		// 		bio: "",
		// 		profile: newUser
		// 	}
		// })
		// .spread((seller, created) => {
		// 	if (created) {
		// 		  res.redirect('/')
		// 	} else {
		// 		res.redirect('/register')
		// 	}
		// })
	},

	login: (req, res, next) => {
		res.render('login')
	},

	validateUser: (req, res, next) => {

		let {email, password} = req.body

		db.user.findOne({
			where: {
				email: email
			}
		}).then(
			user => {
				if(user) {
					delete user.password
					req.session.user = user
					res.locals.user = req.session.user

					console.log(user);
					
					let hash = user.dataValues.password
					let isMatch = bcrypt.compareSync(password, hash)//, function(err, result) { return result })
					let userLogged = false
					
					if(isMatch) {
						// userLogged = true
						res.locals.isAuthenticated = true
					}
					console.log("..............................", res.locals.isAuthenticated);
					res.redirect('/')
				} else {
					res.send('no existis')
				}
			}
        )	
	},
	
	logout: (req, res, next) => {
		res.locals.isAuthenticated = false
		delete req.session.user

		res.redirect('/')
	}
}

module.exports = userController