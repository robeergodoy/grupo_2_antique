const fs = require('fs')
let productsList = fs.readFileSync('./data/dataBase.json', {encoding: 'utf8'})
productsList = JSON.parse(productsList)


function binarySearch(arrayObjetc, first, last, id) {
    var mid = Math.floor((last - first)/2 + first)

    if (first > last) {
        return -1
    }

    if (arrayObjetc[mid].id == id) {
        return mid
    }
    
    if (arrayObjetc[mid].id > id){
        return binarySearch(arrayObjetc, first, mid - 1, id)
    }

    if (arrayObjetc[mid].id < id) {
        return binarySearch(arrayObjetc, mid + 1, last, id)
    }
}

const controller = {    
    products: (req,res) => {
        res.render('products', {productsList: productsList})
    },
 
    productDetail: (req, res) => {

        let productIndex = binarySearch(productsList, 0, productsList.length - 1, req.params.id)

        res.render('productDetail', {product: productsList[productIndex]})
    },
    
    productCart: (req,res) => {

    },

    productCreate: (req, res) => {
        res.send('productAdd')
    },

    productEdit: (req, res) => {
        
    }
}

module.exports = controller