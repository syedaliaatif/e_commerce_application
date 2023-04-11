const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateAuthToken = (_id, name, lastname, email, isAdmin) => {

    return jwt.sign({ _id, name, lastname, email, isAdmin }, process.env.JWT_SECRET_KEY, { expiresIn: "7h" });
}

module.exports = generateAuthToken; 