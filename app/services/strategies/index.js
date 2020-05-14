const passport = require('passport');

const { facebookStrategy } = require('./web/facebook');
const { googleStrategy } = require('./web/google');
const { facebookTokenStrategy } = require('./mobile-web/facebook');
const { googleTokenStrategy } = require('./mobile-web/google');
const { jwtStrategy } = require('./jwt');

passport.use(facebookStrategy);
passport.use(googleStrategy);
passport.use(facebookTokenStrategy);
passport.use(googleTokenStrategy);
passport.use(jwtStrategy);

module.exports = {
  passport,
  facebook: (options = {}) => passport.authenticate('facebook', options),
  google: (options = {}) => passport.authenticate('google', options),
  facebookToken: (options = {}) => passport.authenticate('facebook-token', options),
  googleToken: (options = {}) => passport.authenticate('google-id-token', options),
  jwt: (options = {}) => passport.authenticate('jwt', options),
};
