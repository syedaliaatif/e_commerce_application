const connectDb = require("../Config/db");
const Category = require("../Models/CategoryModel");

const getCategories = async (req, res, next) => {

    connectDb();
    try {
        const Categories = await Category.find({});
        res.json(Categories);
    }
    catch (er) {
        next(er);
    }

}

const insertCategory = async (req, res, next) => {

    connectDb();
    try {
        const { category } = req.body;
        if (!category) {
            res.status(400).send("Category variable is required");
        }
        else {
            const categoryExists = await Category.findOne({ name: category });
            if (categoryExists) {
                res.status(400).send("Category already exists");
            }
            else {
                const categoryCreated = await Category.create({
                    name: category
                })
                res.status(201).send("New Category Created");
            }
        }
    }
    catch (er) {
        next(er);
    }
}
const deleteCategory = async (req, res, next) => {

    connectDb();
    try {
        const categoryToDelete = decodeURIComponent(req.params.category);
        if (categoryToDelete !== "Choose Category") {
            const categoryExists = await Category.findOne({ name: categoryToDelete }).orFail();
            if (categoryExists) {
                categoryExists.delete();
                res.send("Choosen Category Deleted");
            }
            else {
                res.send("Category doesn't exist");
            }

        }
        else {
            res.status(200).send("Nothing To Delete");
        }

    } catch (er) {
        next(er);
    }

}
module.exports = { getCategories, insertCategory, deleteCategory }; 