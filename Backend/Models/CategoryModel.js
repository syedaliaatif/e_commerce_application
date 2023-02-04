const mongoose = require("mongoose");


const CategoryModelSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            default: "default category description",

        },
        image: {
            path: {
                type: String,
                default: '/images/tablets-category.png',
            }
        },
        attr:
            [
                {
                    key: { type: String },
                    value: [{ type: String }]
                }
            ]

    }
)
CategoryModelSchema.index({ description: 1 });
const category = mongoose.model("Categories", CategoryModelSchema);
module.exports = category; 