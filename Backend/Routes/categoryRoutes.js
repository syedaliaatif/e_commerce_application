
const express = require('express');
const { getCategories, insertCategory, deleteCategory, saveAttr } = require('../Controllers/CategoryController');

const router = express.Router();

router.get('/', getCategories);
router.post('/', insertCategory);
router.delete('/:category', deleteCategory);
router.post('/attr', saveAttr);

module.exports = router; 