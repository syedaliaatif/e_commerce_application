const express = require('express');
const categoryRoutes = require('./categoryRoutes');
const app = express();
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/orders", orderRoutes);
app.use("/users", userRoutes);

module.exports = app; 