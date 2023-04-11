
const { json } = require('express');
const recordsPerPage = require('../Config/config');
const connectDb = require('../Config/db');
const { validateImage } = require('../utils/ImageValidation');
const Product = require('./../Models/productModel');
const path = require('path');
const uuid = require('uuid').v4;
const fs = require('fs');
const PRODUCT_IMAGES_UPLOAD_DIRECTORY = path.resolve(__dirname, "../../frontend", "public", "images", "Products");
const getBestSeller = async (req, res, next) => {
    try {
        const product = await Product.aggregate([
            { $sort: { category: 1, sales: -1 } },
            { $group: { _id: "$category", $doc_with_max_sales: { $first: "$$ROOT" } } },
            { $replaceWith: "$doc_with_max_sales" },
            { $limit: 3 }
        ])


    } catch (error) {
        next(error);
    }
}

const getProductById = async (req, res, next) => {
    try {


        const productId = req.params.productId;
        const product = await Product.findById(productId).populate('reviews').orFail();
        res.json(product);

    } catch (error) {
        next(error);
    }
}

const getProducts = async (req, res, next) => {

    try {


        function getPriceFilter() {
            if (!req.query.price) {
                return null;
            }

            return { price: { $lte: Number(req.query.price) } };
        }

        function getRatingFilter() {
            if (!req.query.rating) {
                return null;
            }

            return {
                rating: { $in: req.query.rating.split(',') }
            };
        }

        function getCategoryFilterFromQueryParams() {
            if (!req.query.category) {
                return null;
            }

            let categoriesRegEx = req.query.category.split(',').map((item) => {
                return new RegExp("^" + item);
            });
            console.log(categoriesRegEx);
            return {
                category: { $in: categoriesRegEx }
            };
        }

        function getCategoryFilterFromRouteParams() {
            if (!req.params.searchCategory) {
                return null;
            }

            const category = req.params.searchCategory.replaceAll(',', '/');
            const regEx = new RegExp("^" + category);
            console.log(regEx);
            return {
                category: regEx
            };
        }

        function getAttributeFilter() {
            if (!req.query.attrs) {
                return null;
            }
            const attrsArr = req.query.attrs.split(',');
            var filter = [];
            attrsArr.map((item) => {

                const key = item.split('-')[0];
                const val = item.split('-').slice(1);
                filter.push(
                    {
                        attrs: {
                            $elemMatch: {
                                key: key,
                                value: { $in: val }
                            }
                        }
                    }
                );
            });

            console.log(JSON.stringify(filter));
            console.log(filter);
            return filter;


        }

        function getSearchFilter() {
            if (!req.params.searchProduct) {
                return null;
            }
            return {
                $text: {
                    $search: req.params.searchProduct
                }
            };

        }


        function getMergedFilter() {
            let mergedFilter = [];
            let isThereFilterQuery = false;

            const priceFilter = getPriceFilter();
            const ratingFilter = getRatingFilter();
            const categoryFilterFromQueryParams = getCategoryFilterFromQueryParams();
            const categoryFilterFromRouteParams = getCategoryFilterFromRouteParams();
            const searchFilter = getSearchFilter();
            const attributeFilter = getAttributeFilter();

            isThereFilterQuery = priceFilter || ratingFilter || categoryFilterFromQueryParams || categoryFilterFromRouteParams || attributeFilter;
            [priceFilter, ratingFilter, categoryFilterFromQueryParams,
                categoryFilterFromRouteParams, searchFilter].map((item) => {
                    if (item) mergedFilter.push(item);
                });

            if (attributeFilter) mergedFilter.push(...attributeFilter);

            if (isThereFilterQuery) {
                return { $and: mergedFilter };
            }
            return {};
        }

        // Total Products in the database 
        const totalProducts = await Product.countDocuments({});

        // Total possible pages in pagination 
        const totalPages = Math.ceil(totalProducts / recordsPerPage);
        const pageNum = Number(req.query.pageNum) || 1;
        const skipPages = (pageNum - 1) * recordsPerPage;

        // How to filter Products according to some criterias 
        var mergedFilter = getMergedFilter();

        // How to sort Products
        const sortQuery = req.query.sortQuery;
        var sortFun = {};
        if (sortQuery) {
            sortFun = { [sortQuery.split('_')[0]]: Number(sortQuery.split('_')[1]) };
        }

        // Database Query to get Products 
        console.log(JSON.stringify(mergedFilter));
        const allProducts = await Product.find(mergedFilter)
            .sort(sortFun)
            .skip(skipPages)
            .limit(recordsPerPage);

        res.status(201).json({ allProducts, totalPages });
    } catch (error) {
        next(error);
    }
}

