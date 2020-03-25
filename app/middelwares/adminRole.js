const { ServerError } = require('../../config/serverConfig');

exports.adminRole = (req, res, next) => {
  if(req.user.role !== 'admin') next(new ServerError('You are not allowed!', 403));
  next();
}