
const connectDb = require('../Config/db');
const Product = require('./../Models/productModel');

const getProducts = async (req, res) => {

    res.send("Handling Product routes, e.g. Search for products");
}

module.exports = getProducts; 