const adminGetProducts = async (req, res, next) => {
    try {
        console.log(req.user);
        const product = await Product.find({})
            .sort({ category: 1 })
            .select('name price category');
        res.json(product);
    } catch (error) {
        next(error);
    }
}

const adminDeleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product)
            product.delete().then(() => { res.send("Product Deleted!") });
        else res.send("Product doesn't exist.")

    } catch (error) {
        next(error);
    }
}

const adminCreateProduct = async (req, res, next) => {
    try {

        const product = new Product();
        const { name, description, category, count, price, attributesTable } = req.body;
        product.name = name; product.description = description; product.category = category;
        product.count = Number(count); product.price = Number(price);

        if (attributesTable.length > 0) {

            attributesTable.map((item) => {
                product.attrs.push(item);
            });
        }
        product.save()
        res.json({
            id: product._id,
            name: product.name
        });

    } catch (error) {
        next(error);

    }
}

const adminUpdateProduct = async (req, res, next) => {

    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(400).send("Product with this id not found");
        }
        else {

            const { name, description, category, count, price, attributesTable } = req.body;
            product.name = name || product.name; product.description = description || product.description;
            product.category = category || product.category; product.count = count || product.count;
            product.price = price || product.price;
            if (attributesTable.length > 0) {
                product.attrs = [];
                for (item of attributesTable) {
                    product.attrs.push(item);
                }
            }
            product.save();
            res.json({
                message: 'product successfully updated',
                product
            })
        }
    } catch (error) {
        next(error);

    }
}

const adminUpload = async (req, res, next) => {
    try {
        const files = req.files;
        if (!files || !files.images) {
            res.status(400).send("No files were uploaded!");
            return;
        }
        const isValid = validateImage(files.images);
        if (isValid.error != false) {
            res.status(400).send(isValid);
            return;
        }

        let imageTable = [];
        if (Array.isArray(files.images)) {
            imageTable = files.images;
        }
        else {
            imageTable = [files.images];
        }
        let imagePaths = [];
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if (!product) {
            res.status(400).send("No product has this product id.");
            return;
        }

        for (let image of imageTable) {

            const ext = path.extname(image.name);
            const fileName = uuid();
            //console.log(ext);
            const uploadPath = path.join(PRODUCT_IMAGES_UPLOAD_DIRECTORY, fileName) + ext;
            console.log(uploadPath);
            image.mv(uploadPath, (err) => {
                if (err) {
                    res.status(500).send(err);
                }
            });
            product.images.push({ path: path.join("/images/Products/", fileName) + ext });
            imagePaths.push(path.join("/images/Products/", fileName) + ext);


        }
        product.save();

        res.json({ image_paths: imagePaths });

    } catch (error) {
        next(error);
    }
}

const adminDeleteProductImage = async (req, res, next) => {
    try {

        const imagePath = decodeURIComponent(req.params.imagePath);
        const productId = req.params.productId;

        const imageCompletePath = path.join(path.resolve(PRODUCT_IMAGES_UPLOAD_DIRECTORY + '/../../'), (imagePath));

        fs.unlink(imageCompletePath, (err) => {
            if (err) {
                res.status(500).send(err);
            }
        });

        const product = await Product.findOneAndUpdate({ _id: productId }, {
            $pull: {
                images: {
                    path: imagePath
                }
            }
        }).orFail();




        res.end();

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getProducts, getProductById, getBestSeller, adminGetProducts,
    adminDeleteProduct, adminCreateProduct, adminUpdateProduct,
    adminUpload, adminDeleteProductImage
} 