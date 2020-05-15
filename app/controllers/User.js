const { signToken } = require('../services/strategies/util');
const {
  getUserByEmail,
  registerUser,
  login,
  changePassword,
  socialLogin,
  updateUserProfile
} = require('../services/user');
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

  async loginWithSocial(req, res, next) {
    const { response, err, status } = await socialLogin(req);
    if(err) return next(new ServerError(err, status));
    res.json(response);
  }

  async changePassword(req, res, next) {
    const { response, err, status } = await changePassword(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message: response });
  }

  async updateProfile(req, res, next) {
    const { updatedUser, err, status } = await updateUserProfile(req);
    if(err) return next(new ServerError(err, status));
    res.json({ profile: updatedUser });
  }

}
