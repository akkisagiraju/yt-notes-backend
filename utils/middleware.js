const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ message: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ message: error.message });
  }

  next(error);
};

module.exports = {
  errorHandler,
};
