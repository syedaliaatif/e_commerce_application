
const express = require('express');
const app = express.Router();

const getProducts = require('../Controllers/productController');

app.get('/', getProducts);

module.exports = app; 