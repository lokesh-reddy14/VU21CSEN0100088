const axios = require('axios');

const testServerBaseUrl = 'http://20.244.56.144/test/';

const getTopProducts = async (categoryname, top, minPrice, maxPrice, page, sort) => {
    try {
        const url = `${testServerBaseUrl}companies/AMZ/categories/${categoryname}/products`;
        const response = await axios.get(url, {
            params: {
                top: top || 10,
                minPrice: minPrice || 0,
                maxPrice: maxPrice || 100000,
                page: page || 1,
                sort: sort || 'price_asc',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching top products');
    }
};

const getProductDetails = async (categoryname, productid) => {
    try {
        const url = `${testServerBaseUrl}companies/AMZ/categories/${categoryname}/products/${productid}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching product details');
    }
};

module.exports = {
    getTopProducts,
    getProductDetails,
};
