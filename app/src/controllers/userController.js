let db = require('../database/models')
let bcrypt = require('bcrypt')

let userController = {
    register: (req,res) => {
		res.render('register');
	},

	registerSaveUser: (req, res, next) => {
		let newUser = req.body
        newUser.password = bcrypt.hashSync(newUser.password, 10)
		
		db.user.findOne({
			where: {
				email: newUser.email
			}
		})
			.then(user => {
				if(!user) {
					db.user.create({
						email: newUser.email,
						password: newUser.password,
						firstName: newUser.firstName,
						lastName: newUser.lastName,
					})
					res.redirect('/')
				} else {
					res.render('userExists')
				}
			})
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
					
					let hash = user.dataValues.password
					let isMatch = bcrypt.compareSync(password, hash)
					let userLogged = false
					
					if(isMatch) {
						// userLogged = true
						res.locals.isAuthenticated = true
					}
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
	},

	profile: (req, res, next) => {
		res.render('userProfile')
	},

	profileUpdate: (req, res, next) => {
		let info = req.body
		
		db.user.update({
			firstName: info.firstName,
			lastName: info.lastName,
			email: info.email
		},{
			where: {
				email: info.email
			}
		})

		res.redirect('/')
	},

	deleteUser: (req, res) => {
		let email = req.params.email
		
		db.user.destroy({
			where: {
				email: email
			}
		})
		res.redirect('/')
	}
}

module.exports = userController