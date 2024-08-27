const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/categories/:categoryname/products', productController.getProducts);
router.get('/categories/:categoryname/products/:productid', productController.getProductById);

module.exports = router;
