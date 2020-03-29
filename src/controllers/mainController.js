const bcrypt = require('bcrypt')
var db = require('../database/models')

let userLogged = false

const controller = {

	root: (req, res, next) => {
		db.product.findAll({
			include: [
				{
					model: db.images
				}
			]
		}).then(products => {
			res.render('main', {productsList: products})
		})
	},

	register: (req,res) => {
		res.render('register');
	},

	registerSaveUser: (req, res, next) => {
		let newUser = req.body
		newUser.password = bcrypt.hashSync(newUser.password, 10)

		db.seller.findOrCreate({
			where: { },
			include: [ {
				model: db.user,
				as: 'profile',
				where: {
				    email: newUser.email
				}
			}],
			defaults: {
				name: "",
				isActive: false,
				bio: "",
				profile: newUser
			}
		})
		.spread((seller, created) => {
			if (created) {
				  res.redirect('/')
			} else {
				res.redirect('/register')
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
				let hash = user.dataValues.password
				let isMatch = bcrypt.compareSync(password, hash, function(err, result) { return result })
				if(isMatch) {
					userLogged = true
				}
				console.log("..............................", userLogged);
				res.redirect('/')
			}
		)	
	}
};

module.exports = controller;
