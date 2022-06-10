const User = require('../models/user.model.js');
const Book = require('../models/book.model.js');

const userController = {
    //ADD Author
    addUser: async (req, res) => {
      try {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email || 'Email',
          password: req.body.password,
          books: [],
        });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);

      } catch (err) {
        res.status(500).json(err);
      }
    },

    //GET All Authors
    getAll: async (req, res) => {
      try {
        const allUsers = await User.find({});
        res.status(200).json(allUsers);
      } catch (err) {
        res.status(500).json(err);
      }
    },
};

module.exports = userController;