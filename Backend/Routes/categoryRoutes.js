
const express = require('express');
const { getCategories, insertCategory, deleteCategory, saveAttr } = require('../Controllers/CategoryController');
const verifyAuth = require('../Middleware/verifyAuth');
const verifyIsAdmin = require('../Middleware/verifyIsAdmin');

const router = express.Router();

router.get('/', getCategories);

router.use(verifyAuth);
router.use(verifyIsAdmin);
router.post('/', insertCategory);
router.delete('/:category', deleteCategory);
router.post('/attr', saveAttr);

module.exports = router; 