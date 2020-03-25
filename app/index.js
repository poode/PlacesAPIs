const express = require('express');
const cors = require('cors');
const trimRequest = require('trim-request');
const passport = require('passport');

const { ServerError } = require('../config/serverConfig');
const { requestLogger } = require('./middelwares/requestLogger');

const { userRouter } = require('./router/user');
const { cityRouter } = require('./router/city');
const { placeRouter } = require('./router/place');

const app = express();
app.use(passport.initialize());
app.use(cors());
app.use(express.json());

app.use(trimRequest.all);
app.use(requestLogger);

app.get('/healthcheck', (req, res, next) => {
  res.json({ message: 'server is Up and Running!' });
});

app.use('/user', userRouter);
app.use('/city', cityRouter);
app.use('/place', placeRouter);


// 404 handler
app.use('*', (req, res, next) => {
  next(new ServerError('API_NOT_FOUND', 404));
});

// error handler
app.use((err, req, res, next) => {
  if (!err.status) {
    console.error(err);
    process.exit(0);
  }
  console.log('Custom Server Error>', err.message);
  res.status(err.status).json({ message: err.message, status: err.status });
});

module.exports = {
  app
}
