const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signToken = user => {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });
}

const hashPassword = async password => {
  if (!password) {
    throw new Error('Password was not provided');
  }

  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

const verifyPassword = async (candidate, actual) => {
  return await bcrypt.compare(candidate, actual);
}

module.exports = { signToken, hashPassword, verifyPassword };