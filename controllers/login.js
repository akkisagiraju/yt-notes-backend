const router = require('express').Router();

router.post('/', async (request, response) => {
  console.log(request.body);
  return response.status(200).json({ message: 'You are logged in!' });
});

module.exports = router;
