const express = require("express");
const getOrders = require("../Controllers/OrderController");

const app = express.Router();

app.get('/', getOrders);

module.exports = app; 