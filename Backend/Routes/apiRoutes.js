const express = require('express');
const categoryRoutes = require('./categoryRoutes');
const app = express();
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');

app.use("/product", productRoutes);
app.use("/category", categoryRoutes);
app.use("/order", orderRoutes);
app.use("/user", userRoutes);

module.exports = app; 