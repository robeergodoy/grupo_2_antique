const db = require('../../database/models')

let apiController = {
    products: (req, res) => {
   
        db.product.findAll({})
           
            .then(products => {
            
    
                let answord = {
                    meta: {
                        status: 200,
                        total_products: products.length,
                        url: '/api/products'
                       },
                    data: products
                }
                
                res.json(answord)
            })
    }
}

module.exports = apiController