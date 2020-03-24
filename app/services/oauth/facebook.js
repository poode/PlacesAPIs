const passport = require('passport');
const dotenv = require('dotenv');
const { Strategy } = require('passport-facebook');

dotenv.config();

const FacebookStrategy = Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

exports.facebookStrategy = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: [
      'email',
      'name',
      'displayName',
      'picture' ,
      'name_format',
      'short_name',
    ]
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
)