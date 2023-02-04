require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const connectDb = () => {
    try {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


    } catch (er) {

        console.log(er);

    }
}

module.exports = connectDb; 