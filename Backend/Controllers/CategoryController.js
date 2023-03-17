const connectDb = require("../Config/db");
const Category = require("../Models/CategoryModel");

const getCategories = async (req, res, next) => {


    try {
        const Categories = await Category.find({});
        res.json(Categories);
    }
    catch (er) {
        next(er);
    }

}

const insertCategory = async (req, res, next) => {


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


    try {
        const categoryToDelete = decodeURIComponent(req.params.category);
        if (categoryToDelete !== "Choose Category") {
            const categoryExists = await Category.findOne({ name: categoryToDelete });//.orFail();
            console.log(categoryExists);
            if (categoryExists) {
                categoryExists.delete();
                res.status(501).send("Choosen Category Deleted");
            }
            else {
                res.status(500).send("Category doesn't exist");
            }

        }
        else {
            res.status(200).send("Nothing To Delete");
        }

    } catch (er) {
        next(er);
    }

}

const saveAttr = async (req, res, next) => {

    const { key, val, categoryChosen } = req.body;
    if (!key || !val || !categoryChosen) { res.status(400).send("All inputs are required"); }

    console.log(`Key : ${key} , Val : ${val}, categoryChosen: ${categoryChosen}`);


    try {

        const categoryExists = await Category.findOne({ name: categoryChosen }).orFail();
        if (categoryExists) {

            var attributeWithGivenKeyFound = false;

            categoryExists.attr.map((item, idx) => {
                if (item.key === key) {


                    var previousValArray = item.value;
                    previousValArray.push(val);
                    var newValArray = [...new Set(previousValArray)];
                    categoryExists.attr[idx].value = newValArray;
                    attributeWithGivenKeyFound = true;
                }
            });


            if (!attributeWithGivenKeyFound) {
                categoryExists.attr.push({
                    key: key,
                    value: [val]
                });
            }
            await categoryExists.save();
            const updatedData = await Category.find({}).sort({ name: "asc" });
            res.status(201).json({
                updatedData: updatedData
            });


        }

    }
    catch (er) {
        next(er);
    }

}

module.exports = { getCategories, insertCategory, deleteCategory, saveAttr }; 