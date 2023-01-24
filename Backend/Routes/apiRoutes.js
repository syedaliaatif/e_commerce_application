const express = require('express');
const app = express();
const productRoutes = require('./productRoutes');
app.use("/product", productRoutes);

module.exports = app; 