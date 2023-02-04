
const express = require('express');
const { getCategories, insertCategory, deleteCategory } = require('../Controllers/CategoryController');

const router = express.Router();

router.get('/', getCategories);
router.post('/', insertCategory);
router.delete('/:category', deleteCategory);

module.exports = router; 