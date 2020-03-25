const passport = require('passport');
const dotenv = require('dotenv');
const { OAuth2Strategy } = require('passport-google-oauth');

dotenv.config();

const GoogleStrategy = OAuth2Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

exports.googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
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