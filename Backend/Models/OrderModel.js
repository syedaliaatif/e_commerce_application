const { default: mongoose, model } = require("mongoose");
const User = require("./UserModel");

const OrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User
    },

    orderTotal: {
        itemsCount: { type: Number, required: true, },
        cartSubTotal: { type: Number, required: true, }
    },
    cartItems: [{
        name: { type: String, required: true },
        price: { type: String, required: true },
        image: { path: { type: String, required: true } },
        quantity: { type: Number, required: true },
        count: { type: Number, required: true }
    }],
    transactionResult: {
        status: {
            type: String,
            required: true,
            default: "Not Paid"
        },
        createTime: {
            type: String
        },
        amount: {
            type: Number
        },
        isPaid: {
            type: Boolean,
            default: false,
            required: true,
        },
        paidAt: {
            type: Date,
        },
        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        deliveredAt: {
            type: Date
        }

    }
}, { timestamps: true });


const Order = mongoose.model("Orders", OrderSchema);

module.exports = Order; 