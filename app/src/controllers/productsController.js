const fs = require('fs')
const productsDbPath = './data/dataBase.json'
var db = require('../database/models')


let productsList = fs.readFileSync(productsDbPath, {encoding: 'utf8'})

productsList = JSON.parse(productsList)

const controller = {    
    products: (req,res, next) => {
        db.product.findAll({
			include: [
				{
					model: db.images
				}
			]
		}).then(products => {
			res.render('products', {productsList: products})
        })
    },

    productCreate: (req, res) => {
        res.render('productCreate')
    },

    productDetail: (req, res) => {
        db.product.findByPk(req.params.id,{
			include: [
				{
					model: db.images
				}
			]
		}).then(product => {
			res.render('productDetail', {product: product, isProductForEdit: false})
		})
    },

    productCreateSave: (req, res) => {
        let newProduct = req.body

        newProduct.id = ((productsList[productsList.length - 1]).id) + 1

     /* Falta validar que sucede cuando no queremos subir ninguna foto */

        newProduct.imageName = req.files[0].filename

        newProduct.category = ""

        productsList.push(newProduct)
        productsList = JSON.stringify(productsList)
        fs.writeFileSync(productsDbPath, productsList)

        res.redirect('/')
    },
  
    productCart: (req,res, next) => {

    },

    productEdit: (req, res) => {
        
        db.product.findByPk(req.params.id,{
			include: [
				{
					model: db.images
				}
			]
		}).then(product => {
			res.render('productEdit', {product: product, isProductForEdit : true })
		})
    },

    productSave: (req, res) => {

        console.log("Product body",req.body);
        db.product.update(
            {title: req.body.title,
             price: req.body.price,
             description: req.body.description},
            {where: {
                id:  req.params.id
                }
            }
        )
        .then( () => {
            res.redirect(`/products/${req.params.id}`)
        })
    }
}

module.exports = controller