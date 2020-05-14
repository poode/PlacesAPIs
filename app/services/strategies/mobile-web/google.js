const passport = require('passport');
const dotenv = require('dotenv');
const GoogleTokenStrategy = require('passport-google-id-token');

dotenv.config();

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
 
exports.googleTokenStrategy = new GoogleTokenStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
  function(parsedToken, googleId, done) {
    done(null, googleId);
  });
