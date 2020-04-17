const express = require('express');
require('express-async-errors');
const mongoose = require('mongoose');
const cors = require('cors');
const loginRouter = require('./controllers/login');
const signupRouter = require('./controllers/signup');
const middleware = require('./utils/middleware');

mongoose.connect(process.env.MONGODB_URL_DEV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();

app.use(cors());
app.use(express.json());
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

app.use(middleware.errorHandler);

module.exports = app;
