const router = require('express').Router();
const userController = require('../controllers/user.controller.js');

//ADD Author
router.post(
  '/add',
  userController.addUser,
);

router.get('/getAll', userController.getAll);

module.exports = router;
