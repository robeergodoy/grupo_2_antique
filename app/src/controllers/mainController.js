const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt')
let productsJson = fs.readFileSync('./data/dataBase.json', {encoding: 'utf-8'})
var db = require('../database/models')

let userLogged = false

const controller = {

	root: (req, res, next) => {
		res.render('main', {productsList: productsJson});
	},

	register: (req,res) => {
		res.render('register');
	},

	registerSaveUser: (req, res, next) => {
		let newUser = req.body
		newUser.password = bcrypt.hashSync(newUser.password, 10)

		db.seller.create({
			name: "",
			isActive: false,
			bio: "",
			profile: newUser,
		  }, {
			include: [ 'profile' ]
		  });

		res.redirect('/')
	},

	login: (req, res, next) => {
		res.render('login')
	},

	validateUser: (req, res, next) => {

		let userInfo = req.body
		if(validateUser(usersListJson, userInfo.email, userInfo.password) != -1) {
			userLogged = true
		}

		console.log("..............................", userLogged);
		
		res.redirect('/')
	}
};

module.exports = controller;
