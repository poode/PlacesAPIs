const db = require('../../models');
const { hashPassword, signToken, verifyPassword } = require('./strategies/util');

const getUserById = async id => {
  const user = await db.user.findOne({ where: { id }, raw: true });
  if(!user) return { err: `User with ID ${id} is not found`, status: 404 };
  return { user };
}
exports.getUserById = getUserById

async function getUserByEmail(email) {
  const user = await db.user.findOne({ where: { email }, raw: true });
  if(!user) return { err: `User with email ${email} is not found`, status: 404 };
  return { user };
};
exports.getUserByEmail = getUserByEmail;

async function getUserByUsername(username) {
  const user = await db.user.findOne({ where: { username }, raw: true });
  if(!user) return { err: `User with username ${username} is not found`, status: 404 };
  return { user };
};
exports.getUserByUsername = getUserByUsername;

async function getUserByUsername(username) {
  const user = await db.user.findOne({
    where: {
      username
    },
    raw: true
  });
  if (user) return {
    err: `User with username ${username} is found please try another username`,
    status: 400
  };

  return {
    isUniqueUsername: true
  };
};
exports.getUserByEmail = getUserByEmail;

exports.registerUser = async reqBody => {
  const { err, user} = await getUserByEmail(reqBody.email);
  if (user) {
    return { err: `User with email ${reqBody.email} is already found`, status: 409 };
  }

  const duplicated = await getUserByUsername(reqBody.username);
  if (duplicated.err) {
    return { err, status };
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
  const validPassword = await verifyPassword(reqBody.password, user.password);
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

exports.socialLogin = async ({ user }) => {
  if(!user._json.email) return { err: 'please allow us to read your email' , status: 400 };
  const found = await getUserByEmail(user._json.email);
  if(found.err) return { err: found.err , status: found.status };

  delete found.user.password;
  const response = {
    message: 'success', 
    data: {
      user: found.user,
      token: signToken(found.user)
    }
  }
  return { response };
}

exports.changePassword = async ({ user, body }) => {
  const { id } = user;
  const { oldPassword, newPassword } = body;
  const result = await getUserById(id);
  const validPassword = await verifyPassword(oldPassword, result.user.password);
  if(!validPassword) return { err: 'password is wrong!', status: 406 };
  await db.user.update({ password: await hashPassword(newPassword)}, { where: { id }});
  return { response: 'success!' };
}

exports.updateUserProfile = async ({ user, body }) => {
  const emailFound = await getUserByEmail(body.email);

  if(emailFound.user && emailFound.user.id !== user.id) {
    return { err: `Please use another email as ${body.email} already used`, status: 400 };
  }
  const usernameFound = await getUserByUsername(body.username);

  if(usernameFound.user && usernameFound.user.id !== user.id) {
    return { err: `Please use another username as ${body.username} already used`, status: 400 };
  }

  await db.user.update(body,{
    where: {
      id: user.id
    }
  });

  const newProfile = await db.user.findOne({ where: { id: user.id }, raw: true });
  delete newProfile.password;
  return { updatedUser: newProfile };
}

exports.getUserProfile = async ({ user }) => {
  const found = await getUserByEmail(user.email);
  if(found.err) return { err: found.err, status: found.status };
  delete found.user.password;
  return { user: found.user };
}
