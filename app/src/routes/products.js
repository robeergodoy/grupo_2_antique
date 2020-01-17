const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const productsController = require('../controllers/productsController')
const destinationImgPath = 'public/images/'

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, destinationImgPath)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})


router.get('/', productsController.products)
router.post('/', upload.any(), productsController.productCreateSave)

router.get('/create', productsController.productCreate)

router.get('/:id', productsController.productDetail)

router.get('/:id/edit', productsController.productEdit)



module.exports = router