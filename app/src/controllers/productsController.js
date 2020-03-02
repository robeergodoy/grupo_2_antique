const fs = require('fs')
const productsDbPath = './data/dataBase.json'


let productsList = fs.readFileSync(productsDbPath, {encoding: 'utf8'})

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
    products: (req,res, next) => {
        res.render('products', {productsList})
    },

    productCreate: (req, res) => {
        res.render('productCreate')
    },

    productDetail: (req, res) => {
        let productIndex = binarySearch(productsList, 0, productsList.length - 1, req.params.id)

        res.render('productDetail', {product: productsList[productIndex], isProductForEdit: false})
    },

    productCreateSave: (req, res) => {
        let newProduct = req.body

        newProduct.id = ((productsList[productsList.length - 1]).id) + 1

/* Falt validar que sucede cuando no queremos subir ninguna foro */

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
        let productIndex = binarySearch(productsList, 0, productsList.length - 1, req.params.id)
        res.render('productEdit', {product: productsList[productIndex], isProductForEdit : true })
    },

    productSave: (req, res) => {
        console.log(".......................................v",req.body);
        
        res.redirect(`/products/${req.params.id}`)
    }
}

module.exports = controller