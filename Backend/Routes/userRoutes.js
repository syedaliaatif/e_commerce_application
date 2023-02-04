const express = require("express");
const getUsers = require("../Controllers/UserController");
const app = express.Router();

app.get('/', getUsers);

module.exports = app; 