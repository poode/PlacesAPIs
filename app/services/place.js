const db = require('../../models');
const { Op } = db.Sequelize;

exports.getPlaceById = async id => {
  const place = await db.place.findOne({ where: { id }, include: [db.user, db.city], raw: true });
  if(!place) return { err: `Place with ID ${id} is not found`, status: 404 };
  return { place };
}

async function getPlaceByName(name) {
  const place = await db.place.findOne({ where: { name }, include: [db.user, db.city], raw: true });
  if(!place) return { err: `There is no place with name ${name}`, status: 404 }
  return { place }
}
exports.getPlaceByName = getPlaceByName;

exports.createPlace = async (reqBody, userId) => {
  const { err, place, status } = await getPlaceByName(reqBody.name);
  if (place) {
    return { err: `The place with name ${reqBody.name} is already found`, status: 409 };
  }
  const createdPlace = await db.place.create({...reqBody, userId});

  return { createdPlace };
}

exports.searchForPlace = async reqQuery => {
  const placeList = await db.place.findAll({
    where: {
      name: {
        [Op.like]: `%${reqQuery.name}%`
      }
    },
    include: [{ model: db.user, attributes: ['email', 'name']}, db.city],
  });
  return placeList;
}