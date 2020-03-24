const db = require('../../models')

exports.getUserById = async (id) => {
  const user = await db.user.findOne({ where: { id }, raw: true });
  if(!user) return { err: `User with ID ${id} is not found`, status: 404 };
  return { user };
}

exports.getUserByEmail = async (email) => {
  const user = await db.user.findOne({ where: { email }, raw: true });
  if(!user) return { err: `User with email ${email} is not found`, status: 404 };
  return { user };
}