const fs = require('fs');
const path = require('path');

let productsJson = fs.readFileSync('./public/dataBase.json', {encoding: 'utf-8'})
productsJson = JSON.parse(productsJson)


// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let filePath = path.join(__dirname, `/../views/${fileName}`);
	let htmlFile = fs.readFileSync(filePath, 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		res.render('index', {productList: productsJson});
	},

	register: (req,res) => {
		res.render('register');
	},

	products: (req,res) => {
		res.render('products');
	},

	productDetail: (req,res) => {
		let html = readHTML('productDetail');
		res.send(html);
	},

	productCart: (req,res) => {
		let html = readHTML('productCart');
		res.send(html);
	},
};

module.exports = controller;
