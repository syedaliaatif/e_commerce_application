require("dotenv").config({ path: './../.env' });
const connectDb = require("../Config/db");
const Category = require("../Models/CategoryModel");
const Order = require("../Models/OrderModel");
const Product = require("../Models/productModel");
const Review = require("../Models/ReviewsModel");
const User = require("../Models/UserModel");
const categoryData = require("./data/categories");
const orderData = require("./data/orders");
const productData = require("./data/products");
const reviewData = require("./data/reviews");
const userData = require("./data/users");



const importData = async () => {
    connectDb();
    try {
        await Category.collection.dropIndexes()
        await Product.collection.dropIndexes()

        await Category.collection.deleteMany({})
        await Product.collection.deleteMany({})
        await Review.collection.deleteMany({})
        await User.collection.deleteMany({})
        await Order.collection.deleteMany({})

        await Category.insertMany(categoryData)
        const reviews = await Review.insertMany(reviewData)
        const sampleProducts = productData.map((product) => {
            reviews.map((review) => {
                product.reviews.push(review._id)
            })
            return { ...product }
        })
        await Product.insertMany(sampleProducts)
        await User.insertMany(userData)
        await Order.insertMany(orderData)

        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch (error) {
        console.error("Error while proccessing seeder data", error)
        process.exit(1);
    }
}
importData()

