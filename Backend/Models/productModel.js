
const mongoose = require("mongoose");
const Review = require("./ReviewsModel");
const ImageSchema = mongoose.Schema({
    path: { type: String, required: true }
});


const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,

        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        count: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
        },
        reviewsNumber: {
            type: Number,
        },
        sales: {
            type: Number,
            default: 0,
        },
        attrs: [
            {
                key: { type: String },
                value: { type: String }
            }
        ],
        images: [
            ImageSchema
        ],
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: Review
            }
        ]

    },
    {
        timestamps: true,
    }
);

productSchema.index({ name: "text", description: "text" }, { name: "TextIndex" });
productSchema.index({ "attrs.key": 1, "attrs.val": 1 });

const product = mongoose.model("Products", productSchema);

module.exports = product; 