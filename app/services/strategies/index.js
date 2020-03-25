const passport = require('passport');

const { facebookStrategy } = require('./facebook');
const { googleStrategy } = require('./google');
const { jwtStrategy } = require('./jwt');

passport.use(facebookStrategy);
passport.use(googleStrategy);
passport.use(jwtStrategy);

module.exports = {
  passport,
  facebook: passport.authenticate('facebook'),
  google: passport.authenticate('google'),
  jwt: passport.authenticate('jwt'),
};