const { signToken } = require('../services/strategies/util');
const { getUserByEmail, registerUser, login } = require('../services/user');
const { ServerError } = require('../../config/serverConfig');

module.exports = new class UserController {
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

  async register(req, res ,next) {
    const {createdUser , err, status} = await registerUser(req.body);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success', data: createdUser });
  }

  async login(req, res, next) {
    const { response, err, status } = await login(req.body);
    if(err) return next(new ServerError(err, status));
    res.json(response);
  }

}