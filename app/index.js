const express = require('express');
const cors = require('cors');
const trimRequest = require('trim-request');
const passport = require('passport');
const path = require('path');
const morgan = require('morgan');

const { ServerError, IMAGE_BASE_URL } = require('../config/serverConfig');
const { requestLogger } = require('./middelwares/requestLogger');

const { userRouter } = require('./router/user');
const { cityRouter } = require('./router/city');
const { placeRouter } = require('./router/place');
const { pollRouter } = require('./router/poll');
const { voteRouter } = require('./router/vote');

const app = express();
app.use(passport.initialize());
app.use(cors());
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev': 'tiny'));
app.use(IMAGE_BASE_URL,express.static(path.resolve(`.${IMAGE_BASE_URL}`)));
app.use(express.json());

app.use(trimRequest.all);

app.get('/healthcheck', (req, res, next) => {
  res.json({ message: 'server is Up and Running!' });
});

app.use('/users', userRouter);
app.use('/cities', cityRouter);
app.use('/places', placeRouter);
app.use('/polls', pollRouter);
app.use('/votes', voteRouter);


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
