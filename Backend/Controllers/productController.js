
const connectDb = require('../Config/db');
const Product = require('./../Models/productModel');

const getProducts = async (req, res) => {
    connectDb();
    const pp = await Product.find({ name: "Panasonic" });
    console.log(pp);
    if (pp.length === 0) {
        Product.create({ name: 'Panasonic' });
    }
    else {
        console.log("Not making another object");
    }
    res.send("Handling Product routes, e.g. Search for products");
}

module.exports = getProducts; 