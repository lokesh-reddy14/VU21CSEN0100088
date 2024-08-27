const productService = require('../services/productService');

const getProducts = async (req, res) => {
    try {
        const { categoryname } = req.params;
        const { top, minPrice, maxPrice, page, sort } = req.query;
        const products = await productService.getTopProducts(categoryname, top, minPrice, maxPrice, page, sort);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

const getProductById = async (req, res) => {
    try {
        const { categoryname, productid } = req.params;
        const product = await productService.getProductDetails(categoryname, productid);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product details' });
    }
};

module.exports = {
    getProducts,
    getProductById,
};
