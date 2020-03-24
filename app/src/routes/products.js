const express            = require('express')
const router             = express.Router()
const multer             = require('multer')
const ImgurStorage       = require('multer-storage-imgur')
const productsController = require('../controllers/productsController')

const IMGUR_ID = 'caa7f5b12f234a1'

const upload = multer({
    storage: ImgurStorage({ clientId: IMGUR_ID })
  })

router.get('/', productsController.products)

router.get('/create', productsController.productCreate)
router.post('/create', upload.single('image'), productsController.productCreateSave)

router.get('/:id', productsController.productDetail)

router.get('/:id/edit', productsController.productEdit)
router.post('/:id/edit', productsController.productSave)

module.exports = router