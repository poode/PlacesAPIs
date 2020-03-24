const { signToken } = require('../services/oauth/util');
const { getUserByEmail } = require('../services/user');
const { ServerError } = require('../../config/serverConfig');

exports.UserController = new class UserController {
  self = this;
  async auth(req, res, next) {
    try {
      const { email } = req.user && req.user._json ? req.user._json : req.user
      const { err ,status , user } = await getUserByEmail(email);
      if(err) return next(new ServerError(err, status));
      delete user.password;
      const token = signToken(user);

      res.json({ message: 'Success',  user, token });
    } catch (error) {
      console.log(error);
      next(new ServerError('Failed To login', 417));
    }
  }

}