const express = require("express");
const { getUsers, registerUser, loginUser, updateUserProfile, getUserProfile, addReviewForProduct } = require("../Controllers/UserController");
const verifyAuth = require("../Middleware/verifyAuth");
const verifyIsAdmin = require("../Middleware/verifyIsAdmin");
const app = express.Router();


app.post('/register', registerUser);
app.post('/login', loginUser);

// is Logged In Routes
app.use(verifyAuth);

app.put("/profile", updateUserProfile);
app.get("/profile/:id", getUserProfile);
app.post("/review/:productId", addReviewForProduct);

// Routes for Admin Only 
app.use(verifyIsAdmin);

app.get('/', getUsers);

module.exports = app; 