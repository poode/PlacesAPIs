const { Strategy } = require('passport-jwt');

const { ServerError } = require('../../../config/serverConfig')
const { getUserById } = require('../user');

const JWTStrategy = Strategy;

const strategyOptions = {
  jwtFromRequest: req => req.get('x-auth-token'),
  secretOrKey: process.env.JWT_SECRET,
  passReqToCallback: true
}

const verifyCallback = async (req, jwtPayload, done) => {
  const { err, user } = await getUserById(jwtPayload.user.id);

  if (err) {
    return done(new ServerError(err, 404));
  }

  req.user = user
  return done(null, user);
}

exports.jwtStrategy = new JWTStrategy(strategyOptions, verifyCallback);

