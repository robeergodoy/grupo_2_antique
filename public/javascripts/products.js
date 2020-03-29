const express = require('express');
const router = express.Router();
const db = require('../../src/database/models')
router.get('/', (req, res) => {
   
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
   
})

router.get('/products/:id', function(req, res, next) {
    db.product
        .findByPk(req.params.id)
        .then(data => {
            if (data) {
                return res.json(data)
            }

            return res.status(404).end('Not found')
        })
});

module.exports = router