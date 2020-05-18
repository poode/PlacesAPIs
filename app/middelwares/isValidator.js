const { ServerError } = require('../../config/serverConfig');

exports.isValidator = (req, res, next) => {
  if(!Number.isInteger(req.params.id)) next(new ServerError('You are not allowed!', 403));
  next();
}