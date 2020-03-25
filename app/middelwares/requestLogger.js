var log = require('npmlog');

const logger = log;

module.exports.requestLogger = (req, res, next) => {
  if (req.originalUrl === '/robots.txt') {
    return res.json();
  }
  logger.info('Request', `\nRequest at: ${new Date().toLocaleString()}\nRequest method: ${req.method}\nRequested URL: ${req.originalUrl}\n${Object.entries(req.body).length ? `req.body: ${JSON.stringify(req.body, null, 2)}` : ''}`);
  next();
}