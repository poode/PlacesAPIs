const passport = require('passport');
const dotenv = require('dotenv');
const FacebookTokenStrategy = require('passport-facebook-token');

dotenv.config();

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

exports.facebookTokenStrategy = new FacebookTokenStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    fbGraphVersion: 'v6.0'
  }, function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
);
