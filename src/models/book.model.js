const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

let Book = mongoose.model('Book', bookSchema);

module.exports = Book;