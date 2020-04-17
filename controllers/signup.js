const User = require('../models/User');
const router = require('express').Router();
const bcrypt = require('bcrypt');

router.post('/', async (request, response) => {
  const { username, email, password } = request.body;
  if (!password && password.length < 3) {
    return response.status(400).json({
      message: 'The password has to be at least 3 characters.',
    });
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const user = new User({
    username,
    email,
    passwordHash,
  });

  const savedUser = await user.save();
  return response.status(200).json(savedUser);
});

module.exports = router;
