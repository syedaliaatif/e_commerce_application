const Review = require("../Models/ReviewsModel");
const User = require("../Models/UserModel");
const generateAuthToken = require("../utils/generateAuthToken");
const { hashPassword, comparePassword } = require("../utils/hashPassword");



const getUsers = async (req, res, next) => {
    try {

        const users = await User.find({}).select("-password");

        res.json(users);

    } catch (error) {
        next(error);
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { email, password, doNotLogOut } = req.body;
        if (!(email && password)) {
            res.send("All inputs are required");
        }
        const hashedPassword = hashPassword(password);
        const userExist = await User.findOne({ email: email });
        if (!(userExist && comparePassword(password, userExist.password))) {
            res.send("Wrong Credentials");
        }
        let cookieParams = {
            httpOnly: true,
            secure: process.env.NODE_ENV == 'production',
            sameSite: 'strict'
        }
        if (doNotLogOut) {
            cookieParams = { ...cookieParams, maxAge: 1000 * 60 * 60 * 24 * 7 }
        }
        res.cookie("access_token",
            generateAuthToken(
                userExist._id, userExist.name, userExist.lastName,
                userExist.email, userExist.isAdmin
            ),
            cookieParams
        ).json({
            success: "User logged in",
            userLoggedIn: {
                _id: userExist._id,
                name: userExist.name,
                lastName: userExist.lastName,
                email: userExist.email,
                isAdmin: userExist.isAdmin
            }
        });



    } catch (error) {
        next(error);
    }
}

const registerUser = async (req, res, next) => {
    try {
        const { name, email, password, lastName } = req.body;
        if (!name || !email || !password || !lastName) {
            res.status(400).send({
                error: "All details should be provided"
            });
            return;
        }

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            res.status(400).send({
                error: "User with this email already exist."
            });
        }

        const user = new User();
        user.name = name;
        user.email = email.toLowerCase();
        user.password = hashPassword(password);
        user.lastName = lastName;
        user.save();

        res.cookie("access_token", generateAuthToken(user._id, user.name, user.lastName, user.email, user.isAdmin),
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict"
            })
            .status(201)
            .json({
                success: "User created",
                userCreated: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    lastName: user.lastName
                }

            })
    } catch (error) {
        next(error);
    }
}

const updateUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id).orFail();
        user.name = req.body.name || user.name;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;
        user.phoneNumber = req.body.phoneNumber;
        user.address = req.body.address;
        user.country = req.body.country;
        user.zipCode = req.body.zipCode;
        user.city = req.body.city;
        user.state = req.body.state;
        if (req.body.password !== user.password) {
            user.password = hashPassword(req.body.password);
        }
        await user.save();
        res.json({
            success: "User updated",
            userUpdated: {
                _id: user._id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                isAdmin: user.isAdmin
            }
        });
        //res.cookie("access_token", generateAuthToken(user._id, user.name, user.email, user.isAdmin), {})

    } catch (error) {
        next(error);
    }
}
const getUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select('-password').orFail();
        res.json(user);
    } catch (error) {
        next(error);
    }
}

const addReviewForProduct = async (req, res, next) => {
    try {
        const { comment, rating } = req.body;
        if (!(comment && rating)) {
            return res.status(400).send("Comment and ratings are required to write a review.")
        }
        const ObjectId = require("mongodb").ObjectId;
        let reviewId = ObjectId();
        const review = Review.create([{
            _id: reviewId,
            comment: comment,
            rating: rating,
            user: {
                _id: req.user._id,
                name: req.user.name + " " + req.user.lastName
            }
        }]);

        res.send("Review created.");

    } catch (error) {
        next(error);
    }
}

module.exports = { getUsers, registerUser, loginUser, updateUserProfile, getUserProfile, addReviewForProduct }; 