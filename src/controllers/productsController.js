const fs = require('fs')
var db = require('../database/models')

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

        db.product.create({
            title: req.body.title,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price,
            discount: req.body.discount,
            isActive: 1,
            sellerId: 1,
          })
          .then( product => {
            db.images.create({
                image_1: req.file.data.link,
                productId: product.id
            })
            .then( () => {
                res.redirect(`/products/${product.id}`)
            })
          })
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