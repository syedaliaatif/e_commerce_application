const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,

        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
            type: String
        },
        country: {
            type: String
        },
        zipCode: {
            type: Number
        },
        city: {
            type: String
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }


    },
    {
        timestamps: true
    }
)

const User = mongoose.model("Users", UserSchema);
module.export = User; 