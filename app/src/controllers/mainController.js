const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt')
let productsJson = fs.readFileSync('./data/dataBase.json', {encoding: 'utf-8'})
let usersListJson = fs.readFileSync('./data/users.json')

productsJson = JSON.parse(productsJson)
usersListJson = JSON.parse(usersListJson)



// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let filePath = path.join(__dirname, `/../views/${fileName}`);
	let htmlFile = fs.readFileSync(filePath, 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		res.render('main', {productsList: productsJson});
	},

	register: (req,res) => {
		res.render('register');
	},

	registerSaveUser: (req, res) => {
		let newUser = req.body

		newUser.password = bcrypt.hashSync(newUser.password, 10)
		newUser.category = ""
		newUser.id = usersListJson.length

		usersListJson.push(newUser)
		usersListJson = JSON.stringify(usersListJson)

		fs.writeFileSync('./data/users.json', usersListJson)

		res.redirect('/')
	}
};

module.exports = controller;
