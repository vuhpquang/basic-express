const router = require('express').Router();
const bookController = require('../controllers/book.controller.js');

//ADD Author
router.post(
  '/add',
  bookController.addBook,
);

module.exports = router;
