const User = require('../models/user.model.js');
const Book = require('../models/book.model.js');

const bookController = {
    //ADD Author
    addBook: async (req, res) => {
      try {
        const newUser = new Book(req.body);
        const savedUser = await newUser.save();
        if (req.body.author) {
          const author = await User.findById(req.body.author);
          // const author = User.find({ _id: req.body.author });
          // author.books.push(savedUser);
          await author.updateOne({ $push: { books: savedUser._id } });
        }
        res.status(200).json(savedUser);

      } catch (err) {
        res.status(500).json(err);
      }
    },
};

module.exports = bookController;