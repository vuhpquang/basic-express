const mongoose = require('mongoose');

const userShchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
      }
    ]
});

let User = mongoose.model('User', userShchema);
module.exports = User;