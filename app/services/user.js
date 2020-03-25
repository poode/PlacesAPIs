const db = require('../../models');
const { hashPassword, signToken, verifyPassword } = require('./strategies/util');

exports.getUserById = async id => {
  const user = await db.user.findOne({ where: { id }, raw: true });
  if(!user) return { err: `User with ID ${id} is not found`, status: 404 };
  return { user };
}

async function getUserByEmail(email) {
  const user = await db.user.findOne({ where: { email }, raw: true });
  if(!user) return { err: `User with email ${email} is not found`, status: 404 };
  return { user };
};
exports.getUserByEmail = getUserByEmail;

exports.registerUser = async reqBody => {
  const { err, user} = await getUserByEmail(reqBody.email);
  if (user) {
    return { err: `User with email ${reqBody.email} is already found`, status: 409 };
  }
  reqBody.password = await hashPassword(reqBody.password);
  const createdUser = await db.user.create(reqBody);
  console.log(createdUser.dataValues)
  delete createdUser.dataValues.password;
  return { createdUser };
}

exports.login = async (reqBody) => {
  const { err, user, status } = await getUserByEmail(reqBody.email);
  if(err) return { err , status };
  const validPassword = verifyPassword(reqBody.password, user.password);
  if(!validPassword) return { err: 'password is wrong!', status: 406 };
  delete user.password;
  const response = {
    message: 'success', 
    data: {
      user,
      token: signToken(user)
    }
  }
  return { response };
}