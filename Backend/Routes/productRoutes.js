
const express = require('express');
const app = express.Router();

const { getProducts, getProductById, getBestSeller, adminGetProducts, adminDeleteProduct, adminCreateProduct, adminUpdateProduct, adminUpload, adminDeleteProductImage } = require('../Controllers/productController');
const verifyIsLoggedIn = require('../Middleware/verifyAuth');
const verifyIsAdmin = require('../Middleware/verifyIsAdmin');

app.get('/category/:searchCategory', getProducts);
app.get('/category/:searchCategory/search/:searchProduct', getProducts);
app.get('/search/:searchProduct', getProducts);
app.get('/get-one/:productId', getProductById);
app.get('/', getProducts);
app.get('/bestsellers', getBestSeller);

app.use(verifyIsLoggedIn);
app.use(verifyIsAdmin);

app.get('/admin', adminGetProducts);
app.delete('/admin/:id', adminDeleteProduct);
app.delete('/admin/:imagePath/:productId', adminDeleteProductImage);
app.post('/admin', adminCreateProduct);
app.post('/admin/upload', adminUpload);
app.put('/admin/:id', adminUpdateProduct);

module.exports = app; 