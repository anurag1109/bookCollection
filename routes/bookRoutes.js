// bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Add Book API
router.post('/', bookController.createBook);

// Retrieve Books API
router.get('/', bookController.getAllBooks);

// Delete Book API
router.delete('/:id', bookController.deleteBook);

// Filter Books API
router.get('/filter', bookController.filterBooks);

// Sort Books API
router.get('/sort', bookController.sortBooks);

module.exports = router;
